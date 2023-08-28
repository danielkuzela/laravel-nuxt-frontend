<script setup>
import { useI18n } from "vue-i18n";
import {useStyleStore} from "~/stores/style";
import Content from "~/components/layout/Content.vue";

const route = useRoute();
const { locale } = useI18n();
const { data } = await useCustomFetch('/api/page', { params: { homepage: 1, lang: locale.value}})
const styleStore = useStyleStore();


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
