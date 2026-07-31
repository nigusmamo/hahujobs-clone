<script setup>
defineProps({
  selectedRegion: String,
});

const emit = defineEmits("region-clicked");
function forwardRegion(regionId) {
  emit("region-clicked", regionId);
}
</script>

<template>
  <aside class="w-[325px] h-[750px] sticky top-20 bg-gray-200 mb-8 sticky">
    <div class="ml-12 mt-10">
      <div class="flex flex-col items-center">
        <div class="flex items-center gap-4">
            <Icon name="lucide:sliders"/>
            <h1 class="text-[18px] font-extrabold text-gray-600 mr-4">  Additional Filters</h1>
            <button><Icon name="heroicons:chevron-up" class="text-xl text-teal-600"/></button>
        </div>
        <input
          type="range"
          min="0"
          max="10"
          class="mt-12 accent-[#009688] h-2 w-64 "
        />

        
      </div>
      <div class="flex justify-center gap-4 mr-4 text-sm text-gray-600 mt-4">
        <p>0-3 years of experience</p>

        <div class="flex gap-2">
          <input
            type="checkbox"
            class="w-5 h-5 border border-teal-300 accent-teal-500 ring-teal-500"
          />
          <span> > 10 </span>
        </div>
      </div>

      <hr class="border-t border-gray-300 my-6 w-40 flex" />

      <h2 class="mt-8 font-bold">Type</h2>

      <div class="flex flex-wrap gap-2 mt-4 text-gray-600 mr-8">
        <div
          class="bg-gray-200 px-2 flex justify-center rounded-xl border border-[0.5px] border-[#009688] hover:bg-[#C3DFDD]"
        >
          Bid +
        </div>
        <div
          class="bg-gray-200 px-2 flex justify-center rounded-xl border border-[0.5px] border-[#009688] hover:bg-[#C3DFDD]"
        >
          Contract +
        </div>
        <div
          class="bg-gray-200 px-2 flex justify-center rounded-xl border border-[0.5px] border-[#009688] hover:bg-[#C3DFDD]"
        >
          Full Time +
        </div>
        <div
          class="bg-gray-200 px-2 flex justify-center rounded-xl border border-[0.5px] border-[#009688] hover:bg-[#C3DFDD]"
        >
          Internship +
        </div>
        <div
          class="bg-gray-200 px-2 flex justify-center rounded-xl border border-[0.5px] border-[#009688] hover:bg-[#C3DFDD]"
        >
          Part Time +
        </div>
      </div>

      <hr class="border-t border-gray-300 my-6" />

      <h2 class="mt-4 font-bold">Regions <Icon name="lucide:info" /></h2>

      <section>
        <EthiopiaMap
          @region-clicked="forwardRegion"
          :selectedRegion="selectedRegion"
          class="w-full h-[200px]"
        />
      </section>

      <button
        class="mt-4 border bg-teal-600 w-10 flex items-center justify-center rounded-full text-white font-bold text-sm py-1"
      >
        All
      </button>
    </div>
  </aside>
</template>
