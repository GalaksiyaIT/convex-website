<script setup>
defineProps({
  label: {
    type: String,
    default: 'Bankacılık ve finans sektöründeki ekipler tarafından kullanılıyor',
  },
  logos: {
    type: Array,
    default: () => ['Kurum A', 'Kurum B', 'Kurum C', 'Kurum D', 'Kurum E'],
  },
})
</script>

<template>
  <div class="border-t border-light-gray-border py-10">
    <p class="text-center text-xs font-medium uppercase tracking-wider text-darker-gray/70">
      {{ label }}
    </p>
    <div class="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
      <span
        v-for="logo in logos"
        :key="logo"
        class="text-lg font-semibold text-darker-gray/40 select-none"
      >
        {{ logo }}
      </span>
    </div>
  </div>
</template>
