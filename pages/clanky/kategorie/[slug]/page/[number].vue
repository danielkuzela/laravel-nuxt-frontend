<script setup>
const route = useRoute();
const articles_data = {
    prefix: {
        cs: 'clanky',
        en: 'articles',
    },
    category: route.params.slug,
    page: route.params.number
}
</script>

<template>
    <ModulesArticlesWrapper :data="articles_data" />
</template>