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
  description: String,
  views: String
  
})

</script>

<template>
        <div class="h-[400px] w-[450px] rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-sm hover:border-teal-500 mb-20 ">
            <div class="flex items-center justify-between text-teal-700">
                <span class="rounded-full bg-teal-50 px-4 py-1 font-semibold">FEATURED</span>
                <button><Icon name="lucide-bookmark" class="w-8 h-8"/></button>
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

           <p class="text-gray-500 text-sm line-clamp-5">{{ description }}</p>

           <div class="flex justify-center gap-4 mt-20">
            <button class="bg-teal-600 rounded px-5 py-2 text-white font-semibold hover:bg-teal-400 hover:text-black">Apply Now</button>
            <button class="bg-white border border-2 border-teal-600 rounded px-4 py-1 font-md text-teal-600 font-semibold hover:bg-teal-600 hover:text-white">Read More</button>
           </div>

           <div class="flex justify-between mt-2 text-gray-500 mb-4">
            <div>
                <Icon name="lucide:eye"/>
                {{ views }}
            </div>

            <div class="flex justify-center items-center gap-2">
                <Icon name="mdi:share-variant"/>
                <p>Share</p>
            </div>
           </div>

        </div>
</template>
