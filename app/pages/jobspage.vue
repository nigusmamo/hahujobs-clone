<script setup>
import GetSectorJobs from "../graphql/getJobsBySector.gql";
const route = useRoute();

const sectorId = route.query.sector;

const { data } = await useAsyncQuery(GetSectorJobs, {
  sectorId,
  limit: 54,
  offset: 0,
});
</script>

<template>
  <section>
    <Navbar class="bg-gray-100 z-10" />

    <main class="flex bg-gray-200">
      <SideBar />

      <section class="flex-1 bg-gray-200">
        <div class="flex gap-2 backdrop-blur-md px-2 py-4 z-10 sticky top-20">
          <input
            type="text"
            placeholder="Search"
            class="w-[515px] h-12 px-10 rounded-l-xl border transition duration-700 ease-in-out focus:outline-none focus:border-teal-500 focus:rounded-bl-none"
          />
          <input
            type="dropdown"
            placeholder="Select Position"
            class="w-64 h-12 px-8 border transition duration-500 ease-in-out focus:outline-none focus:border-teal-500"
          />
          <input
            type="dropdown"
            placeholder="Natural Science"
            class="w-64 h-12 px-8 border transition duration-500 ease-in-out focus:outline-none focus:border-teal-500"
          />
          <input
            type="dropdown"
            placeholder="Select City"
            class="w-64 h-12 px-8 rounded-r-xl border transition duration-500 ease-in-out focus:outline-none focus:border-teal-500 focus:rounded-br-none"
          />
        </div>

        <div class="flex bg-white rounded-xl px-2 py-4 gap-2 mr-4">
          <div class="w-4 h-4">
            <img src="/images/natural-science.png" alt="" />
          </div>
          <div class="">
            <h2 class="font-bold">Natural Science Jobs</h2>
            <p class="text-[10px]">
              Natural science concerned with the description, prediction, and
              understanding of natural phenomena, based on empirical evidence
              from observation and experimentation. The major natural science
              studies are Chemistry, astronomy, Earth science, physics, and
              biology.
            </p>
          </div>
        </div>

        <div class="mt-2 text-xl font-bold text-gray-600">
          Showing 31 of 31 post
        </div>
        <div class="flex flex-wrap mt-4 gap-4 mb-16">
          <JobPageCard v-for="job in data.jobs" :key="job.id" :job="job" />
        </div>
      </section>
    </main>

    <FooterSection />
  </section>
</template>
