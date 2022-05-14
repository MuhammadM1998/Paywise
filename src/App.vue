<template>
  <IntroSection></IntroSection>
  <PerksSection></PerksSection>
  <PartnersSection></PartnersSection>
  <AboutUsSection></AboutUsSection>
  <LoanSection></LoanSection>
  <ResultsSection></ResultsSection>
  <NewsletterSection></NewsletterSection>
  <FooterSection></FooterSection>
  <MyCard></MyCard>
</template>

<script>
  import IntroSection from './modules/IntroSection.vue';
  import PerksSection from './modules/PerksSection.vue';
  import PartnersSection from './modules/PartnersSection.vue';
  import AboutUsSection from './modules/AboutUsSection.vue';
  import ResultsSection from './modules/ResultsSection.vue';
  import LoanSection from './modules/LoanSection.vue';
  import NewsletterSection from './modules/NewsletterSection.vue';
  import FooterSection from './modules/FooterSection.vue';
  import MyCard from './components/MyCard.vue';

  export default {
    components: {
      IntroSection,
      PerksSection,
      AboutUsSection,
      PartnersSection,
      ResultsSection,
      LoanSection,
      NewsletterSection,
      FooterSection,
      MyCard,
    },
  };
</script>

<style>
  html {
    @apply scroll-smooth;
  }

  body {
    @apply font-gilroy;
  }

  .wrapper {
    @apply container mx-auto;
  }

  .section {
    @apply py-16 flex flex-col gap-6;
  }

  .section .wrapper {
    @apply px-8 flex flex-col gap-6 container mx-auto;
  }

  .section-title {
    @apply text-center text-2xl font-black  text-transparent bg-clip-text bg-gradient-to-br from-primary-300 to-primary-200;
  }

  .section-subtitle {
    @apply text-sm font-medium text-gray-80 text-center;
  }

  .link {
    @apply text-primary-100 hover:text-primary-300;
  }

  .base-medium {
    @apply text-base font-medium text-gray-80;
  }
</style>
