<script setup>
const route = useRoute();
const articles_data = {
    prefix: {
        cs: 'clanky',
        en: 'articles',
    },
    category: route.params.slug
}
</script>

<template>
    <ModulesArticlesWrapper :data="articles_data" />
</template>