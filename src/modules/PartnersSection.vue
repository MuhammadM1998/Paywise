<template>
  <section id="partners" class="section">
    <div class="wrapper">
      <h1 class="section-title">Bussiness Partners</h1>
    </div>

    <div class="slider">
      <div class="slider__track">
        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Westin.svg"
            loading="lazy"
            alt="Westin"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Summit.svg"
            loading="lazy"
            alt="Summit"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Holcim.svg"
            loading="lazy"
            alt="Holcim"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Calportland.svg"
            loading="lazy"
            alt="Calportland"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Cemex.svg"
            loading="lazy"
            alt="Cemex"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Diamond-Resorts.svg"
            loading="lazy"
            alt="Diamond-Resorts"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/ETV.svg"
            loading="lazy"
            alt="ETV"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/HostGator.svg"
            loading="lazy"
            alt=""
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Hotels.com.svg"
            loading="lazy"
            alt="Hotels.com"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Hyatt.svg"
            loading="lazy"
            alt="Hyatt"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Netflix.svg"
            loading="lazy"
            alt="Netflix"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Showmax.svg"
            loading="lazy"
            alt="Showmax"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Summit.svg"
            loading="lazy"
            alt="Summit"
            height="124"
            width="175"
          />
        </div>

        <!-- Repeated -->
        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Westin.svg"
            loading="lazy"
            alt="Westin"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Summit.svg"
            loading="lazy"
            alt="Summit"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Holcim.svg"
            loading="lazy"
            alt="Holcim"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Calportland.svg"
            loading="lazy"
            alt="Calportland"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Cemex.svg"
            loading="lazy"
            alt="Cemex"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Diamond-Resorts.svg"
            loading="lazy"
            alt="Diamond-Resorts"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/ETV.svg"
            loading="lazy"
            alt="ETV"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/HostGator.svg"
            loading="lazy"
            alt=""
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Hotels.com.svg"
            loading="lazy"
            alt="Hotels.com"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Hyatt.svg"
            loading="lazy"
            alt="Hyatt"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Netflix.svg"
            loading="lazy"
            alt="Netflix"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Showmax.svg"
            loading="lazy"
            alt="Showmax"
            height="124"
            width="175"
          />
        </div>

        <div class="slider__slide">
          <img
            class="slider__img"
            src="../assets/images/partners/Summit.svg"
            loading="lazy"
            alt="Summit"
            height="124"
            width="175"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #partners {
    @apply bg-primary-20;
  }
  .slider {
    @apply bg-transparent h-24 mt-12 overflow-hidden relative w-full;
  }

  .slider::before,
  .slider::after {
    @apply h-full absolute w-48 z-10;
  }

  .slider::before {
    @apply top-0 left-0;
  }

  .slider::after {
    @apply top-0 right-0;
  }

  .slider__track {
    animation: scroll 30s linear infinite;
    display: flex;
    width: calc(250px * 24);
  }

  .slider__slide {
    @apply h-24 w-48 grid place-content-center;
  }

  .slider__img {
    @apply px-8;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 12));
    }
  }
</style>
