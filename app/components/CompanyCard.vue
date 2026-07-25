<script setup>
defineProps({
  name: String,
  logo: String,
});
</script>
<template>
  <div
    class="w-40 h-50 flex flex flex-col justify-center items-center gap-2 mb-10"
  >
    <div
      class="w-36 h-36 bg-white flex justify-center items-center rounded-2xl hover:shadow-2xl transition-all duration-500 ease-in-out"
    >
      <img :src="logo" :alt="name" class="px-2 py-2" />
    </div>

    <div class="text-gray-500 text-center line-clamp-1">
      {{ name }}
    </div>
  </div>
</template>
