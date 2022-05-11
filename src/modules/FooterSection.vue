<template>
  <footer class="section">
    <div class="wrapper">
      <div
        class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 text-gray-80"
      >
        <!-- Logo & Info -->
        <div class="flex flex-col gap-4">
          <a href="#" aria-label="Paywise Logo">
            <img
              src="../assets/images/shared/Paywise-Logo-Black.svg"
              alt="Paywise Logo"
            />
          </a>

          <p>Learn to love growth and change and you will be a success.</p>

          <!-- Links -->
          <div class="flex gap-2">
            <a class="flex gap-2 pr-4 border-r border-gray-100">
              <img src="../assets/images/shared/Phone.svg" alt="Phone" />
              <p class="font-black text-gray-100">16519</p>
            </a>

            <a href="">
              <img src="../assets/images/shared/Facebook.svg" alt="Facebook" />
            </a>

            <a href="">
              <img src="../assets/images/shared/youtube.svg" alt="Youtube" />
            </a>

            <a href="">
              <img src="../assets/images/shared/linkedin.svg" alt="LinkedIn" />
            </a>

            <a href="">
              <img
                src="../assets/images/shared/instagram.svg"
                alt="Instagram"
              />
            </a>
          </div>
        </div>

        <!-- Products -->
        <div class="flex flex-col gap-4">
          <p class="text-lg font-black text-gray-100">Products</p>

          <ul class="flex flex-col gap-2 list">
            <li><a href="#">CSR Activities</a></li>
            <li><a href="#">Green Banking</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Ongoing Campgain</a></li>
            <li><a href="#">Updates</a></li>
          </ul>
        </div>

        <!-- Get Started -->
        <div class="flex flex-col gap-4">
          <p class="text-lg font-black text-gray-100">Get Started</p>

          <ul class="flex flex-col gap-2 list">
            <li><a href="#">Career</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Government Securities</a></li>
            <li><a href="#">Examples</a></li>
            <li><a href="#">NIS</a></li>
          </ul>
        </div>

        <!-- About -->
        <div class="flex flex-col gap-4">
          <p class="text-lg font-black text-gray-100">About</p>

          <ul class="flex flex-col gap-2 list">
            <li><a href="#">Paywise at a Glance</a></li>
            <li><a href="#">Mission, VIsion & Values</a></li>
            <li><a href="#">Corporate Governanace</a></li>
            <li><a href="#">Shareholders</a></li>
            <li><a href="#">Investor Relations</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .list li {
    @apply transition-colors hover:text-gray-100;
  }
</style>
