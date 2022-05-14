<template>
  <button class="btn">
    <div class="text" :class="mode">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    props: {
      mode: { type: String, default: 'outlined' },
    },
  };
</script>

<style scoped>
  .btn {
    @apply p-0.5 rounded bg-primary-gradient;
  }

  .text {
    @apply uppercase py-2 px-4 hover:font-bold;
  }

  .text.outlined {
    @apply bg-accent-20 text-primary-100;
  }

  .text.filled-g {
    @apply text-accent-20;
  }

  .text.filled-w {
    @apply text-white;
  }
</style>
