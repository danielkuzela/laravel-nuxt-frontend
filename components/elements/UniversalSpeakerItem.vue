<script setup>
const props = defineProps({
    data: {
        type: Object
    }
});
</script>

<template>
  <div class="col">
      <div class="bg-gray-100">
          <ElementsImageLoader :data="data.content.image_header" />
          <div class="p-6">
          <h3 class="text-lg font-bold">Speaker: {{ data.content.name}}</h3>
          <span>ID: {{ data.id }}</span>
          <span v-html="data.content.company"></span>
              <NuxtLink :to="'/speakers/speaker/' + data.id"><ElementsBaseButton type="button" label="Zobrazit detail" color="basicDark" small /></NuxtLink>
          </div>
      </div>
  </div>
</template>