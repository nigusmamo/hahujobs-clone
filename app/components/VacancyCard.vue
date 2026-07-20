<script setup>

defineProps({
    number: Number,
    title: String,
    description: String
})

</script>
<template>
    <div ">
        <div class="flex w-10 h-10 bg-teal-100 font-bold justify-center items-center rounded-lg text-black ">
            {{ number }}
        </div>
        
        <h2 class="font-semibold mt-4">{{ title }}</h2>

        <p class="text-gray-600 mt-4 max-w-xs">{{ description }}</p>

    </div>
</template>