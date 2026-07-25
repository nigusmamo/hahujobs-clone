<script setup>
import Cached_top_companies from "../graphql/cachedTopCompanies.gql";

const { data } = await useAsyncQuery(Cached_top_companies);
</script>

<template>
  <section class="bg-gray-100">
    <div class="text-center mt-8 py-16">
      <h1 class="font-extrabold text-5xl">Top Hiring Companies</h1>
      <p class="mt-4">
        Below are some of the companies with a high number of vacancy
        announcements since the start of our aggregation services in 2019
      </p>
    </div>

    <div class="relative mt-4">
      <NuxtMarquee :speed="60" pause-on-hover>
        <div v-for="company in data.entities" :key="company.id" class="mx-8">
          <CompanyCard :name="company.name" :logo="company.logo" />
        </div>
      </NuxtMarquee>

      <div
        class="absolute top-0 left-0 h-full w-[200px] bg-gradient-to-r from-white to-transparent z-10"
      ></div>

      <div
        class="absolute top-0 right-0 h-full w-[200px] bg-gradient-to-l from-white to-transparent z-10"
      ></div>
    </div>
  </section>
</template>
