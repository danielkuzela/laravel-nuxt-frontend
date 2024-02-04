<script setup>

import { createPinia } from 'pinia';
import { useStyleStore } from "@/stores/style";
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();
const pinia = createPinia();
const styleStore = useStyleStore();

styleStore.setStyle();

useHead({
    titleTemplate: `${t('web.title')} | %s`,
    meta: [
        { name: 'author', content: `Daniel Kužela` },
        { name: 'robots', content: `index,follow` }
    ]
})


</script>

<template>
    <NuxtLayout name="base-layout">
        <div>
        <NuxtLoadingIndicator :height="3" :duration="1000" :throttle="0" />
        <NuxtPage />
        </div>
    </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>
