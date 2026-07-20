<script setup>
defineProps({
    amount: String,
    title: String
})
</script>

<template>
    <div class="text-white font-bold">
        <h1 class="text-5xl">{{ amount }}</h1>
        <p class="text-sm mt-4">{{ title }}</p>
    </div>
</template>