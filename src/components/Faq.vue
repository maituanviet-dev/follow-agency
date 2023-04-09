<script>
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/24/solid';

export default {
  data() {
    return {
      active: false,
    };
  },
  props: ['question', 'answer'],
  components: { ChevronRightIcon, ChevronDownIcon },
};
</script>
<template>
  <div>
    <button
      @click="active = !active"
      class="h-20 w-full bg-fa-6886C5 hover:bg-blue-darker flex justify-between rounded-lg items-center"
    >
      <span
        class="font-manrope text-center flex-1 text-white text-base md:text-xl font-medium px-4"
      >
        {{ question }}
      </span>
      <ChevronRightIcon
        class="w-6 h-3 text-white mr-2 font-bold stroke-2 transition ease-in-out"
        :class="{ [`rotate-90`]: active }"
      />
    </button>
    <Transition
      enter-active-class="transition ease-in-out"
      leave-active-class="transition ease-in-out"
    >
      <div
        v-if="active"
        class="bg-[#E5EEFF] pt-6 pb-8 mt-1.5 px-4 md:px-16 transition ease-in-out"
      >
        <span
          class="font-manrope text-[##051942] text-base whitespace-pre-wrap tracking-wide"
        >
          {{ answer }}
        </span>
      </div>
    </Transition>
  </div>
</template>
