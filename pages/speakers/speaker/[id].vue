<script setup>
import { useI18n } from "vue-i18n";
import {useStyleStore} from "~/stores/style";
import Breadcrumbs from "~/components/layout/Breadcrumbs.vue";

const { locale } = useI18n();
const route = useRoute();
const styleStore = useStyleStore();


const { data: itemData, status } = await useCustomFetch('/api/universal', { params: { item: route.params.id, module: 'speakers', lang: locale.value} })
const data = itemData.value.content;

</script>

<template>
    <div :class="[
        containerMaxW,
        'py-6'
    ]">
        <Breadcrumbs :data="{ 0: { name: 'Řečníci', path: 'speakers' }, 1: { name: data.name }}"></Breadcrumbs>
        <h1 :class="styleStore.h1baseStyle">{{ data.name }}</h1>
        <p class="pb-6">{{ data.info }}</p>
        <ElementsImageLoader :data="data.image" rounded zoomable />
    </div>
</template>