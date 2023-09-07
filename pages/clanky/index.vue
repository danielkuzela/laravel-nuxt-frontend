<script setup>
const articles_data = {
    prefix: {
        cs: 'clanky',
        en: 'articles',
    }
}
</script>

<template>
    <ModulesArticlesWrapper :data="articles_data" />
</template>