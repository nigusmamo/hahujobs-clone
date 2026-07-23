<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
});
</script>

<template>
  <div
    class="flex-col group bg-gray-100 w-[380px] h-[580px] rounded-xl hover:bg-teal-50"
  >
    <div class="py-2 px-6">
      <img :src="image" :alt="title" class="rounded-xl" />
    </div>
    <h2 class="font-bold text-xl px-5">{{ title }}</h2>

    <div>
      <p class="px-6 text-gray-500 mt-2 line-clamp-4">{{ description }}</p>
    </div>

    <div class="flex justify-between px-4 py-4 mt-4">
      <button class="text-teal-600 font-bold">Learn more</button>
      <button
        class="w-6 h-6 rounded-full bg-white group-hover:bg-teal-600 group-hover:text-white"
      >
        >
      </button>
    </div>
  </div>
  <!-- <div class="bg-gray-100 w-[350px] h-[600px] flex flex-col border rounded-xl hover:bg-teal-50 ">
        <div class="w-[300px] h-64 bg-white mt-2 text-center justify-center">
            <img 
            :src="image" 
            :alt="title"
            class="">
        </div>

        <div class="mt-16 px-4">
            <h3 class="font-bold text-2xl">{{ title }}</h3>

            <p class="text-gray-500 mt-4 text-ellipsis">{{ description }} </p>
        </div>

        <div class="flex mt-8 justify-between">
            <button class="text-teal-700 font-bold px-4">Read More</button>
            <button class="w-6 h-6 rounded-full bg-white hover:bg-teal-600 hover:text-white mr-4"> > </button>
        </div>    

    </div> -->
</template>
