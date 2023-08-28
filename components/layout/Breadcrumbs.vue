<script setup>
import { useStyleStore } from "~/stores/style";

const styleStore = useStyleStore();

const props = defineProps({
    data: {
        type: Object
    },
    showHome: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
  <div :class="[ styleStore.breadcrumbWrapperStyle ]">
    <ul :class="[ styleStore.breadcrumbListStyle ]">
        <li v-if="showHome" :class="[ styleStore.breadcrumbItemStyle ]"><NuxtLink :to="'/'" :class="[ styleStore.breadcrumbLinkStyle ]">Domů</NuxtLink></li>
        <li v-if="showHome" :class="[ styleStore.breadcrumbItemStyle ]"> > </li>
        <template v-for="(item, index) in data" :key="item.id">
            <li v-if="index != 0" :class="[ styleStore.breadcrumbItemStyle ]"> > </li>
            <li :class="[ styleStore.breadcrumbItemStyle ]">
              <template v-if="item.path">
                  <NuxtLink :to="'/' + item.path" :class="[ styleStore.breadcrumbLinkStyle ]">{{ item.name }}</NuxtLink>
              </template>
              <template v-else>
                  {{ item.name }}
              </template>
            </li>
        </template>
    </ul>
  </div>
</template>