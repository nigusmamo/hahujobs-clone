<script setup>
import JobSectorsModal from "~/components/JobSectorsModal.vue";
</script>
<template>
  <div class="relative min-h-screen">
    <Hero />

    <div
      class="fixed inset-0 z-50 bg-gray-300/80 flex items-center justify-center"
    >
      <JobSectorsModal />
    </div>
  </div>
</template>
