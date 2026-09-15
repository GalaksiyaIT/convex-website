<script setup>
defineProps({
  duration: { type: Number, default: 30 }, // saniye — küçük değer = daha hızlı kayma
  gap: { type: String, default: '2.5rem' },
})
</script>

<template>
  <div class="group overflow-hidden">
    <div
      class="marquee-track flex w-max items-center group-hover:[animation-play-state:paused]"
      :style="{ gap, animationDuration: `${duration}s` }"
    >
      <div class="flex flex-none items-center" :style="{ gap }">
        <slot />
      </div>
      <div class="flex flex-none items-center" :style="{ gap }" aria-hidden="true">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-track {
  animation-name: marquee-scroll;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>
