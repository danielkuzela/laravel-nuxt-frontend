import { useStyleStore } from "~/stores/style";
const styleStore = useStyleStore();

export const en_language_pack = {
    web: {
        title: 'Foreground Nuxt'
    },


    universal_modules: {
        speakers: {
            title: 'Speakers',
        }
    },

    article: {
        created_by: 'created by ',
        show_article: 'Show article',

        gallery: 'Gallery',
        related: 'You might be interested',

        tags: 'Tags',
        categories: 'Categories',
        slugs: {
            tags: 'tag',
            categories: 'category'
        }
    },

    pagination: {
        previous: 'Previous',
        next: 'Next',
        loadmore: 'Load more',
    },

    breadcrumbs: {
        home: 'Home'
    },

    forms: {
        placeholder: 'Loading form...',

        reCaptcha: () => `This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" class="${styleStore.baseLinkStyle}">Privacy Policy</a> and <a href="https://policies.google.com/terms" class="${styleStore.baseLinkStyle}">Terms of Service</a> apply.`,

        newsletter: {
            fname: 'Name',
            lname: 'Surname',
            email: 'E-mail',
            button: 'Signup',

            messages: {
                success: 'You have been succesfully signed up.',
            },

            errors: {
                missing_email: 'You did not fill e-mail address.',
                already_exists: 'This email has already been registered.',

            },

            placeholders: {
                fname: 'Enter your first name',
                lname: 'Enter your last name',
                email: 'Enter your e-mail address',
            }
        }
    }
}