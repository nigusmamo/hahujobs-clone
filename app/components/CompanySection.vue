<script setup>

const companies = [
    {
        id:1,
        title:"Plan International",
        image:"/images/plan.jpg"
    },
    {
        id:1,
        title:"Collaborate | Innovate | Deliver",
        image:"/images/eec.png"
    },
    {
        id:1,
        title:"Dashn International",
        image:"/images/dashn.jpg"
    },
    {
        id:1,
        title:"Plan International",
        image:"/images/rescue.png"
    }
]

</script>

<template>
    <section class="bg-gray-100">
        <div class="text-center mt-8 py-16">
            <h1 class="font-extrabold text-5xl">Top Hiring Companies</h1>
            <p class="mt-4">Below are some of the companies with a high number of vacancy announcements since the start of our aggregation services in 2019</p>
        </div>

        <div class="flex justify-center gap-16">
            <CompanyCard 
            v-for="company in companies"
            :title="company.title"
            :image="company.image"/>

        </div>

       
    </section>
</template>