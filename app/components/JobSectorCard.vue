<script setup>
defineProps({
  icon: String,
  title: String,
  count: String,
  description: String,
});
</script>
<template>
  <NuxtLink to="/jobspage">
    <div
      class="w-94 h-32 bg-[#f1f1f1] rounded flex items-center pl-4 gap-4 hover:bg-teal-50"
    >
      <div class="w-10 h-10 rounded-xl bg-teal-50 flex-shrink-0">
        <img :src="icon" :alt="title" class="px-2 py-2" />
      </div>

      <div>
        <div class="flex gap-2 items-center">
          <h1 class="font-bold text-lg text-gray-600 line-clamp-1">
            {{ title }}
          </h1>
          <span
            class="text-xs text-teal-600 bg-green-100 text-center rounded-full px-2"
            >{{ count }}</span
          >
        </div>
        <p class="text-sm text-gray-600 line-clamp-2 pt-2">{{ description }}</p>
      </div>
    </div>
  </NuxtLink>
</template>
