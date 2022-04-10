<template>
  <header id="header" ref="header">
    <div class="wrapper">
      <!-- Logo -->
      <a href="#" aria-label="Paywise Logo">
        <img
          src="../assets/images/shared/Paywise-Logo.svg"
          alt="Paywise Logo"
        />
      </a>

      <!-- Nav -->
      <nav id="nav">
        <!-- Hamburger Menu -->
        <tilt-burger
          id="hamburger"
          ref="hamburger"
          label="Hamburger Menu"
          class="xl:hidden"
          @click="toggleNavMenu"
        ></tilt-burger>

        <ul id="nav-menu" ref="navMenu" :class="{ active: isNavVisible }">
          <li>
            <a href="#home" class="nav-link" @click="closeNavMenu">Home</a>
          </li>

          <li>
            <a href="#perks" class="nav-link" @click="closeNavMenu">Perks</a>
          </li>

          <li>
            <a href="#partners" class="nav-link" @click="closeNavMenu"
              >Partners</a
            >
          </li>

          <li>
            <a href="#about-us" class="nav-link" @click="closeNavMenu"
              >About Us</a
            >
          </li>

          <li>
            <a href="#loan-calculator" class="nav-link" @click="closeNavMenu"
              >Loan Calculator</a
            >
          </li>

          <li>
            <a href="#our-results" class="nav-link" @click="closeNavMenu"
              >Our Results</a
            >
          </li>

          <li>
            <a href="#newsletter" class="nav-link" @click="closeNavMenu"
              >Newsletter</a
            >
          </li>

          <!-- Buttons -->
          <div class="buttons-wrapper">
            <BaseButton mode="outlined" @click="openModal">Log In</BaseButton>
            <BaseButton mode="filled" @click="openModal">Sign Up</BaseButton>
          </div>
        </ul>
      </nav>
    </div>
  </header>

  <BaseModal :show="!!isModalActive" @close="closeModal"></BaseModal>
</template>

<script>
  import 'vanilla-hamburger/tilt-burger.js';
  import BaseButton from './base/BaseButton.vue';
  import BaseModal from '../components/base/BaseModal.vue';

  export default {
    components: { BaseButton, BaseModal },
    data() {
      return { isNavVisible: false, isModalActive: false };
    },

    computed: {},

    created() {
      window.addEventListener('scroll', this.handleStickyHeader);
      window.addEventListener('DOMContentLoaded', this.handleStickyHeader);
    },

    methods: {
      toggleNavMenu() {
        this.isNavVisible = !this.isNavVisible;
      },

      closeNavMenu() {
        this.$refs.hamburger.removeAttribute('pressed');
        this.$refs.navMenu.classList.remove('active');
      },

      handleStickyHeader() {
        this.$refs.header.classList.remove('page-end');
        this.$refs.header.classList.toggle('sticky', window.scrollY > 0);

        const endOfPage =
          window.scrollY >= document.body.clientHeight - window.innerHeight;
        if (endOfPage) {
          this.$refs.header.classList.remove('sticky');
          this.$refs.header.classList.add('page-end');
          this.closeNavMenu();
        }
      },

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
  #header {
    @apply fixed w-full py-6 transition-all translate-y-0;
  }
  #header.sticky {
    @apply py-0 z-50 bg-accent-100;
  }

  #header.page-end {
    @apply -translate-y-24;
  }

  .wrapper {
    @apply container flex items-center justify-between gap-6;
  }

  #nav {
    @apply flex items-center gap-6 text-white;
  }

  #nav-menu {
    @apply flex items-center flex-col gap-4 xl:flex-row xl:static justify-between py-4 fixed top-20 -right-full transition-all w-full z-10;
  }

  #header.sticky #nav-menu {
    @apply top-16;
  }

  #nav-menu.active {
    @apply right-0 bg-accent-100 xl:bg-transparent;
  }

  .nav-link {
    @apply relative block transition-colors leading-tight uppercase after:transition-all after:absolute after:w-0 after:h-0.5  after:-bottom-1 after:left-0 after:duration-300;
  }

  .nav-link:hover,
  .nav-link:active {
    @apply font-bold after:bg-primary-100 after:w-1/2;
  }

  .buttons-wrapper {
    @apply flex gap-4 justify-center;
  }
</style>
