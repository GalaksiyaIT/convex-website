<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import BaseIcon from '@/components/ui/BaseIcon.vue'

const props = defineProps({
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  variant: {
    type: String,
    default: 'primary', // primary | secondary | ghost
  },
  size: { type: String, default: 'md' }, // sm | md | lg
  icon: { type: String, default: '' },
  trailingIcon: { type: String, default: 'arrowRight' },
  showTrailingIcon: { type: Boolean, default: false },
})

const tag = computed(() => (props.to ? RouterLink : props.href ? 'a' : 'button'))

const variantClass = computed(
  () =>
    ({
      primary:
        'bg-button-pink text-white hover:bg-pink shadow-sm shadow-pink/20 focus-visible:outline-pink',
      secondary:
        'bg-white text-navy-dark border border-light-gray-border hover:border-purple hover:text-purple',
      dark: 'bg-navyblue text-white hover:bg-navy-dark',
      ghost: 'text-purple hover:text-pink',
    })[props.variant],
)

const sizeClass = computed(
  () =>
    ({
      sm: 'text-sm px-4 py-2 gap-1.5',
      md: 'text-sm px-5 py-3 gap-2',
      lg: 'text-base px-6 py-3.5 gap-2',
    })[props.size],
)
</script>

<template>
  <component
    :is="tag"
    :to="to ?? undefined"
    :href="href ?? undefined"
    class="inline-flex items-center justify-center rounded-lg font-medium transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    :class="[variantClass, sizeClass, variant === 'ghost' ? 'px-0 py-0' : '']"
  >
    <BaseIcon v-if="icon" :name="icon" sizeClass="w-4 h-4" />
    <slot />
    <BaseIcon v-if="showTrailingIcon" :name="trailingIcon" sizeClass="w-4 h-4" />
  </component>
</template>
