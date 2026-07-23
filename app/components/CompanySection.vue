<script setup>
const companies = [
  {
    id: 1,
    title: "Save the Children",
    image: "/images/plan.jpg",
  },
  {
    id: 2,
    title: "Collaborate | Innovate | Deliver",
    image: "/images/eec.png",
  },
  {
    id: 3,
    title: "Dashn International",
    image: "/images/dashn.jpg",
  },
  {
    id: 4,
    title: "Ethiopian Engineering",
    image: "/images/rescue.png",
  },
  {
    id: 5,
    title: "Kerchanshe",
    image: "/images/kerchanse.png",
  },
  {
    id: 6,
    title: "Mercy Crops",
    image: "/images/hahu.webp",
  },
  {
    id: 7,
    title: "Beaeka General",
    image: "/images/beakena.png",
  },
];
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
        <div v-for="company in companies" :key="company.id" class="mx-8">
          <CompanyCard :title="company.title" :image="company.image" />
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
