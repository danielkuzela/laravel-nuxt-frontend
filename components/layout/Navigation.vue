<script setup>
import { useStyleStore } from "~/stores/style";
import { useI18n } from "vue-i18n";
import { useRoute } from "#app";

const { locale } = useI18n();
const route = useRoute();

const { data } = await useCustomFetch('/api/menu', { params: { name: 'primary', lang: locale.value}})
const menuData = ref(data.value);

watch(() => locale.value, async (newLocale, oldLocale) => {
    const response = await useCustomFetch('/api/menu', {
        params: { name: 'primary', lang: newLocale }
    });
    menuData.value = response.data.value;
});

const styleStore = useStyleStore();
const CTAModalOpened = inject('cta_modal_opened');


</script>

<template>
  <ul class="flex gap-5">
      <template v-for="item in menuData.items">
        <li :class="[
            item.class == 'cta' ? [styleStore.navigationLinkStyle, styleStore.navigationLinkCtaStyle] : styleStore.navigationLinkStyle]
            ">
            <NuxtLinkLocale v-if="item.url.substring(0,4) != '#cta'" :to="(item.is_homepage === true ? '/' : '/' + item.url)">{{ item.name }}</NuxtLinkLocale>
            <button v-else type="button" @click="CTAModalOpened = !CTAModalOpened">{{ item.name }}</button>
        </li>
      </template>
      <li><NuxtLink :to="localePath('index', 'en')">EN</NuxtLink> &middot; <NuxtLink :to="localePath('index', 'cs')">CS</NuxtLink>
      </li>
  </ul>
</template>