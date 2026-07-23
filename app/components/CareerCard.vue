<script setup>
defineProps({
  icon: String,
  title: String,
  positions: Number,
});
</script>

<template>
  <div
    class="flex h-56 w-56 flex-col items-center justify-center border-gray-50 rounded-2xl bg-white border-gray-200 hover:bg-teal-50 border hover:border-teal-200 text-center"
  >
    <div
      class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100"
    >
      <img :src="icon" :alt="title" class="w-10 h-10" />
    </div>
    <h5 class="font-semibold">{{ title }}</h5>
    <p class="text-gray-500 mt-2 text-sm">{{ positions }} open Positions</p>
  </div>
</template>
