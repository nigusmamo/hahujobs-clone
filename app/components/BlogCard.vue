<script setup>
defineProps({
  title: String,
  summary: String,
  thumbnail: String,
});
</script>

<template>
  <div
    class="mt-8 w-[400px] overflow-hidden rounded-2xl border border-gray-200 bg-white hover:border-teal-600 hover:shadow-lg"
  >
    <img :src="thumbnail" :alt="title" class="h-[340px] w-full object-cover" />

    <div class="p-6">
      <div class="mb-4 flex items-center gap-3">
        <span class="text-sm text-gray-500"> {{ postDate }} </span>

        <span
          class="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700"
        >
          {{ postFrom }}
        </span>
      </div>
      <h2 class="mb-3 line-clamp-1 text-2xl font-bold text-gray-900">
        {{ title }}
      </h2>

      <p class="line-clamp-3 text-gray-600">{{ summary }}</p>

      <button
        class="mt-6 font-semibold text-teal-600 transition hover:text-teal-700"
      >
        Read Full Post →
      </button>
    </div>
  </div>
</template>
