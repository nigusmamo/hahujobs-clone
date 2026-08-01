<script setup>
defineProps({
  text: String,
});
</script>
<template>
  <span class="bg-gray-200 px-2 rounded-full line-clamp-1">
    <slot />
  </span>
</template>
