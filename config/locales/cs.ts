import { useStyleStore } from "~/stores/style";
const styleStore = useStyleStore();

export const cs_language_pack = {
    web: {
        title: 'Foreground Nuxt'
    },


    welcome: 'Vítej',


    universal_modules: {
        speakers: {
            title: 'Řečníci',
        }
    },

    article: {
        created_by: 'vytvořil/a',
        show_article: 'Zobrazit článek',

        gallery: 'Galerie',
        related: 'Mohlo by vás zajímat',

        tags: 'Tagy',
        categories: 'Kategorie',
        slugs: {
            tags: 'tag',
            categories: 'kategorie'
        }
    },

    pagination: {
        previous: 'Předchozí',
        next: 'Další',
        loadmore: 'Načíst další',
    },

    breadcrumbs: {
        home: 'Domů'
    },

    forms: {
        placeholder: 'Načítám formulář...',

        reCaptcha: () => `Tyto stránky jsou chráněny díky reCAPTCHA, na které se vztahují <a href="https://policies.google.com/privacy" class="${styleStore.baseLinkStyle}" target="_blank">Zásady ochrany osobních údajů</a> a <a href="https://policies.google.com/terms" class="${styleStore.baseLinkStyle}" target="_blank">Smluvní podmínky</a> společnosti Google.`,

        newsletter: {
            fname: 'Jméno',
            lname: 'Příjmení',
            email: 'E-mail',
            button: 'Přihlásit k odběru',

            messages: {
                success: 'Byli jste přihlášeni k odběru.',
            },

            errors: {
                missing_email: 'Nezadali jste svůj e-mail.',
                already_exists: 'Tento e-mail již byl zaregistrován.',

            },

            placeholders: {
                fname: 'Zadejte své jméno',
                lname: 'Zadejte své příjmení',
                email: 'Zadejte svůj e-mail',
            }
        }
    }
}