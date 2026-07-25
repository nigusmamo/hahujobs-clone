<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import Cached_futured_jobs from "../graphql/cachedJobs.gql";

const { data, error } = await useAsyncQuery(Cached_futured_jobs);

const jobs = computed(() => {
  return data.value.cached_jobs.map((job) => ({
    id: job.id,
    title: job.title,
    name: job.entity.name,
    location: job.location,
    deadline: job.deadline,
    logo: job.entity.logo,
    summary: job.summary,
    view: `${job.total_view_count >= 1000 ? (job.total_view_count / 1000).toFixed(1) + "k" : job.total_view_count}`,
  }));
});
</script>
<template>
  <section class="px-32 py-2 bg-white">
    <div class="text-center">
      <h1 class="text-[42px] font-extrabold mt-12">Featured Jobs</h1>
      <p class="mt-4 font-semibold text-gray-600">
        Explore our handpicked selection of top job openings. Find your dream
        career match today.
      </p>
    </div>

    <div class="relative mt-8">
      <Carousel
        :items-to-show="3.5"
        :wrap-around="true"
        :autoplay="3000"
        :gap="12"
      >
        <Slide v-for="job in jobs" :key="job.id" class="flex items-start">
          <JobCard
            :title="job.title"
            :location="job.location"
            :deadline="job.deadline"
            :name="job.name"
            :logo="job.logo"
            :summary="job.summary"
            :view="job.view"
            class="hover:h-[570px] transition-all duration-700 overflow-hidden ease-in-out hover:border-b-8 hover:border-teal-600"
          />
        </Slide>
        <template #addons>
          <Pagination class="gap-4" />
        </template>
      </Carousel>

      <div
        class="absolute left-0 top-0 h-full w-[200px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
      ></div>

      <div
        class="absolute right-0 top-0 h-full w-[200px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
      ></div>
    </div>
  </section>
</template>

<style>
.carousel__pagination-button {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #d1d5db;
}

.carousel__pagination-button--active {
  background: #14b8a6;
}
</style>
