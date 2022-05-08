<template>
  <div class="group">
    <p class="result-title">
      <slot name="title"></slot>
    </p>

    <p class="result-caption">
      <slot name="caption"></slot>
    </p>
  </div>
</template>

<!-- <script>
  export default {
    props: { mode: { type: String, default: 'outlined' } },
  };
</script> -->

<style scoped>
  .result-title {
    @apply text-2xl font-black text-gray-100 group-hover:text-primary-100;
  }

  .result-caption {
    @apply font-medium text-gray-80 uppercase;
  }
</style>
