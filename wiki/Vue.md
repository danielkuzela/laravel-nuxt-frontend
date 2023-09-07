# Vue 3

### Doporučuji pokračovat v používání nového Composition API
tzn. šablona ve .**vue** je definována přes `<script setup>`.

Nepouživá se starý `<script> export default {} </script>` atd. Kdykoliv budete googlit nějaké věci, nebo používat ChatGPT, dávejte si pozor jaký vám to dává výstup - pokaždé, když uvidíte něco jako `export default` atd. je to starší Vue API. V ChatGPT většinou stačí napsat něco jako "Please, give me this result in Composition API" a ona to přepíše do správného formátu. Více viz. dokumentace.

### Dávejte si pozor na rozdíl mezi .ts a .js
Často se používá typescript, který někdy v klasickém `<script setup>` nefunguje. Tam se pak používá `<script setup lang="ts">`, ale to v šabloně zatím není nikde využito.