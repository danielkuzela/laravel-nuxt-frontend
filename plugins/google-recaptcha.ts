import { VueReCaptcha } from 'vue-recaptcha-v3';
import { defineNuxtPlugin, useRuntimeConfig } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: config.public.recaptcha.siteKey,
        loaderOptions: {
            autoHideBadge: true
        }
    });
});
