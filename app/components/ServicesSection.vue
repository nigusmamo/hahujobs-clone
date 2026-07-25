<script setup>
import "vue3-carousel/carousel.css";
import { Pagination } from "vue3-carousel";

const services = [
  {
    id: 1,
    image: "/images/videoframe_4385.png",
    title: "Build Career Profile",
    description:
      "Compose your career profile with context standards and identifiers to showcase your assessed competencies in the sector of your expertise.HaHuJobs offers you a simple, clear and easy to use platform to help you stand out from the crowd of candidates.",
  },
  {
    id: 2,
    image: "/images/videoframe_5977.png",
    title: "Job Application",
    description:
      "Apply for jobs with just a few clicks, and track the progress of your applications through notifications on multiple platforms. Revolutionize your job applications with pre-prepared application materials and an option to select what best fits your application.",
  },
  {
    id: 3,
    image: "/images/videoframe_5894.png",
    title: "Vacancy Notification",
    description:
      "Apply for jobs with just a few clicks, and track the progress of your applications through notifications on multiple platforms. Revolutionize your job applications with pre-prepared application materials and an option to select what best fits your application.",
  },
];
</script>

<template>
  <section class="bg-white pb-8">
    <div class="text-center mt-16">
      <p class="font-extrabold text-4xl">Services</p>
      <p class="mx-auto max-w-xl mt-4 text-gray-600">
        HaHuJobs offers digital career profiling, job application and
        subscription based relevant vacancy announcement notifications to job
        seekers that sign up on its primary service deployment.
      </p>
    </div>

    <div class="flex gap-16 mt-16 justify-center">
      <ServiceCard
        v-for="service in services"
        :title="service.title"
        :image="service.image"
        :description="service.description"
      />
    </div>
  </section>
</template>
