<script setup>
const route = useRoute();
const articles_data = {
    prefix: 'clanky',
    page: route.params.number
}
</script>

<template>
    <ModulesArticlesWrapper :data="articles_data" />
</template>