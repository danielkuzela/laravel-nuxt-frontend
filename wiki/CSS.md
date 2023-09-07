# Nuxt + Tailwind CSS

- V šabloně používáme Tailwind CSS = nepíšeme vlastní styly, ale pouze classujeme jednotlivé prvky dle potreby.
- V případě, že potřebujeme přeci jen vlastní styly použít, v každém vue souboru můžeme stejně jako `<script setup>` a `<template>` použít direktivu `<style>` a vložit do ní styly tak, jak jsme zvyklí

## Tipy:
- Pokud potřebujeme použít na nějaký prvek globální styl, např. chci, aby všechny moje odkazy byly podtržené, udělám to ve složce `/assets/css` v souboru `main.css`. Zde můžu do layeru přidat pro jakékoliv prvky styly nebo tailwindové classy, které se aplikují na všechny prvky.
- Pro stylování různých prvků komponent můžeme použít Store, konkrétně styleStore, který nám vytvořila Pinia. Tyto styly defiujeme v souboru `/composables/styles.js`. Tento postup zaručí to, že si např. nastyluji inputy a když změním jejich vlastnosti v styleStoru, propíše se mi úprava úplně na všech prvních, které mají tuto classu nadefinovanou. 

## Barvy
- Vlastní barvy si můžeme do Tailwindu přidat skrz jeho config - `/config/tailwind.js`. Poté můžeme barvy používat libovolně kdekoliv.
- V souboru `/composables/colors.js` si zadefinujeme základní barvy pro prvky jako např. tlačítka