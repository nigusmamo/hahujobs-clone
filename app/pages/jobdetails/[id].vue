<script setup>
import singleJob from "../../graphql/singleJob.gql";
const route = useRoute();

const jobId = computed(() => route.params.id);

const { data } = await useAsyncQuery(singleJob, {
  id: jobId,
});
</script>

<template>
  <section class="">
    <Navbar class="bg-gray-200" />
    <main class="flex bg-gray-200">
      <SideBar />

      <section class="flex-1 bg-gray-200">
        <div
          class="flex gap-2 backdrop-blur-md px-2 py-4 z-10 sticky top-20 font-sm"
        >
          <input
            type="text"
            placeholder="Search"
            class="w-[515px] h-12 px-10 rounded-l-xl border transition duration-700 ease-in-out focus:outline-none focus:border-teal-500 focus:rounded-bl-none"
          />
          <input
            type="dropdown"
            placeholder="Select Position"
            class="w-64 h-12 px-8 border transition duration-500 ease-in-out focus:outline-none focus:border-teal-500"
          />
          <input
            type="dropdown"
            placeholder="Natural Science"
            class="w-64 h-12 px-8 border transition duration-500 ease-in-out focus:outline-none focus:border-teal-500"
          />
          <input
            type="dropdown"
            placeholder="Select City"
            class="w-64 h-12 px-8 rounded-r-xl border transition duration-500 ease-in-out focus:outline-none focus:border-teal-500 focus:rounded-br-none"
          />
        </div>

        <div class="max-w-[950px] bg-white shadow-xl rounded mt-4 p-10 mb-8">
          <div class="grid grid-cols-[210px_1fr_320px] mb-2">
            <div></div>

            <div>
              <h1 class="text-[28px] font-extrabold text-gray-600">
                {{ data.job.title }}
              </h1>

              <p class="text-gray-500 mt-2 text-sm">
                {{ data.job.entity.name }}
              </p>
            </div>

            <div class="flex justify-end">
              <button
                class="border px-4 py-2 rounded-md max-h-10 border-2 flex gap-2 items-center"
              >
                <Icon name="lucide:bookmark" />
                <span>Save</span>
              </button>
            </div>
          </div>

          <div class="grid grid-cols-[180px_1fr_300px] gap-8">
            <div
              class="border w-44 h-44 px-6 py-6 bg-[#ECECEC] rounded-2xl flex items-center justify-center"
            >
              <img
                :src="data.job.entity.logo || '/images/logo.png'"
                onerror="this.src = '/images/logo.png'"
                alt=""
                class="w-44 h-44 border border-xl object-contain"
              />
            </div>

            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <Icon name="mdi:briefcase" class="text-teal-600 w-6 h-6" />

                <span>Education</span>

                >

                <span>Teaching</span>
              </div>

              <div class="flex items-center gap-3">
                <Icon name="mdi:map-marker" class="text-teal-600 w-6 h-6" />

                {{ data.job.location || "Addis Ababa" }}
              </div>

              <div class="flex items-center gap-3">
                <Icon name="mdi:account-group" class="text-teal-600 w-6 h-6" />

                {{ data.job.number_of_applicants }}

                Positions
              </div>

              <div class="flex items-center gap-3">
                <Icon name="mdi:clock" class="text-teal-600 w-6 h-6" />

                {{ data.job.created_at.split("T")[0] }} to
                {{ data.job.deadline.split("T")[0] }}
              </div>

              <div class="flex items-center gap-3">
                <Icon name="mdi:eye" class="text-teal-600 w-6 h-6" />

                {{ data.job.total_view_count }}

                Views
              </div>
            </div>

            <div class="space-y-4 border-l pl-4">
              <div class="flex flex-col justify-center">
                <h3 class="mb-3 flex items-center">
                  <Icon name="la:award" class="w-6 h-6" />
                  <span>Required Skills</span>
                </h3>

                <div class="flex flex-wrap gap-2 text-gray-500 text-sm">
                  <Badge
                    v-for="item in data?.job?.job_skills"
                    :key="item.skill?.name"
                  >
                    {{ item.skill?.name }}
                  </Badge>
                </div>
              </div>

              <div class="flex items-center text-sm text-[#009688]">
                <button>
                  <span> + </span>
                  <span class="font-bold">Show more</span>
                </button>
              </div>

              <div>
                <h3 class="mb-3 flex items-center">
                  <Icon name="uil:books" class="w-6 h-6" />
                  <span>Fields of study</span>
                </h3>

                <div class="flex flex-wrap gap-2 text-gray-500 text-sm">
                  <span
                    v-for="item in data?.job?.job_fields_of_study"
                    :key="item.field_of_study?.name"
                    class="badge bg-gray-200 px-2 rounded-full"
                  >
                    {{ item.field_of_study?.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-between items-center mt-8">
            <p class="bg-gray-300 rounded-full text-md px-4 py-1">
              <Icon name="lucide:clock" /> Full Time
            </p>
            <button
              class="border rounded border-teal-500 px-4 py-1 rounded-full text-md text-teal-600 flex items-center gap-2"
            >
              <Icon name="mdi:share-variant" /> Share
            </button>
          </div>

          <div class="flex justify-start gap-44 mt-8 border-b">
            <button class="text-sm font-medium py-2.5" role="tab">Post</button>
            <button class="text-sm font-medium py-2.5" role="tab">KPI</button>
            <button class="text-sm font-medium py-2.5" role="tab">
              Analysis
            </button>
          </div>

          <h3 class="font-extrabold mt-4">Job Description</h3>

          <div
            v-html="data.job.description"
            class="[&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_h3]:text-lg [&_h3]:mt-3 [&_h3]:mb-3 [&_li]:mt-3 [&_li]:mb-3 [&_p]:mt-4 [&_p]:mb-4 [&_li]:font-thin [&_li]:text-gray-900 [&_a]:text-[#009688] [&_a]:underline mt-4 text-sm text-gray-700 prose max-w-none"
          ></div>

          <h2 class="font-bold mt-8">Field Of Study</h2>
          <div class="flex gap-2 mt-4 flex-wrap">
            <p
              v-for="item in data?.job?.job_fields_of_study"
              :key="item.field_of_study?.name"
              class="bg-teal-600 rounded-full text-white px-4 py-1 flex items-center gap-2"
            >
              <Icon name="teenyicons:tick-solid" />
              {{ item.field_of_study?.name }}
            </p>
          </div>

          <h3 class="font-bold mt-20">Skills Required</h3>

          <div class="flex flex-wrap gap-2 mt-4">
            <p
              v-for="item in data?.job?.job_skills"
              :key="item.skill?.name"
              class="bg-teal-600 rounded-full text-white px-4 py-1 flex items-center gap-2"
            >
              <Icon name="teenyicons:tick-solid" />
              {{ item.skill?.name }}
            </p>
          </div>

          <div class="mt-4 flex justify-between">
            <div></div>
            <button
              class="bg-teal-600 text-lg px-12 py-2 text-white rounded font-bold"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </main>

    <FooterSection />
  </section>
</template>
