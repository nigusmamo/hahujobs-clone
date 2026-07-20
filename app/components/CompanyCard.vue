<script setup>

defineProps({
    title: String,
    image: String
})

</script>
<template>
    <div class="flex w-32 h-32 bg-white mb-16 items-center justify-center">
         <img 
        :src="image" 
        :alt="title" >
    </div>
</template>