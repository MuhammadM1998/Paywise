<template>
  <IntroSection></IntroSection>
  <PerksSection></PerksSection>
</template>

<script>
  import IntroSection from './modules/IntroSection.vue';
  import PerksSection from './modules/PerksSection.vue';
  export default { components: { IntroSection, PerksSection } };
</script>

<style>
  html {
    @apply scroll-smooth;
  }

  body {
    @apply font-gilroy;
  }

  .section {
    @apply py-16 flex flex-col gap-6;
  }

  .wrapper {
    @apply container mx-auto text-center;
  }

  .section-title {
    @apply text-2xl font-black  text-transparent bg-clip-text bg-gradient-to-br from-primary-300 to-primary-200;
  }

  .section-subtitle {
    @apply text-sm font-medium text-gray-80;
  }
</style>
