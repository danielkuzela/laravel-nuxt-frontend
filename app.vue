<script setup>

import { createPinia } from 'pinia';
import { useStyleStore } from "@/stores/style";
import BaseLayout from "~/layouts/BaseLayout.vue";



const pinia = createPinia();

/* Styles */

const styleStore = useStyleStore();
styleStore.setStyle();



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
