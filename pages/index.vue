<script setup>
import { useI18n } from "vue-i18n";
import {useStyleStore} from "~/stores/style";
import Content from "~/components/layout/Content.vue";

const config = useRuntimeConfig();
const route = useRoute();
const { locale, t } = useI18n();
const { data, status } = await useCustomFetch('/api/page', { params: { homepage: 1, lang: locale.value}})
const styleStore = useStyleStore();

if(data && data.value) {
    useSeoMeta({
        title: data.value.seo_title ? data.value.seo_title : data.value.name,
        description: data.value.seo_description,
        ogTitle: t('web.title') + ' | ' + (data.value.open_graph.title ? data.value.open_graph.title : (data.value.seo_title ? data.value.seo_title : data.value.name)),
        ogDescription: data.value.open_graph.description ? data.value.open_graph.description : data.value.seo_description,
        ogType: data.value.open_graph.type,
        ogUrl: config.public.baseUrl + route.path,
        ogImage: config.public.serverUrl + '/media/example-theme-assets/media-placeholder.png',
    })
}
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
          <Content :data="data.parsed_content"></Content>
      </div>
  </div>
</template>
