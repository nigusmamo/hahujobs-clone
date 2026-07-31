<script setup>
const { job } = defineProps({
  job: {
    type: Object,
    required: true,
  },
});
</script>

<template>
    <NuxtLink :to="`/jobspage${job.id}`">
        <div
            class="container w-[435px] min-h-[500px] bg-white rounded-xl border hover:border-teal-600 py-6"
        >
            <div class="flex justify-between  px-4">
            <p class="text-red-400 text-xs">
                <Icon name="lucide:calendar" />
                About {{ 3 }} Hours Left
            </p>
            <button
                class="border rounded text-teal-600 border-teal-600 flex items-center gap-2 transition duration-500 ease-in-out hover:bg-teal-500 hover:text-black px-4"
            >
                <Icon name="lucide:bookmark" /> save
            </button>
            </div>

            <div class="flex gap-4 px-4">
            <div class="mt-8">
                <div class="w-[110px] h-[110px] flex justify-center items-center">
                <img :src="job.entity.logo || '/images/logo.png'" alt="Logo" 
                onerror="this.src='/images/logo.png'"
                />
                </div>

                <div class="mt-2">
                <p class="line-clamp-2 max-w-24">{{ job.entity.name }}</p>
                </div>
            </div>

            <div class="flex flex-col gap-y-2 text-gray-600 font-md text-sm mt-4 space-y-2">
                <h1 class="font-bold text-gray-600 text-xl line-clamp-1">
                {{ job.title }}
                </h1>

                <div class="flex">
                    <img src="/images/natural-science.png" alt="" class="w-4 h-4 "/>
                    <p>Natural science</p>
                    
                </div>
                
                
                <p>
                <Icon name="lucide:corner-down-right" class="text-teal-600" /> {{ job.sub_sector.name }}
                </p>

                <p v-if="job.job_cities && job.job_cities.length">
                    <div v-for="city in job.job_cities">
                        <Icon name="ph:map-pin-fill" class="text-teal-600" />
                        {{ city.city.name }}
                    </div>
                </p>

                <p>
                <Icon name="ph:shopping-bag-fill" class="text-teal-600" /> 10 years
                </p>
                <p>
                <Icon name="mdi:account-group" class="text-teal-600" /> 1 position
                </p>
            </div>
            </div>

            <div
            class="flex justify-center items-center border w-[110px] rounded-xl ml-8 mt-4 bg-teal-600 text-white gap-2 text-xs py-1"
            >
            <Icon name="mdi:account-clock" class="w-4 h-4" />
            Full Time
            </div>

            <hr class="mt-4" />

            <p class="line-clamp-3 px-4 mt-6">
            {{ job.summary }}
            </p>

            <div class="flex justify-center gap-8 mt-8">
            <button
                class="border px-4 py-1 rounded border-teal-600 transition duration-500 ease-in-out hover:bg-teal-500"
            >
                Read More
            </button>
            <button
                class="border px-4 py-1 rounded border-teal-600 bg-teal-600 text-white transition duration-500 ease-in-out hover:bg-teal-500"
            >
                Apply Now
            </button>
            </div>

            <div class="flex justify-between px-4">
            <div class="flex gap-2 items-center">
                <Icon name="lucide:eye" />
                {{ job.total_web_view_count }}
            </div>

            <Icon name="mdi:share-variant-outline" class="text-gray-500 w-6 h-6" />
            </div>
        </div>
    </NuxtLink>
</template>
