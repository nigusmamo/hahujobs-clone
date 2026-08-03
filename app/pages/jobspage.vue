<script setup>
import GetSectorJobs from "../graphql/getJobsBySector.gql";
import sector from "../graphql/getSector.gql";

const route = useRoute();
const router = useRouter();

function handleRegionClick(regionId) {
  router.push({
    query: {
      ...route.query,
      region: regionId,
    },
  });
}

function handleTypeClicked(type) {
  router.push({
    query: {
      ...route.query,
      type: type
    }
  })
}


const sectorId = computed(() => route.query.sector);
const regionId = computed(() => route.query.region);
const type = computed(()=> route.query.type)

const { data: sectorData } = await useAsyncQuery(sector, {
  id: sectorId.value,
});

const where = computed(() => {
  const filters = [
    {
      expired: {
        _eq: false,
      },
    },

    {
      requested_to_delete: {
        _eq: false,
      },
    },
  ];

  if (sectorId.value) {
    filters.push({
      sub_sector: {
        sector: {
          id: {
            _eq: sectorId.value,
          },
        },
      },
    });
  }

  if (regionId.value) {
    filters.push({
      job_cities: {
        city: {
          region_id: {
            _eq: regionId.value,
          },
        },
      },
    });
  }

  if(type.value) {
    filters.push({
      type: {
        _eq: type.value
      }
    })
  }

  return {
    _and: filters,
  };
});

const { data: jobsData } = await useAsyncQuery(
  GetSectorJobs,
  computed(() => ({
    where: where.value,
    limit: 54,
    offset: 0,
  })),
)
</script>

<template>
  <section>
    <Navbar class="z-10" />

    <main class="flex bg-gray-200">
      <SideBar @region-clicked="handleRegionClick" @type-clicked="handleTypeClicked" :selectedRegion="regionId" />

      <section class="flex-1 bg-[url('/images/Background2.svg')]">
        <div
          class="flex gap-2 backdrop-blur-md px-2 py-4 z-10 sticky top-20 font-sm"
        >
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
            <img src="/images/natural-science.png" alt="Logo" />
          </div>
          <div class="">
            <h2 class="font-extrabold text-gray-600 text-[17px]">
              {{ sectorData.sector.name }} <span>jobs</span>
            </h2>
            <p class="text-[10px]">
              {{ sectorData.sector.description }}
            </p>
          </div>
        </div>

        <div class="mt-2 text-xl font-bold text-gray-600">
          Showing <span>{{ sectorData.sector.active_jobs.count }}</span> of
          <span>{{ sectorData.sector.active_jobs.count }}</span> post
        </div>
        <div
          v-if="jobsData.jobs.length > 0"
          class="flex flex-wrap mt-4 gap-4 mb-16"
        >
          <JobPageCard v-for="job in jobsData.jobs" :key="job.id" :job="job" />
        </div>

        <div v-else class="flex flex-col items-center">
          <img src="/images/search-not-found.svg" alt="" class="w-96 h-96" />

          <h2 class="font-black text-2xl text-gray-600">
            Sorry, we couldn’t find any match for your search
          </h2>
        </div>
      </section>
    </main>

    <FooterSection />
  </section>
</template>
