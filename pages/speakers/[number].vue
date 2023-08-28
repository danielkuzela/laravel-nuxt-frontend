<script setup>
import { useI18n } from "vue-i18n";
import { useStyleStore } from "~/stores/style";
import Content from "~/components/layout/Content.vue";


const { locale } = useI18n();
const route = useRoute();
const styleStore = useStyleStore();

const universal_data = {
    id: 0,                      // always 0 or api will try to match entity_id
    prefix: 'speakers',         // module prefix
    paginate: 9,                // you should paginate or api will return all
    page: route.params.number, // this loads data for chosen page - SEO purposes only
}

</script>

<template>
    <div>
        <div :class="[
            containerMaxW
            ]">
            <h1 class="text-xl py-6 font-bold">Universal Module Speakers</h1>
            <p class="">Toto je zvláštní stránka pro univerzální modul. Pokud v některém případě nutně nechcete vložit modul jako obsah do jiné stránky, toto je způsob jak jej zobrazit. Může mít jakoukoliv url definovanou díky názvu složky v pages/modul/. Poté je nutné nastavit správný cíl odkazu v nastavení menu v administraci.</p>
        </div>
        <div :class="[
            containerMaxW
            ]">
            <ModulesUniversalModuleWrapper :data="universal_data" />
        </div>
    </div>
</template>
