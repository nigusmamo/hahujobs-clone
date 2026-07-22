<script setup>

import 'vue3-carousel/carousel.css'
import { Pagination } from 'vue3-carousel'

const services = [
    {
        id:1,
        image:"/images/videoframe_4385.png",
        title:"Build Career Profile",
        description:"Compose your career profile with context standards and identifiers to showcase your assessed competencies in the sector of your expertise.HaHuJobs offers you a simple, clear and easy to use platform to help you stand out from the crowd of candidates."
    },
    {
        id:1,
        image:"/images/videoframe_5894.png",
        title:"Job Application",
        description:"HaHuJobs makes job hunting easy. Apply in seconds using your saved profile or by uploading your documents. Plus, track your progress with real-time updates so you're never left guessing."

    },
    {
        id:1,
        image:"/images/videoframe_5977.png",
        title:"Vacancy Notification",
        description:"HaHuJobs makes job hunting easy. Apply in seconds using your saved profile or by uploading your documents. Plus, track your progress with real-time updates so you're never left guessing."

    }
]
</script>

<template>
    <section class="bg-white pb-8 ">
        <div class="text-center mt-16">
            <p class="font-extrabold text-4xl">Services</p>
            <p class="mx-auto max-w-xl mt-4 text-gray-600">HaHuJobs offers digital career profiling, job application and subscription based relevant vacancy announcement notifications to job seekers that sign up on its primary service deployment.</p>
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