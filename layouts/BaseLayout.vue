<script setup>
import { useI18n } from "vue-i18n";

import { useStyleStore } from "~/stores/style";
import { hasModalCTAForm, modalCTAFormId, modalCTAFormStyle } from "~/composables/config";

const { locale } = useI18n();

const styleStore = useStyleStore();

const CTAModalOpened = ref(false);
provide('cta_modal_opened', CTAModalOpened);

</script>


<template>
  <div>
      <LayoutHeader />

      <main :class="[
          hasStickyHeader ? stickyContentMargin : '', // if we use sticky header, we need to add padding/margin to content
      ]">
          <slot />
      </main>

      <ElementsModalFormWrapper v-if="hasModalCTAForm" :id="modalCTAFormId" :style="modalCTAFormStyle" />

      <LayoutFooter />

      <CookieControl :locale="locale">
          <template #modal>
              <h3>{{ $t('cookies.modal.title') }}</h3>
              <p>{{ $t('cookies.modal.text') }}</p>
          </template>
      </CookieControl>
  </div>
</template>
