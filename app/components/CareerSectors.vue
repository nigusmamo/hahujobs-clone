<script setup>

const sectors = [
    {
        id:1,
        title:"Natural Science",
        positions:340,
        icon:"/images/natural-science.svg"
    },
     {
        id:1,
        title:"Business",
        positions:340,
        icon:"/images/business.svg"
    },
     {
        id:1,
        title:"Creative Arts",
        positions:340,
        icon:"/images/creative-art.svg"
    },
     {
        id:1,
        title:"Education",
        positions:340,
        icon:"/images/education.svg"
    },
    {
        id:1,
        title:"Hospitality",
        positions:340,
        icon:"/images/hospitality.svg"
    },
    {
        id:1,
        title:"Low and Medium Skill Workers",
        positions:340,
        icon:"/images/low-and-medium-skilled-work.svg"
    },
    {
        id:1,
        title:"Transporation",
        positions:340,
        icon:"/images/transport-and-logistics.svg"
    },
    {
        id:1,
        title:"Engineering",
        positions:340,
        icon:"/images/engineering.svg"
    }
]

</script>
<template>
    <section class="mt-8 pb-8 bg-gray-50 py-10">
        <div class="text-center py-8">
            <h1 class="text-5xl font-extrabold">Career Sectors</h1>
            <p class="mt-4">Based on the local labor market trend in Ethiopia we categorize our vacancies into fourteen sectors</p>

        </div>

        <div class="flex gap-4 justify-center mt-4 flex-wrap px-8">
             <CareerCard
             v-for="sector in sectors"
             :key="sector.id"
             :title="sector.title"
             :icon="sector.icon"
             :positions="sector.positions" />

        </div>
        
    </section>
</template>