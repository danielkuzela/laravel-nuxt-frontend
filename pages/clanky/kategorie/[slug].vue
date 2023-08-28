<script setup>
import { useI18n } from "vue-i18n";
import { useStyleStore } from "~/stores/style";
import ImageLoader from "~/components/elements/ImageLoader.vue";
import BaseButton from "~/components/elements/BaseButton.vue";
import Breadcrumbs from "~/components/layout/Breadcrumbs.vue";

const { locale } = useI18n();
const route = useRoute();
const styleStore = useStyleStore();

const { data } = await useCustomFetch('/api/articles', { params: { url: route.path, lang: locale.value}})

</script>

<template>
    <div :class="[
        containerMaxW,
        'py-6'
    ]">
        <Breadcrumbs :data="{ 0: { name: data.flag.name, path: data.flag.url }, 1: { name: 'Tagy' }, 2: { name: data.tag.name }}"></Breadcrumbs>
        <h1 :class="[ styleStore.h1baseStyle, 'text-center mx-auto']">{{ data.flag.name }}</h1>
        <p class="max-w-4xl text-center mx-auto" v-if="data.flag.description">{{ data.flag.description }}</p>
        <div class="grid grid-cols-3 gap-10 my-10">
            <div v-for="item in data.articles">
                <NuxtLink :to="'/' + data.flag.url + '/' + item.url">
                    <ImageLoader v-if="item.image !== null" :data="item.image"></ImageLoader>
                    <div class="bg-gray-100 px-6 pb-6">
                        <template v-if="item.tags !== null">
                            <ul class="flex gap-1 pt-6">
                                <li v-for="tag in item.tags"><BaseButton :href="'/' + data.flag.url + '/tag/' + tag.slug" :label="tag.name" color="basicDark" small rounded-full    ></BaseButton></li>
                            </ul>
                        </template>
                        <h3 :class="[ styleStore.h3baseStyle]">{{ item.title }}</h3>
                        <p v-if="item.perex" class="pb-6">{{ item.perex }}</p>
                        <BaseButton :href="'/' + data.flag.url + '/' + item.url" label="Zobrazit článek" color="basicDark" outline></BaseButton>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>