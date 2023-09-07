<script setup>


</script>

<template>
    <div :class="[
      containerMaxW,
      'pt-6'
  ]">
        <h1 class="text-2xl font-bold text-center">UI / Carousel</h1>
        <div class="mx-auto text-center max-w-[700px] my-6">
        <p class="pb-6">Toto je modul pro tvorbu carouselu. Využívej prosím maximálně tohoto modulu. Kvalitní moduly jako např. Slick slider většinou nepodporují Vue3 nebo Nuxt3. Konkrétně Slick slider s reprodukcí pro vue nebyl použit proto, že jeho základem je jQuery. Typicky se jQuery do Vue nepřidává.</p>
        <p class="py-3 px-6 rounded-lg text-center bg-gray-100 mb-6"><strong>Implementace:</strong> Daniel Kužela 09/2023
            <br /><strong>Odkaz na dokumentaci:</strong> <a href="https://ismail9k.github.io/vue3-carousel/" target="_blank" class="underline underline-offset-2">https://ismail9k.github.io/vue3-carousel/</a></p>
        </div>
        <carousel
                :items-to-show="3.95"
                :autoplay="false"
                :wrap-around="true">
            <slide v-for="slide in 10" :key="slide" class="p-2">
                <div class="carousel__item bg-gray-100 flex items-center justify-center w-full h-96 rounded-xl">
                    {{ slide }}
                </div>
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>

    </div>
</template>


