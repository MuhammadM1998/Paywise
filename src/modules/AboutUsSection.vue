<template>
  <section id="about-us" class="section">
    <div class="wrapper title">
      <h1 class="section-title">Paywise at a glance</h1>
    </div>

    <div class="img-card">
      <img
        class="img"
        src="../assets/images/about-us/Euro.webp"
        alt="About Paywise"
      />
    </div>

    <div class="wrapper text-card">
      <p class="text-center base-medium lg:text-left">
        Paywise Finance Limited (previously known as "Industrial Promotion and
        Development Company of Bangladesh Limited") is the first private sector
        financial institution of the country established in 1981 by a
        distinguished group of shareholders namely International Finance
        Corporation (IFC), USA, German Investment and Development Company (DEG),
        Germany, The Aga Khan Fund for Economic Development (AKFED),
        Switzerland, Commonwealth Development Corporation (CDC), UK and the
        Government of Bangladesh
      </p>

      <a class="mx-auto link lg:mx-0" href="#">Read More ➔</a>
    </div>
  </section>
</template>

<style scoped>
  #about-us {
    @apply grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 pb-0  items-center;
  }

  .title {
    @apply lg:order-2 row-span-1  lg:self-end;
  }

  .section-title {
    @apply lg:text-left;
  }

  .img-card {
    @apply order-1 row-span-3;
  }

  .text-card {
    @apply order-3 row-span-2  lg:self-start;
  }

  .img {
    @apply w-full h-64 object-cover lg:h-full;
  }
</style>
