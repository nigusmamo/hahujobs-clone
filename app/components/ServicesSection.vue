<script setup>
const services = [
    {
        id:1,
        image:"/images/videoframe_4385.png",
        title:"Build Career Profile",
        description:"HaHuJobs makes job hunting easy. Apply in seconds using your saved profile or by uploading your documents. Plus, track your progress with real-time updates so you're never left guessing."

    },
    {
        id:1,
        image:"/images/videoframe_5894.png",
        title:"Build Career Profile",
        description:"HaHuJobs makes job hunting easy. Apply in seconds using your saved profile or by uploading your documents. Plus, track your progress with real-time updates so you're never left guessing."

    },
    {
        id:1,
        image:"/images/videoframe_5977.png",
        title:"Build Career Profile",
        description:"HaHuJobs makes job hunting easy. Apply in seconds using your saved profile or by uploading your documents. Plus, track your progress with real-time updates so you're never left guessing."

    }
]
</script>

<template>
    <section class="bg-white pb-8">
        <div class="text-center mt-16">
            <h3 class="font-extrabold text-5xl">Services</h3>
            <p class="mx-auto max-w-3xl mt-4">HaHuJobs offers digital career profiling, job application and subscription based relevant vacancy announcement notifications to job seekers that sign up on its primary service deployment.</p>
        </div>

        <div class="flex gap-16 mt-16 justify-center">
            <ServiceCard
            v-for="service in services"
            :title="service.title"
            :image="service.image"
            :description="service.description" />

        </div>
           
        
    </section>
</template>