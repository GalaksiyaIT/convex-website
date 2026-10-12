<script setup>
import { computed } from 'vue'
import alternatifBank from '@/assets/logos/alternatif-bank.png'
import odeabank from '@/assets/logos/odeabank.png'
import isFaktoring from '@/assets/logos/is-faktoring.png'
import turkiyeFinans from '@/assets/logos/turkiye-finans.png'
// vite-svg-loader varsayılan olarak .svg import'larını Vue bileşenine çevirir;
// burada <img :src> için düz URL istediğimizden ?url ile bypass ediyoruz.
import ziraatKatilim from '@/assets/logos/ziraat-katilim.svg?url'
import teraYatirim from '@/assets/logos/tera-yatirim.svg?url'
import emlakKatilim from '@/assets/logos/emlak-katilim.svg?url'
import dunyaKatilim from '@/assets/logos/dunya-katilim.svg?url'
import Marquee from '@/components/ui/MarqueeRow.vue'
import { t } from '@/i18n'

const props = defineProps({
  label: { type: String, default: undefined },
  logos: {
    type: Array,
    default: () => [
      { name: 'Alternatif Bank', logo: alternatifBank },
      { name: 'Odeabank', logo: odeabank },
      { name: 'Ziraat Katılım Bankası', logo: ziraatKatilim },
      { name: 'İş Faktoring', logo: isFaktoring },
      { name: 'Türkiye Finans Katılım Bankası', logo: turkiyeFinans },
      { name: 'Tera Yatırım', logo: teraYatirim },
      { name: 'Emlak Katılım Bankası', logo: emlakKatilim },
      { name: 'Dünya Katılım Bankası', logo: dunyaKatilim },
    ],
  },
})

const labelText = computed(
  () =>
    props.label ??
    t({
      en: 'Used by teams across banking and finance',
      tr: 'Bankacılık ve finans sektöründeki ekipler tarafından kullanılıyor',
    }),
)
</script>

<template>
  <div class="border-t border-light-gray-border py-10">
    <p class="text-center text-xs font-medium uppercase tracking-wider text-darker-gray/70">
      {{ labelText }}
    </p>
    <div
      class="mt-6 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
    >
      <Marquee :duration="30" gap="1.5rem">
        <div
          v-for="item in logos"
          :key="item.name"
          class="flex h-20 w-40 flex-shrink-0 items-center justify-center rounded-xl border border-light-gray-border bg-white px-5"
        >
          <img :src="item.logo" :alt="item.name" class="max-h-9 max-w-full object-contain" />
        </div>
      </Marquee>
    </div>
  </div>
</template>
