<script setup>


</script>

<template>
    <div :class="[
      containerMaxW,
      'pt-6'
  ]">
        <h1 class="text-2xl font-bold text-center">UI / Widget</h1>
        <div class="mx-auto text-center max-w-[700px] my-6">
            <p class="pb-6">Toto je přiklad použití widgetu z api. Stačí použít identifikátor vytvořeného widgetu kdekoliv ve stránce.</p>
        </div>

        <ModulesWidget id="example_widget" />
    </div>
</template>


