import { cs_language_pack } from "~/config/locales/cs";
import { en_language_pack } from "~/config/locales/en";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'cs',
    messages: {
        cs: cs_language_pack,
        en: en_language_pack
    }
}))