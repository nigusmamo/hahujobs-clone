<script setup>

const blogs = [
    {
        title:"Tsibah Secondary School",
        description:"At Kokebe Tsibah Secondary School on March 28, 2026, the fourth STEEP Fair brought Technical and Vocational Education and Training into focus for students, parents, and educators. The fair positioned skills-based education as a deliberate option linked to employment outcomes rather than a fallback to university tracks.",
        image:"/images/teacher.webp",
        postDate:"June 2025",
        postFrom:"HaHuJobs News"

    },
    {
        title:"Tsibah Secondary School",
        description:"At Kokebe Tsibah Secondary School on March 28, 2026, the fourth STEEP Fair brought Technical and Vocational Education and Training into focus for students, parents, and educators. The fair positioned skills-based education as a deliberate option linked to employment outcomes rather than a fallback to university tracks.",
        image:"/images/students.webp",
        postDate:"June 2025",
        postFrom:"HaHuJobs News"

    },
    {
        title:"Tsibah Secondary School",
        description:"At Kokebe Tsibah Secondary School on March 28, 2026, the fourth STEEP Fair brought Technical and Vocational Education and Training into focus for students, parents, and educators. The fair positioned skills-based education as a deliberate option linked to employment outcomes rather than a fallback to university tracks.",
        image:"/images/students2.webp",
        postDate:"June 2025",
        postFrom:"HaHuJobs News"

    }
]
</script>
<template>
    <section class="bg-white mt-20">
        <div class="text-center">
            <h1 class="text-6xl font-bold">Recent blog posts</h1>
            <p class="mt-4 text-gray-600">Stay ahead of the curve with our latest blog releases</p>
        </div>

        <div class="flex justify-center gap-10 ">
            <BlogCard 
            v-for="blog in blogs"
            :title="blog.title"
            :image="blog.image"
            :postDate="blog.postDate"
            :postFrom="blog.postFrom"
            :description="blog.description"/>
        </div>

        <div class="flex justify-center ">

             <button class="bg-gradient-to-r from-teal-800 to-teal-600  px-3  py-2 rounded text-white font-semibold hover:bg-teal-200 mt-8">View all posts </button>

        </div>

    </section>
</template>