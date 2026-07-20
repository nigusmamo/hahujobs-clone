<script setup>

const statistics = [
    {
        amount:"1.4k",
        title:"Enterprise"
    },
    {
        amount:"38.5k",
        title:"Users"
    },
    {
        amount:"58",
        title:"Oportunity"
    }
]
</script>

<template>
    <section class="bg-teal-700 text-white">
        <div class="flex flex-col items-center ">
            <h1 class="text-5xl font-extrabold pt-20 pb-10">Our Latest Statistics</h1>

            <div class=" flex bg-teal-800 rounded-3xl w-[1000px] h-[200px] justify-between items-center mb-20 px-40">
               <StatisticsCard 
               v-for="statistic in statistics"
               :amount="statistic.amount"
               :title="statistic.title"/>
            </div>
           
        </div>
    </section>
</template>