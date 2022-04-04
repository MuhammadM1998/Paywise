<template>
  <teleport to="body">
    <div v-if="show" class="overlay" @click="closeModal"></div>
    <dialog v-if="show" class="modal" open>
      <button class="flex justify-end w-full" @click="closeModal">
        <img
          src="../../assets/images/shared/close.svg"
          alt="Close Modal"
          class="w-8"
        />
      </button>

      <p class="mt-4 text-xl font-bold text-center">
        This feature is not available currently. It will be released soon,
        follow my linkedin account for upcoming info.
      </p>
    </dialog>
  </teleport>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    emits: ['close'],
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };
</script>

<style scoped>
  .overlay {
    @apply fixed top-0 left-0 h-screen w-full bg-black/75 z-10;
  }

  .modal {
    @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-4 px-6 rounded-md border-4 border-primary-100 z-10;
  }
</style>
