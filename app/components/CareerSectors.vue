<script setup>
import CachedSectors from "../graphql/cachedSectors.gql";
import { sectorIconMapper } from "../utils/sectorIconMapper.ts";

const { data } = await useAsyncQuery(CachedSectors);

const sectors = computed(() => {
  return data.value.cached_sectors
    .filter((sector) => sector.active_jobs.count > 0)
    .map((sector) => ({
      id: sector.id,
      title: sector.name,
      icon_class: `https://www.hahu.jobs/images/sectors_big/${sectorIconMapper[sector.icon_class]}`,
      count: sector.active_jobs.count,
    }));
});
</script>
<template>
  <section class="mt-8 pb-8 bg-gray-50 py-10">
    <div class="text-center py-8">
      <h2 class="text-5xl font-black">Career sectors</h2>
      <p class="mt-4">
        Based on the local labor market trend in Ethiopia we categorize our
        vacancies into fourteen sectors
      </p>
    </div>

    <div class="flex gap-6 justify-center flex-wrap px-8">
      <CareerCard
        v-for="sector in sectors"
        :key="sector.id"
        :title="sector.title"
        :count="sector.count"
        :icon_class="sector.icon_class"
      />
    </div>
  </section>
</template>
