<script setup>
import CachedSectors from "../graphql/cachedSectors.gql";
import { sectorIconMapper } from "../utils/sectorIconMapper.ts";
const router = useRouter();

function closeModal() {
  router.push("/");
}

const { data } = await useAsyncQuery(CachedSectors);

const sectors = computed(() => {
  return data.value.cached_sectors.map((sector) => ({
    id: sector.id,
    title: sector.name,
    icon_class: `https://www.hahu.jobs/images/sectors_big/${sectorIconMapper[sector.icon_class]}`,
    count: sector.active_jobs.count,
    description: sector.description,
  }));
});

</script>

<template>
  <div class="bg-white w-[91%] h-[700px] rounded-xl shadow-lg mb-[100px]">
    <div class="flex justify-between px-10 py-8">
      <div class="flex justify-center items-center gap-4">
        <button
          @click="closeModal"
          class="w-10 h-10 transition-all duration-400 hover:bg-teal-100 text-gray-500 rounded text-lg"
        >
          <Icon name="lucide:x" />
        </button>
        <h2 class="font-bold">Jobs by sector</h2>
      </div>
      <button
        class="border rounded px-4 py-1 text-teal-500 border-teal-500 transition-all duration-400 hover:bg-teal-500 hover:text-white"
      >
        View All <Icon name="lucide:arrow-right" />
      </button>
    </div>

    <div class="grid grid-cols-4 gap-2 px-8">
      <JobSectorCard
        v-for="sector in sectors"
        :icon="sector.icon_class"
        :title="sector.title"
        :count="sector.count"
        :description="sector.description"
      />
      <div class="col-start-4 row-start-3 row-span-2 w-80 h-64">
        <img src="/images/Bot1.svg" alt="Bot" class="" />

        <div class="flex flex-col items-end">
          <p class="font-thin text-xs">Powerd by</p>
          <img src="/images/Hahu_footer_logo1.png" alt="" class="w-[70px]" />
        </div>
      </div>
    </div>
  </div>
</template>
