<script setup>
import { useStyleStore } from "~/stores/style";
import { useCustomFetch } from "~/composables/useCustomFetch";
import { useReCaptcha } from 'vue-recaptcha-v3';

const recaptchaInstance = useReCaptcha();
const styleStore = useStyleStore();

const props = defineProps({
    data: {
        type: Object
    }
});

const recaptcha = async () => {
    // optional you can await for the reCaptcha load
    await recaptchaInstance?.recaptchaLoaded();

    // get the token, a custom action could be added as argument to the method
    const token = await recaptchaInstance?.executeRecaptcha('yourActionHere');

    return token;
};

const formData = ref({
    success: false,
    errors: {},
    response: '',
    status: 'unsent',
});

const form = ref({
    'form_id': props.data.id,
    'email_honeypot': '',
    'language': 1,
    'input': {}
});

const handleFileSelection = ( event, id ) => {
    form.value.input[id] = event.target.files[0];
}

const fieldIds = props.data.fields.map(field => field.id);
fieldIds.forEach(id => {
    form.value.input[id] = ''; // Use the ID as the key in the object
});

async function sendForm(){
    // is honeypot is not empty its just a fucking bot
    if(form.value.email_honeypot == ''){

        formData.value.status = 'pending';

        // this is 'just in case' variable
        form.value.email_honeypot = props.data.honey + '@simplo.cz';

        // get csrf token from Laravel sanctum
        await useFetch('/sanctum/csrf-cookie', { credentials: 'include' });
        const token = useCookie('XSRF-TOKEN')

        // get captcha token from Google Api
        const recaptchaToken = await this.recaptcha();

        // clear errors object before fetch
        formData.value.errors = {};

        // create FormData object, which is designed for requests body
        const formDataR = new FormData();

        formDataR.append('form_id', form.value.form_id);
        formDataR.append('email_honeypot', form.value.email_honeypot);
        formDataR.append('recaptcha_token', recaptchaToken);
        formDataR.append('language', form.value.language);

        // Append other input fields
        Object.keys(form.value.input).forEach(key => {
            formDataR.append(`input[${key}]`, form.value.input[key]);
        });

        // send the request and save response data to formData object
        const { data: responseData, status: responseStatus } = await useCustomFetch('/api/form/' + props.data.id + '/submit', { method: "POST", watch: false, body: formDataR, headers: { 'X-XSRF-TOKEN': token.value }, lazy: true})

        formData.value.response = responseData;
        formData.value.status = responseStatus;

        if(responseData.value.errors) {
            for (const key in responseData.value.errors) {
                const parts = key.split('.');
                const fieldId = parseInt(parts[1]);
                formData.value.errors[fieldId] = responseData.value.errors[key][0];
            }
        }

        if(responseData.value.message) {
            // this is how we hide form after it was successfully sent
            formData.value.success = true;
        }

        form.value.email_honeypot = '';
    }
}

</script>

<template>
    <div v-if="formData.success" class="rounded col-span-full bg-green-500 text-white text-lg p-4">
        {{ formData.response.message }}
    </div>
    <form v-else @submit.prevent="sendForm()" enctype="multipart/form-data" class="col-span-full">
        <template v-for="item in data.fields">
            <ElementsFormField :label="item.name" :labelFor="'form-' + item.id" cols="1">
                <ElementsFormControl
                        v-if="item.type !== 'file'"
                        :error="formData.errors[item.id]"
                        :maxlength="item.options.maxlength"
                        :min="item.options.min"
                        :max="item.options.max"
                        :name="'form-' + item.id"
                        :type="item.type"
                        v-model="form.input[item.id]"
                        :placeholder="item.options.placeholder"
                        class=""
                />
                <ElementsFormControl
                        v-else
                        :error="formData.errors[item.id]"
                        :name="'form-' + item.id"
                        :type="item.type"
                        @change="handleFileSelection( $event, item.id )"
                        class=""
                />
            </ElementsFormField>
        </template>
        <ElementsFormControl name="email_honeypot" type="text" v-model="form.email_honeypot" placeholder="Honeypot" class="overflow-hidden w-0 h-0" />
        <ElementsBaseButton :status="formData.status" hasPendingState :disabled="formData.status == 'pending'" color="primary" type="submit" :label="(data.localisation[0].submit_text ? data.localisation[0].submit_text : 'Odeslat')"></ElementsBaseButton>

        <p v-html="$t('forms.reCaptcha')" class="pt-6"></p>
    </form>
</template>

