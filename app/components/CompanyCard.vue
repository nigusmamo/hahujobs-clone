<script setup>

defineProps({
    title: String,
    image: String
})

</script>
<template>

    <div class="w-40 h-50 flex flex flex-col justify-center items-center gap-2 mb-10">
        <div class="w-40 h-40 bg-white flex justify-center items-center rounded-xl">
            <img 
            :src="image" 
            :alt="title" >
            

        </div>

        <div class="text-gray-500 text-center line-clamp-1">
            {{ title }}

        </div>

    </div>


    <!-- <div class="flex w-32 h-32 bg-white mb-16 items-center justify-center">
         <img 
        :src="image" 
        :alt="title" >
    </div> -->
</template>