<script setup>

defineProps({
  title: String,
  image: String,
  location: String,
  daysLeft: Number, 
  company: String,
  posted: Number,
  catagory: String,
  jobType: String,
  experience: String,
  position: String,
  salary: String,
  description: String
  
})

</script>

<template>
        <div class="w-[350px] rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-sm hover:border-teal-500">
            <div class="flex items-center justify-between text-teal-700">
                <span class="rounded-full bg-teal-100 px-4 py-1 font-semibold">FEATURED</span>
                <button>Bookmark</button>
            </div>

            <div class="flex gap-4 mt-4">
                <div>
                    <img 
                    :src="image"
                    :alt="title" 
                    class="h-20 w-20 rounded-lg">
                </div>
                
                <div>
                    <h2 class="font-semibold text-xl">{{ title }}</h2>
                    <p class="text-gray-500">{{ company }} . {{ location }}</p>
                </div>
            </div>

            <div class="flex gap-2 text-gray-500 mt-6">
                <span class="font-medium">{{ daysLeft }} Days left</span>
                <span>|</span>
                <span>Posted {{ posted }} days ago</span>
            </div>

            <div class="flex gap-2 flex-wrap">
                <span class="rounded-full px-4 py-1 bg-gray-100">{{ catagory }}</span>
               
            </div>

           <p class="text-gray-500 line-clamp-5">{{ description }}</p>

        </div>
</template>
