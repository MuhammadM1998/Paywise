<template>
  <section id="home">
    <the-header></the-header>

    <!-- Hero -->
    <div class="hero">
      <div class="text">
        <h1 class="text-5xl font-black lg:text-7xl">
          Chase Your Dream with us
        </h1>

        <p class="text-base font-medium">
          Get your account to start spending, sending and saving in minutes!
        </p>

        <!-- Buttons -->
        <div class="buttons-wrapper">
          <BaseButton mode="filled-g" fill="accent" @click="openModal"
            >Download App</BaseButton
          >
          <BaseButton mode="outlined" fill="none" @click="openModal"
            >Loan Calculator</BaseButton
          >
        </div>

        <!-- Links -->
        <div class="links-wrapper">
          <div class="flex gap-2 pr-6 border-r">
            <img src="../assets/images/shared/Phone.svg" alt="Phone" />
            <p>16519</p>
          </div>

          <a href="#">
            <img src="../assets/images/shared/Facebook.svg" alt="Facebook" />
          </a>

          <a href="#">
            <img src="../assets/images/shared/youtube.svg" alt="Youtube" />
          </a>

          <a href="#">
            <img src="../assets/images/shared/linkedin.svg" alt="LinkedIn" />
          </a>

          <a href="#">
            <img src="../assets/images/shared/instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>

      <!-- Image -->
      <div class="image-wrapper">
        <img
          src="../assets/images/hero/Family.webp"
          alt="Paywise. Chase your dreams with us."
        />
      </div>
    </div>
  </section>

  <BaseDialog
    :show="isModalActive"
    title="This feature is not ready yet!"
    @close="closeModal"
  >
    More features are coming soon. Including Users Auth (Login & Sign Up), Loan
    Requests, and a Complete User Banking Dashboard. Stay Tuned!
  </BaseDialog>
</template>

<script>
  import TheHeader from '../components/TheHeader.vue';
  import BaseButton from '../components/base/BaseButton.vue';
  export default {
    components: { TheHeader, BaseButton },

    data() {
      return {
        isModalActive: false,
      };
    },

    methods: {
      openModal() {
        this.isModalActive = true;
      },

      closeModal() {
        this.isModalActive = false;
      },
    },
  };
</script>

<style scoped>
  #home {
    @apply bg-accent-gradient min-h-screen grid place-content-center;
  }

  .hero {
    @apply flex text-white text-center items-center overflow-hidden xl:text-left container;
  }

  .text {
    @apply flex flex-col gap-4;
  }
  .image-wrapper {
    @apply hidden xl:block relative right-0;
  }
  .buttons-wrapper,
  .links-wrapper {
    @apply flex gap-4 justify-center xl:justify-start;
  }
</style>
