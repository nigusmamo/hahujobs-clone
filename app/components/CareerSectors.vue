<script setup>

const sectors = [
    {
        id:1,
        title:"Natural Science",
        positions:340,
        icon:"/images/natural-science.svg"
    },
     {
        id:2,
        title:"Business",
        positions:340,
        icon:"/images/business.svg"
    },
     {
        id:3,
        title:"Creative Arts",
        positions:340,
        icon:"/images/creative-art.svg"
    },
     {
        id:4,
        title:"Education",
        positions:340,
        icon:"/images/education.svg"
    },
    {
        id:5,
        title:"Hospitality",
        positions:340,
        icon:"/images/hospitality.svg"
    },
    {
        id:6,
        title:"Low and Medium Skill Workers",
        positions:340,
        icon:"/images/low-and-medium-skilled-work.svg"
    },
    {
        id:7,
        title:"Transporation",
        positions:340,
        icon:"/images/transport-and-logistics.svg"
    },
    {
        id:8,
        title:"Engineering",
        positions:340,
        icon:"/images/engineering.svg"
    },
    {
        id:9,
        title:"Finance",
        positions:340,
        icon:"/images/health-care.svg"
    },
    {
        id:10,
        title:"Legal Service",
        positions:340,
        icon:"/images/engineering.svg"
    },
    {
        id:11,
        title:"ICt",
        positions:340,
        icon:"/images/engineering.svg"
    },
    {
        id:12,
        title:"Health Care",
        positions:340,
        icon:"/images/engineering.svg"
    },
    {
        id:13,
        title:"Manufacturing",
        positions:340,
        icon:"/images/engineering.svg"
    },
    {
        id:14,
        title:"Social Scince",
        positions:340,
        icon:"/images/engineering.svg"
    }
]

</script>
<template>
    <section class="mt-8 pb-8 bg-gray-50 py-10">
        <div class="text-center py-8">
            <h2 class="text-5xl font-black">Career sectors</h2>
            <p class="mt-4">Based on the local labor market trend in Ethiopia we categorize our vacancies into fourteen sectors</p>

        </div>

        <div class="flex gap-6 justify-center flex-wrap px-8">
             <CareerCard
             v-for="sector in sectors"
             :key="sector.id"
             :title="sector.title"
             :icon="sector.icon"
             :positions="sector.positions" />

        </div>
        
    </section>
</template>