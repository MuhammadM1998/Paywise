<template>
  <section id="newsletter" class="section">
    <div class="wrapper">
      <h1 class="section-title">Newsletter</h1>

      <p class="section-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum
        eget morbi dignissim eu pharetra consequat montes, sagittis.
      </p>

      <form>
        <input type="text" />
        <BaseButton mode="filled">Subscribe</BaseButton>
      </form>
    </div>
  </section>
</template>

<script>
  import BaseButton from '../components/base/BaseButton.vue';

  export default {
    components: { BaseButton },
  };
</script>

<style scoped>
  form {
    @apply flex items-center justify-center gap-4 flex-col lg:flex-row;
  }
  form input {
    @apply border-gray-80 rounded border text-gray-80 outline-none py-2 px-4 lg:w-1/3 w-full md:w-3/4;
  }
</style>
