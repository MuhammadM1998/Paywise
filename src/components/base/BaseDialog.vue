<template>
  <teleport to="body">
    <div v-if="show" class="backdrop" @click="tryClose"></div>
    <dialog v-if="show" open>
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu v-if="!fixed">
        <slot name="actions">
          <BaseButton mode="filled-w" @click="tryClose">Close</BaseButton>
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
  import BaseButton from './BaseButton.vue';

  export default {
    components: { BaseButton },
    props: {
      show: {
        type: Boolean,
        required: true,
      },
      title: {
        type: String,
        required: false,
        default: '',
      },
      fixed: {
        type: Boolean,
        required: false,
        default: false,
      },
    },

    emits: ['close'],

    methods: {
      tryClose() {
        if (this.fixed) {
          return;
        }
        this.$emit('close');
      },
    },
  };
</script>

<style scoped>
  .backdrop {
    @apply fixed top-0 left-0 h-screen w-full bg-black/75 z-10;
  }

  dialog {
    @apply fixed top-[20vh] left-[10%] w-[80%] z-50 rounded-xl border-none shadow-md p-0 m-0 overflow-hidden bg-white;
  }

  header {
    @apply bg-primary-gradient text-white w-full p-4;
  }

  header h2 {
    @apply text-xl font-bold;
  }

  section {
    @apply p-4;
  }

  menu {
    @apply flex justify-end m-0 p-4 pt-0;
  }

  @media (min-width: 768px) {
    dialog {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
</style>
