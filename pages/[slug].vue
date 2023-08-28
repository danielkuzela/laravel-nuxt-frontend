<script setup>
import { useI18n } from "vue-i18n";
import { useStyleStore } from "~/stores/style";
import Content from "~/components/layout/Content.vue";


const { locale } = useI18n();
const route = useRoute();
const styleStore = useStyleStore();

const { data, status } = await useCustomFetch('/api/page', { params: { url: route.params.slug, lang: locale.value}})

</script>

<template>
    <div>
        <div :class="[
            containerMaxW
            ]">
            <h1 class="text-xl py-6 font-bold">{{ data.name }}</h1>
        </div>
        <div :class="[
            containerMaxW
            ]">
            <Content :data="data.parsed_content" :status="status"></Content>
        </div>
    </div>
</template>
