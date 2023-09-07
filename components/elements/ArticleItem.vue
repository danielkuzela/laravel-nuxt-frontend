<script setup>
import {useStyleStore} from "~/stores/style";

const props = defineProps({
    flag: {
        type: String
    },
    data: {
        type: Object
    }
})

const styleStore = useStyleStore();

</script>

<template>
    <div class="mb-10 break-inside-avoid">
        <NuxtLinkLocale :to="'/' + flag + '/' + data.url">
            <ElementsImageLoader v-if="data.image !== null" :data="data.image"></ElementsImageLoader>
            <div class="bg-gray-100 px-6 pb-6">
                <template v-if="data.tags.length">
                    <ul class="flex gap-1 pt-6 items-center">
                        <li>TAGY: </li>
                        <li v-for="tag in data.tags"><ElementsBaseButton :href="'/' + flag + '/' + $t('article.slugs.tags') + '/' + tag.slug" :label="tag.name" color="basicDark" small rounded-full></ElementsBaseButton></li>
                    </ul>
                </template>
                <template v-if="data.categories.length">
                    <ul class="flex gap-1 pt-6 items-center">
                        <li>KATEGORIE: </li>
                        <li v-for="category in data.categories"><ElementsBaseButton :href="'/' + flag + '/' + $t('article.slugs.categories') + '/' + category.url" :label="category.name" color="basic" small rounded-full></ElementsBaseButton></li>
                    </ul>
                </template>
                <h3 :class="[ styleStore.h3baseStyle]">{{ data.title }}</h3>
                <p v-if="data.perex" class="pb-6">{{ data.perex }}</p>
                <ElementsBaseButton :href="'/' + flag + '/' + data.url" :label="$t('article.show_article')" color="basicDark" outline></ElementsBaseButton>
            </div>
        </NuxtLinkLocale>
    </div>
</template>

