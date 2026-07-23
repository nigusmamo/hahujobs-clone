<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
});
</script>
<template>
  <div
    class="w-94 h-32 bg-[#f1f1f1] rounded flex items-center pl-4 gap-4 hover:bg-teal-50"
  >
    <div class="w-10 h-10 rounded-xl bg-teal-50 flex-shrink-0">
      <img :src="icon" :alt="title" class="px-2 py-2" />
    </div>

    <div>
      <h1 class="font-bold text-xl text-gray-600 line-clamp-1">{{ title }}</h1>
      <p class="text-xs text-gray-600 line-clamp-2 pt-2">{{ description }}</p>
    </div>
  </div>
</template>
