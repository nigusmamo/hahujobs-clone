<script setup>
const vacancies = [
  {
    number: 1,
    title: "Receive",
    description:
      "Share your vacancy details through any of our channels. Review the required information before submission.",
  },
  {
    number: 2,
    title: "Validate",
    description:
      "Our team reviews and verifies the details to ensure accuracy and legitimacy.",
  },
  {
    number: 3,
    title: "Publish",
    description:
      "The vacancy is categorized, finalized, and published across our platforms.",
  },
];
</script>

<template>
  <section class="bg-gray-50 py-20 mb-16">
    <div class="mx-auto max-w-7xl px-8">

      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-5xl font-extrabold text-gray-900"> Post Vacancy </h1>

        <p class="mt-6 text-lg leading-8 text-gray-600"> HaHuJobs provides affordable enterprise cloud HR services. Posting vacancies is free just follow the steps below. </p>
      </div>

      <div class="mt-24 grid grid-cols-2 items-center gap-32">

        <div class="flex justify-center">
          <img src="/images/city.svg" alt="City" class="w-full max-w-[650px]" >
        </div>

        <div class="grid grid-cols-2 gap-x-16 gap-y-20">

          <VacancyCard
            v-for="vacancy in vacancies"
            :key="vacancy.number"
            :number="vacancy.number"
            :title="vacancy.title"
            :description="vacancy.description"
          />

          <div class="flex flex-col items-center justify-center text-center">

            <h2 class="text-xs font-black text-gray-900"> Sign up to HaHu Jobs Enterprise </h2>

            <img src="/images/downward-arrow-2.svg" alt="Arrow" class="my-6 w-10" >

            <button class="rounded-lg bg-gradient-to-r from-teal-800 to-teal-600 w-[300px] px-10 py-4 font-semibold text-white transition duration-300 hover:bg-teal-700" > Learn More → </button>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>