<script setup>
const route = useRoute();
const articles_data = {
    prefix: 'clanky',
    tag: route.params.slug
}
</script>

<template>
    <ModulesArticlesWrapper :data="articles_data" />
</template>