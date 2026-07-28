<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

import GetBlogs from "../graphql/getBlogs.gql";

const { data } = await useAsyncQuery(GetBlogs);

onMounted(() => {
  console.log("Browser data:", data.value.cached_blogs);
});
</script>
<template>
  <section class="bg-white mt-20">
    <div class="text-center">
      <h1 class="text-6xl font-bold">Recent blog posts</h1>
      <p class="mt-4 text-gray-600">
        Stay ahead of the curve with our latest blog releases
      </p>
    </div>

    <div class="flex justify-center gap-10 flex-wrap">
      <Carousel
        :items-to-show="3.5"
        :wrap-around="true"
        :autoplay="3000"
        class="w-[90%]"
      >
        <Slide v-for="blog in data.cached_blogs">
          <BlogCard
            :title="blog.title"
            :thumbnail="blog.thumbnail"
            :summary="blog.summary"
          />
        </Slide>
      </Carousel>
    </div>

    <div class="flex justify-center">
      <button
        class="bg-gradient-to-r from-teal-800 to-teal-600 px-3 py-2 rounded text-white font-semibold hover:bg-teal-200 mt-8"
      >
        View all posts
        <Icon name="lucide:share" />
      </button>
    </div>
  </section>
</template>
