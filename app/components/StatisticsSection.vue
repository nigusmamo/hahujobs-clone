<script setup>
const statistics = [
  {
    amount: "1.4k",
    title: "Enterprise",
  },
  {
    amount: "38.5k",
    title: "Users",
  },
  {
    amount: "58",
    title: "Oportunity",
  },
];
</script>

<template>
  <section
    class="relative bg-gradient-to-t from-teal-900 to-teal-700 text-white"
  >
    <div class="flex flex-col items-center">
      <h1 class="text-5xl font-extrabold pt-20 pb-10">Our Latest Statistics</h1>

      <div
        class="flex bg-gradient-to-t from-teal-900 to-teal-600 rounded-3xl w-[1000px] h-[200px] justify-between items-center mb-20 px-40"
      >
        <StatisticsCard
          v-for="statistic in statistics"
          :amount="statistic.amount"
          :title="statistic.title"
        />
      </div>
    </div>

    <div class="absolute top-0 right-0 w-20 h-full z-10">
      <img src="/images/Layer-2.svg" alt="" class="grayscale" />
    </div>
  </section>
</template>
