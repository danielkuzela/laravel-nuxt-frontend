<script setup>
import { useStyleStore } from "~/stores/style";
import { useI18n } from "vue-i18n";

const styleStore = useStyleStore();
const props = defineProps({
    id: {
        type: Number
    },
    style: {
        type: String,
        default: "modal"
    }
});

const { locale } = useI18n();
const { data, status } = await useCustomFetch('/api/form', { params: { form_id: props.id, lang: locale.value}})

const underlayClass = computed(() => {
    const base = [
        'absolute inset-0 w-full h-full z-50 overflow-hidden'
    ];

    if (props.style == "modal") {
        base.push("");
    } else if (props.style == "popup") {
        base.push("flex flex-col place-content-center place-items-center p-4");
    }

    return base;
});

const modalClass = computed(() => {
    const base = [
        "w-full md:w-3/4 lg:w-[700px] p-10",
        "flex flex-col",
        "bg-white"
    ];

    if (props.style == "modal") {
        base.push("absolute top-0 left-full h-screen transition-all duration-500");
    } else if (props.style == "popup") {
        base.push("relative rounded-xl");
    }

    return base;
});

const modalOpened = inject('cta_modal_opened');
const modalPosition = ref('translate-x-0');

watch(modalOpened, (newValue) => {
    if(props.style == 'modal') {
        if (newValue == true) {
            setTimeout(() => {
                modalPosition.value = '-translate-x-full';
            }, 200);
        } else {
            modalPosition.value = 'translate-x-0';
        }
    }
});

</script>

<template>
    <Transition
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        enter-active-class="transition duration-700"
        leave-active-class="transition duration-500"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div :class="[ underlayClass, '' ]" v-show="modalOpened">
            <div class="absolute inset-0 w-screen h-screen bg-black/80" @click="modalOpened = !modalOpened"></div>
            <div class="relative mb-10 cursor-pointer group" @click="modalOpened = !modalOpened" v-if="style == 'popup'">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="fill-white/75 group-hover:fill-white" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>

            <div :class="[
                modalClass,
                style == 'modal' ? modalPosition : ''
                ]">
                <div class="relative cursor-pointer group text-right" @click="modalOpened = !modalOpened" v-if="style == 'modal'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="inline-block fill-gray-300 group-hover:fill-gray-900" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
                <h3 :class="[ styleStore.h3baseStyle, 'text-center']">{{ data.name }}</h3>
                <div :class="[ styleStore.formGridStyle ]">
                    <PlaceholdersForm v-if="status != 'success'"/>
                    <ElementsForm v-else :data="data" />
                </div>
            </div>
        </div>
    </Transition>
</template>