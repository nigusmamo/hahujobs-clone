<script setup>

defineProps({
    title: String,
    description: String
})

</script>

<template>
    <div>
        <h2 class="text-xl font-bold mt-8">{{ title }}</h2>
        <p class="text-gray-600 mt-3 text-sm max-w-xl">{{ description }}</p>

    </div>
</template>