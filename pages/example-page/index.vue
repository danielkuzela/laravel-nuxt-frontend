<script setup>

const config = useRuntimeConfig();
const route = useRoute();
const { t } = useI18n();

useSeoMeta({
    title: 'Titulek example page',
    description: 'Popisek',
    ogTitle: t('web.title') + ' | Titulek example page',
    ogDescription: 'OG popisek',
    ogType: 'website',
    ogUrl: config.public.baseUrl + route.path,
    ogImage: config.public.serverUrl + '/media/example-theme-assets/media-placeholder.png',
})

</script>

<template>
  <div :class="[
      containerMaxW,
      'pt-6'
  ]">
    <h1 class="text-2xl font-bold">Example page</h1>
    <p>Toto je stránka definována přímo z Nuxt (Vue) šablony nikoliv z obsahu v adminu.</p>
    <p>Pokud je stránka definována napřímo ve složce <b>pages/urlstranky/index.vue</b>, router ji načte místo aby použil <b>[slug].vue</b>.</p>
    <div class="grid grid-cols-3">
      <div class="col bg-gray-100 p-10 rounded-xl my-6">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce consectetuer risus a nunc. Pellentesque pretium lectus id turpis. Fusce consectetuer risus a nunc. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Nunc auctor. Aliquam ante. Maecenas lorem. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Fusce wisi. Aliquam erat volutpat. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Nunc dapibus tortor vel mi dapibus sollicitudin. Aliquam erat volutpat. Fusce tellus. Mauris metus. Nulla est. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.
      </div>
    </div>
  </div>
</template>


