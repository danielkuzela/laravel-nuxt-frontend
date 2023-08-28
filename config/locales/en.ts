import { useStyleStore } from "~/stores/style";
const styleStore = useStyleStore();

export const en_language_pack = {
    welcome: 'Welcome',


    forms: {
        reCaptcha: () => `
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy" class="${styleStore.baseLinkStyle}">Privacy Policy</a> and
            <a href="https://policies.google.com/terms" class="${styleStore.baseLinkStyle}">Terms of Service</a> apply.
        `
    }
}