<script setup>
const props = defineProps({
    data: {
        type: Object
    }
});

const data = props.data.variables;

</script>

<script>
export default {
    searchable_name: 'basic_hero'
}
</script>

<template>
  <div class="bg-gray-300 p-6">
      <div class="text-xs">V-text-before: {{ data.v_text_before }}</div>
      <p class="">V-text: {{ data.v_text }}</p>
      <div class="italic text-xs">V-text-after: {{ data.v_text_after }}</div>
  </div>
</template>