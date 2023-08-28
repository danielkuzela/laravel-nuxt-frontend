<script setup>

import { useStyleStore } from "~/stores/style";
import { hasModalCTAForm, modalCTAFormId, modalCTAFormStyle } from "~/composables/config";


const styleStore = useStyleStore();

const CTAModalOpened = ref(false);
provide('cta_modal_opened', CTAModalOpened);

</script>


<template>
  <div>
      <LayoutHeader />

      <div :class="[
          hasStickyHeader ? stickyContentMargin : '', // if we use sticky header, we need to add padding/margin to content
      ]">
          <slot />
      </div>

      <ElementsModalFormWrapper v-if="hasModalCTAForm" :id="modalCTAFormId" :style="modalCTAFormStyle" />

      <LayoutFooter />
  </div>
</template>
