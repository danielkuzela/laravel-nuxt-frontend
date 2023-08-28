<script setup>

const props = defineProps({
    firstname: {
        type: Boolean,
        default: false
    },
    lastname: {
        type: Boolean,
        default: false
    }
})

const config = useRuntimeConfig()

const formData = ref({
    errors: {},
    response: '',
    status: ''
});

const form = ref({
    email_address: '',
    status: "subscribed",
    merge_fields: {
        FNAME: '',
        LNAME: ''
    }
});

async function subscribe(){
    formData.value.errors = {};

    if(form.value.email_address == ''){
        formData.value.errors.email_address = 'missing_email';
    }

    if((Object.keys(formData.value.errors).length) == 0) {
        const { data, error, status } = await useFetch('/mailchimp/lists/' + config.public.mailchimp.audience + '/members', {
            method: "POST",
            body: form.value,
            headers: { Authorization: `Bearer ${config.public.mailchimp.apiKey}` }
        })

        formData.value.status = status;
        formData.value.response = data;
        formData.value.errors = error;

        if(formData.value.errors.data.data.title == 'Member Exists'){
            formData.value.errors = {
                email_address: 'already_exists'
            }
        }
    }
}

</script>

<template>
    <div v-if="formData.status == 'success'" class="rounded col-span-full bg-green-500 text-white text-lg p-4">
        {{ $t('forms.newsletter.messages.success') }}
    </div>
    <form v-else @submit.prevent="subscribe()" class="col-span-full">
        <ElementsFormField :label="$t('forms.newsletter.fname')" labelFor="fname" cols="1" v-if="firstname">
            <ElementsFormControl
                type="text"
                v-model="form.merge_fields.FNAME"
                :placeholder="$t('forms.newsletter.placeholders.fname')"
                name="fname"
            />
        </ElementsFormField>

        <ElementsFormField :label="$t('forms.newsletter.lname')" labelFor="lname" cols="1" v-if="firstname && lastname">
            <ElementsFormControl
                type="text"
                v-model="form.merge_fields.LNAME"
                :placeholder="$t('forms.newsletter.placeholders.lname')"
                name="lname"
            />
        </ElementsFormField>

        <ElementsFormField :label="$t('forms.newsletter.email')" labelFor="email" cols="1">
            <ElementsFormControl
                type="email"
                v-model="form.email_address"
                :placeholder="$t('forms.newsletter.placeholders.email')"
                :error="formData.errors.email_address ? $t('forms.newsletter.errors.' + formData.errors.email_address) : ''"
                name="email"
            />
        </ElementsFormField>

        <ElementsBaseButton color="primary" type="submit" :label="$t('forms.newsletter.button')"></ElementsBaseButton>
    </form>
</template>