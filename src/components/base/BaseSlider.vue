<template>
  <div class="slider-wrapper">
    <Slider
      v-model="currentValue"
      :disabled="disabled"
      :format="format"
      :min="minValue"
      :max="maxValue"
      :step="stepValue"
      class="slider"
      @change="emitChange"
    />

    <div class="value-range">
      <div class="value">{{ minValue }} {{ type }}</div>

      <div class="value">{{ maxValue }} {{ type }}</div>
    </div>
  </div>
</template>

<script>
  import Slider from '@vueform/slider';

  export default {
    components: { Slider },

    props: {
      newValue: { type: Number, default: 0 },
      minValue: { type: Number, default: 0 },
      maxValue: { type: Number, default: 0 },
      stepValue: { type: Number, default: 1 },
      type: { type: String, default: '' },
      disabled: { type: Boolean, default: false },
    },

    emits: ['change'],

    data: () => ({
      currentValue: 0,
      format: function (currentValue) {
        return `${currentValue}`;
      },
    }),

    watch: {
      newValue(newCurrentValue) {
        this.currentValue = newCurrentValue;
      },
    },

    methods: {
      emitChange(value) {
        this.$emit('change', value);
      },
    },
  };
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style scoped>
  .slider {
    --slider-connect-bg: #e4ad78;
    --slider-tooltip-bg: #e4ad78;
    --slider-handle-bg: linear-gradient(90deg, #e49547 0%, #ffb977 100%);
    --slider-handle-ring-color: none;
    --slider-bg: #d1d5db;
    --slider-tooltip-color: #fff;
    --slider-tooltip-py: 2px;
    --slider-tooltip-px: 6px;
    --slider-tooltip-arrow-size: 6px;
    --slider-tooltip-distance: 3px;
  }

  .slider-wrapper {
    @apply flex flex-col gap-2;
  }

  .value-range {
    @apply flex justify-between w-full;
  }

  .value {
    @apply text-gray-80;
  }

  .slider[disabled='true'] {
    --slider-handle-bg: #d1d5db;
    --slider-handle-shadow: 0;
    --slider-handle-shadow-active: 0;
  }
</style>
