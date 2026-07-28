<script setup>
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
  });
};

defineProps({
  title: String,
  name: String,
  deadline: String,
  logo: String,
  location: String,
  summary: String,
  view: String,
});
</script>

<template>
  <div
    class="h-[410px] w-[450px] rounded-2xl border border-gray-100 bg-gray-50 p-4 shadow-sm hover:border-teal-500 mb-20"
  >
    <div class="flex relative group items-center justify-between mt-4">
      <div class="flex items-center rounded-full bg-[#E6F5F3] text-teal-700">
        <img src="/images/hahu_featured.svg" alt="" />
        <span class="px-4 py-1 font-semibold">FEATURED</span>
      </div>
      <button>
        <Icon name="i-heroicons-bookmark" class="w-8 h-7 text-teal-600" />
      </button>
    </div>

    <div class="flex gap-4 mt-4 ml-4">
      <div>
        <img
          :src="logo"
          :alt="title"
          onerror="this.src = '/images/logo.png'"
          class="h-20 w-20 rounded-lg"
        />
      </div>

      <div>
        <h2 class="font-bold text-xl line-clamp-1">{{ title }}</h2>
        <p class="line-clamp-2 max-w-32">{{ name }}</p>
      </div>
    </div>

    <div class="flex gap-2 text-gray-500 mt-6 text-sm">
      <span class="font-semibold">{{ formatDate(deadline) }} Days left</span>
      <span>|</span>
      <span>Posted {{ posted }} days ago</span>
    </div>

    <div class="flex gap-2 flex-wrap py-2">
      <span
        class="rounded-full px-4 py-2 bg-gray-100 text-xs font-bold text-gray-500"
        >Manufacturing</span
      >
      <span
        class="rounded-full px-4 py-2 bg-gray-100 text-xs font-bold text-gray-500"
        >Business</span
      >
      <span
        class="rounded-full px-4 py-2 bg-gray-100 text-xs font-bold text-gray-500"
        >Engineering</span
      >
      <span
        class="rounded-full px-4 py-2 bg-gray-100 text-xs font-bold text-gray-500"
        >Finance</span
      >
      <span
        class="rounded-full px-4 py-2 bg-gray-100 text-xs font-bold text-gray-500"
        >Full Time</span
      >
    </div>

    <p class="text-gray-500 text-sm line-clamp-4">{{ summary }}</p>

    <div class="flex justify-center gap-4 mt-20">
      <button
        class="bg-teal-600 rounded px-5 py-2 text-white font-semibold hover:bg-teal-400 hover:text-black"
      >
        Apply Now
      </button>
      <button
        class="bg-white border border-2 border-teal-600 rounded px-4 py-1 font-md text-teal-600 font-semibold hover:bg-teal-600 hover:text-white"
      >
        Read More
      </button>
    </div>

    <div class="flex justify-between mt-2 text-gray-500 mb-4">
      <div>
        <Icon name="lucide:eye" />
        {{ view }}
      </div>

      <div class="flex justify-center items-center gap-2">
        <Icon name="mdi:share-variant" />
        <p>Share</p>
      </div>
    </div>
  </div>
</template>
