<template>
  <section id="Results" class="section">
    <div class="wrapper">
      <h1 class="section-title">Our best results for the year</h1>
      <p class="section-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum
        eget morbi dignissim eu pharetra consequat montes, sagittis.
      </p>

      <!-- Results Wrapper -->
      <section class="results-wrapper">
        <!-- Result Box -->
        <BaseBox>
          <template #title> 57.6 bn </template>
          <template #caption> Loan Portofolio </template>
        </BaseBox>

        <!-- Result Box -->
        <BaseBox>
          <template #title> 0.95% </template>
          <template #caption> CLASSIFIED LOAN PORTFOLIO </template>
        </BaseBox>

        <!-- Result Box -->
        <BaseBox>
          <template #title> 388.5% </template>
          <template #caption> CLASSIFIED LOAN Coverage </template>
        </BaseBox>

        <!-- Result Box -->
        <BaseBox>
          <template #title> 50.4 bn </template>
          <template #caption> Deposit </template>
        </BaseBox>

        <!-- Result Box -->
        <BaseBox>
          <template #title> 6.1 bn </template>
          <template #caption> Shareholders equity </template>
        </BaseBox>

        <!-- Result Box -->
        <BaseBox>
          <template #title> 18.51% </template>
          <template #caption> Capital Adequacy Ratio </template>
        </BaseBox>

        <!-- Result Box -->
        <BaseBox>
          <template #title> 8.5 bn </template>
          <template #caption> Market Capitalization </template>
        </BaseBox>

        <!-- Result Box -->
        <BaseBox>
          <template #title> AAA </template>
          <template #caption> Credit Rating </template>
        </BaseBox>
      </section>
    </div>
  </section>
</template>

<script>
  import BaseBox from '../components/base/BaseBox.vue';
  export default {
    components: { BaseBox },
  };
</script>

<style scoped>
  .results-wrapper {
    @apply grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4;
  }

  .results-box {
    @apply text-center;
  }

  .results-box img {
    @apply mx-auto;
  }

  .results-title {
    @apply text-lg font-bold text-gray-100;
  }

  .results-subtitle {
    @apply text-base font-medium text-gray-80;
  }
</style>
