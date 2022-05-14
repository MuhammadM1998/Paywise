<template>
  <section id="loan-calculator" class="section bg-primary-20">
    <div class="wrapper">
      <h1 class="section-title">Loan Calculator</h1>

      <p class="section-subtitle">
        Check your monthly and total loan values for a given amount, period and
        rate.
      </p>
      <div class="flex flex-col gap-8 lg:flex-row">
        <!-- Calculator -->
        <div class="calculator">
          <!-- Amount -->
          <div class="calculator-box">
            <p class="caluclator-attribute">Amount:</p>
            <BaseSlider
              class="w-full"
              :min-value="1000"
              :max-value="10000"
              :step-value="1000"
              type="EGP"
              @change="updateAmount"
            ></BaseSlider>
          </div>

          <!-- Period -->
          <div class="calculator-box">
            <p class="caluclator-attribute">Period:</p>
            <BaseSlider
              class="w-full"
              :min-value="3"
              :max-value="60"
              :step-value="1"
              type="Months"
              @change="updatePeriod"
            ></BaseSlider>
          </div>

          <!-- Interest -->
          <div class="calculator-box">
            <p class="caluclator-attribute">Interest:</p>
            <BaseSlider
              class="w-full"
              :disabled="true"
              :min-value="10"
              :max-value="30"
              :step-value="1"
              :new-value="interest"
              type="%"
              @change="updateInterest"
            ></BaseSlider>
          </div>
        </div>

        <!-- Summary -->
        <div class="summary">
          <!-- Total Amount of Loan -->
          <div class="stat">
            <p class="stat-title">Total Amount (Loan + Interest)</p>
            <p class="stat-value">{{ totalAmount }} EGP</p>
          </div>

          <!-- Loan Monthly Payment -->
          <div class="stat">
            <p class="stat-title">Loan Monthly Payment</p>
            <p class="stat-value">{{ monthlyPayment }} EGP</p>
          </div>
          <BaseButton mode="filled-w" @click="openModal">Request</BaseButton>
        </div>
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
  import BaseButton from '../components/base/BaseButton.vue';
  import BaseSlider from '../components/base/BaseSlider.vue';

  export default {
    components: { BaseButton, BaseSlider },

    data() {
      return {
        amount: 1000,
        period: 3,
        interest: 10,
        totalAmount: 1100,
        monthlyPayment: 367,
        isModalActive: false,
      };
    },

    methods: {
      updateAmount(value) {
        this.amount = value;
        this.calculateLoan();
      },

      updatePeriod(value) {
        this.period = value;
        this.calculateInterest(value);
        this.calculateLoan();
      },

      updateInterest(value) {
        this.interest = value;
      },

      calculateInterest(value) {
        if (value >= 3 && value <= 12) {
          // 3 Months : 12 Month = 10%
          this.interest = 10;
        } else if (value >= 13 && value <= 24) {
          // 13 Months : 24 Month = 15%
          this.interest = 15;
        } else if (value >= 25 && value <= 36) {
          // 25 Months : 36 Month = 20%
          this.interest = 20;
        } else if (value >= 37 && value <= 48) {
          // 37 Months : 48 Month = 25%
          this.interest = 25;
        } else if (value >= 49 && value <= 60) {
          // 49 Months : 60 Month = 30%
          this.interest = 30;
        }
      },

      calculateLoan() {
        this.totalAmount = this.amount + this.amount * (this.interest / 100);
        this.monthlyPayment = Math.round(this.totalAmount / this.period);
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
  .calculator {
    @apply mt-8 flex flex-col gap-12 w-full;
  }
  .calculator-box {
    @apply flex items-center gap-4;
  }

  .caluclator-attribute {
    @apply font-bold text-gray-100 text-lg lg:text-xl;
  }

  .summary {
    @apply bg-white rounded-md basis-1/2 mx-auto shadow-lg py-4 px-16 lg:px-4 flex flex-col gap-4 items-center justify-center;
  }

  .stat {
    @apply flex flex-col  justify-center items-center;
  }

  .stat-title {
    @apply text-gray-100 text-lg font-bold;
  }

  .stat-value {
    @apply text-primary-100 text-lg font-black;
  }
</style>
