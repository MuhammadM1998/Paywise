<template>
  <section id="perks" class="wrapper section">
    <h1 class="section-title">Creating Extraordinary Customer Experience</h1>
    <p class="section-subtitle">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum
      eget morbi dignissim eu pharetra consequat montes, sagittis.
    </p>

    <!-- Perks -->
    <section class="perks-wrapper">
      <!-- Perk Box -->
      <div class="perk-box">
        <img src="../assets/images/perks/Integerity.svg" alt="Integerity" />
        <p class="perk-title">Integerity</p>
        <p class="perk-subtitle">
          Displaying the highest level of Integrity in the way we conduct our
          business
        </p>
      </div>

      <!-- Perk Box -->
      <div class="perk-box">
        <img src="../assets/images/perks/Demonstrate.svg" alt="Demonstrate" />
        <p class="perk-title">Demonstrate</p>
        <p class="perk-subtitle">
          Demonstrating a strong Will to Win in the market place
        </p>
      </div>

      <!-- Perk Box -->
      <div class="perk-box">
        <img src="../assets/images/perks/Diversity.svg" alt="Diversity" />
        <p class="perk-title">Diversity</p>
        <p class="perk-subtitle">
          Promoting Diversity in the work place and community
        </p>
      </div>

      <!-- Perk Box -->
      <div class="perk-box">
        <img src="../assets/images/perks/Teamwork.svg" alt="Teamwork" />
        <p class="perk-title">Teamwork</p>
        <p class="perk-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A semper
          aenean id pen
        </p>
      </div>

      <!-- Perk Box -->
      <div class="perk-box">
        <img src="../assets/images/perks/Corporate.svg" alt="Corporate" />
        <p class="perk-title">Corporate</p>
        <p class="perk-subtitle">
          Setting the standard for the best Corporate Citizenship in the
          communities we work
        </p>
      </div>

      <!-- Perk Box -->
      <div class="perk-box">
        <img src="../assets/images/perks/Digital.svg" alt="Digital" />
        <p class="perk-title">Digital</p>
        <p class="perk-subtitle">
          Setting the standard for the best Corporate Citizenship in the
          communities we work
        </p>
      </div>

      <!-- Perk Box -->
      <div class="perk-box">
        <img
          src="../assets/images/perks/Collaboration.svg"
          alt="Collaboration"
        />
        <p class="perk-title">Collaboration</p>
        <p class="perk-subtitle">
          Displaying the highest level of Integrity in the way we conduct our
          business
        </p>
      </div>

      <!-- Perk Box -->
      <div class="perk-box">
        <img src="../assets/images/perks/Technology.svg" alt="Technology" />
        <p class="perk-title">Technology</p>
        <p class="perk-subtitle">
          Harnessing the power of Technology to deliver better customer
          experience
        </p>
      </div>
    </section>
  </section>
</template>

<script></script>

<style scoped>
  .perks-wrapper {
    @apply grid grid-cols-2 gap-8;
  }

  .perk-box {
    @apply text-center;
  }

  .perk-box img {
    @apply mx-auto;
  }

  .perk-title {
    @apply text-lg font-bold text-gray-100;
  }

  .perk-subtitle {
    @apply text-base font-medium text-gray-80;
  }
</style>
