<script setup>
import { useI18n } from "vue-i18n";
import { useStyleStore } from "~/stores/style";


const { locale } = useI18n();

import 'moment/locale/cs';
import moment from "moment/moment";
moment.locale(locale.value);

const route = useRoute();
const styleStore = useStyleStore();

const articles_data = {
    prefix: 'clanky'
}

const { data } = await useCustomFetch('/api/articles', { params: { prefix: articles_data.prefix, lang: locale.value, item: route.params.slug }})


</script>

<template>
    <div :class="[ containerMaxW, 'py-6' ]">

        <LayoutBreadcrumbs :data="{ 0: { name: data.flag.name, path: data.flag.url }, 1: { name: data.article.title }}"></LayoutBreadcrumbs>
        <h1 :class="[ styleStore.h1baseStyle, 'text-center mx-auto']">{{ data.article.title }}</h1>
        <div class="flex justify-center pb-6 text-sm text-gray-500">
            {{ $t('article.created_by') }} {{ data.article.user.firstname }} {{ data.article.user.lastname }} &middot; {{ moment(String(data.article.publish_at)).format('DD. MMMM YYYY') }}
        </div>
        <p class="max-w-4xl text-center mx-auto" v-if="data.article.perex">{{ data.article.perex }}</p>
        <ElementsImageLoader v-if="data.article.image !== null" :data="data.article.image" class="mx-auto py-6"></ElementsImageLoader>
        <div v-html="data.article.text"></div>
        <template v-if="data.article.tags !== null">
            <ul class="flex gap-1 pt-6">
                <li v-for="tag in data.article.tags"><ElementsBaseButton :href="'/' + data.flag.url + '/tag/' + tag.slug" :label="tag.name" color="basicDark" small rounded-full></ElementsBaseButton></li>
            </ul>
        </template>

        <template v-if="data.article.photos != ''">
            <h2 :class="[ styleStore.h2baseStyle, 'text-center mx-auto']">{{ $t('article.gallery') }}</h2>
            <div class="columns-3 gap-4">
                <template v-for="photo in data.article.photos">
                    <div class="mb-4">
                        <ElementsImageLoader :data="photo.image" :classes="'w-full'" rounded zoomable></ElementsImageLoader>
                        <span v-if="photo.title" class="px-3 py-1 block text-gray-400 text-sm">&copy; {{ photo.author }} &middot; {{ photo.title }}</span>
                    </div>
                </template>
            </div>
        </template>

        <h2 :class="[ styleStore.h2baseStyle, 'text-center mx-auto']">{{ $t('article.related') }}</h2>
        <div class="grid grid-cols-3 gap-10 mb-10">
            <template v-for="item in data.articles">
                <ElementsArticleItem :data="item" :flag="articles_data.prefix" />
            </template>
        </div>

    </div>
</template>