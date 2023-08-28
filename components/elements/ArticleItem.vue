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
        <NuxtLink :to="'/' + flag + '/' + data.url">
            <ElementsImageLoader v-if="data.image !== null" :data="data.image"></ElementsImageLoader>
            <div class="bg-gray-100 px-6 pb-6">
                <template v-if="data.tags !== null">
                    <ul class="flex gap-1 pt-6">
                        <li v-for="tag in data.tags"><ElementsBaseButton :href="'/' + flag + '/tag/' + tag.slug" :label="tag.name" color="basicDark" small rounded-full></ElementsBaseButton></li>
                    </ul>
                </template>
                <h3 :class="[ styleStore.h3baseStyle]">{{ data.title }}</h3>
                <p v-if="data.perex" class="pb-6">{{ data.perex }}</p>
                <ElementsBaseButton :href="'/' + flag + '/' + data.url" label="Zobrazit článek" color="basicDark" outline></ElementsBaseButton>
            </div>
        </NuxtLink>
    </div>
</template>

