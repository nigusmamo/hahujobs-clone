<script setup>

const features = [
    {
        title:"Smart Job Matching",
        description:"Jobs come to you through a centralized, quality-checked database aggregated from trusted digital and manual sources."
    },
    {
        title:"Accessible Everywhere",
        description:"Access opportunities via web, mobile app, Telegram, and Facebook bots, with personalized job alerts on your preferred channel."

    },
    {
        title:"Easy to Use",
        description:"Simple, intuitive experience with both online and offline service options across offices nationwide."
    }

]
</script>

<template>
    <section class="py-10">
       <div class="flex">
        <div class="px-14 py-14 ml-16">
            <h1 class="text-5xl font-extrabold">Why Choose Us</h1>
            <p class="text-gray-600 text-sm mt-8">We make job searching simpler, faster, and more accessible connecting you to the right opportunities with less effort.</p>

            <div>
                <AboutCard 
                v-for="feature in features"
                :title="feature.title"
                :description="feature.description"/>

            </div>

            <button class="bg-teal-600 px-3  py-2 rounded text-white font-semibold hover:bg-teal-200 hover:text-black mt-8">Learn more → </button>

        </div>

            <div class="">
                <img src="/images/animation.png" alt="Animation" class="w-[620px] h-[620px]">
            </div>
       </div>
       
    </section>
</template>