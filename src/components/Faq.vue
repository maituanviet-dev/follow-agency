<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  props: ["question", "answer"],
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
      <img
        src="/arrow.svg"
        alt=">"
        class="w-6 h-4 text-white mr-2 font-bold stroke-2 transition ease-in-out"
        :class="{ [`rotate-90`]: active }"
      />
    </button>
    <Transition name="slide-fade">
      <div v-if="active" class="bg-[#E5EEFF] pt-6 pb-8 mt-1.5 px-4 md:px-16">
        <span
          class="font-manrope text-[##051942] text-base whitespace-pre-wrap tracking-wide leading-7"
        >
          {{ answer }}
        </span>
      </div>
    </Transition>
    <!-- <transition
      enter-from-class="translate-y-[50%] opacity-0"
      enter-active-class="transition duration-500 ease-in-out"
    >
      <div v-if="active" class="bg-[#E5EEFF] pt-6 pb-8 mt-1.5 px-4 md:px-16">
        <span
          class="font-manrope text-[##051942] text-base whitespace-pre-wrap tracking-wide leading-7"
        >
          {{ answer }}
        </span>
      </div>
    </transition> -->
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
