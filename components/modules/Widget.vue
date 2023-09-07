<script setup>
import { useI18n } from "vue-i18n";
import { useStyleStore } from "~/stores/style";
import Content from "~/components/layout/Content.vue";

const props = defineProps({
    id: {
        type: String
    }
});

const { locale } = useI18n();
const route = useRoute();
const styleStore = useStyleStore();

const { data, status } = await useCustomFetch('/api/widget', { params: { id: props.id, lang: locale.value}})

</script>

<template>
    <div>
        <h3>Název: {{ data.name }}</h3>
        <Content :data="data.parsed_content" :status="status"></Content>
    </div>
</template>
