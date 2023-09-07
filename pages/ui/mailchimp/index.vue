<script setup>


</script>

<template>
    <div :class="[
      containerMaxW,
      'pt-6'
  ]">
        <h1 class="text-2xl font-bold text-center">UI / Mailchimp</h1>
        <div class="mx-auto text-center max-w-[700px] my-6">
            <p class="pb-6">Toto je přiklad použití komponenty Mailchimp. Pokud chcete přidat zadání jména příjmení, změnte parametry komponenty. Pak už stačí jen správně nastavit api klíč v .env.</p>
            <p class="py-3 px-6 rounded-lg text-center bg-gray-100 mb-6"><strong>Odkaz na dokumentaci:</strong> <a href="https://mailchimp.com/developer/marketing/guides/quick-start/#generate-your-api-key" target="_blank" class="underline underline-offset-2">https://mailchimp.com/developer/marketing/guides/quick-start/#generate-your-api-key</a></p>
        </div>

        <ElementsMailchimpSignup :firstname="false" :lastname="true" />
    </div>
</template>


