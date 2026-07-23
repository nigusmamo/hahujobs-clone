<script setup>
const router = useRouter();

function closeModal() {
  router.push("/");
}

const sectors = [
  {
    id: 1,
    title: "Natural Science",
    description:
      "Plan, implement and coordinate livelihood and agriculture components of the project with specific focus on crop production, livestock production, Income Generating activities in the farm and off-farm sectors and cash assistance programming",
    icon: "/images/natural-science.svg",
  },
  {
    id: 2,
    title: "Business",
    description:
      "Plan, implement and coordinate livelihood and agriculture components of the project with specific focus on crop production, livestock production, Income Generating activities in the farm and off-farm sectors and cash assistance programming",
    icon: "/images/business.svg",
  },
  {
    id: 3,
    title: "Creative Arts",
    description:
      "Plan, implement and coordinate livelihood and agriculture components of the project with specific focus on crop production, livestock production, Income Generating activities in the farm and off-farm sectors and cash assistance programming",
    icon: "/images/creative-art.svg",
  },
  {
    id: 4,
    title: "Education",
    description:
      "Plan, implement and coordinate livelihood and agriculture components of the project with specific focus on crop production, livestock production, Income Generating activities in the farm and off-farm sectors and cash assistance programming",
    icon: "/images/education.svg",
  },
  {
    id: 5,
    title: "Hospitality",
    description:
      "Plan, implement and coordinate livelihood and agriculture components of the project with specific focus on crop production, livestock production, Income Generating activities in the farm and off-farm sectors and cash assistance programming",
    icon: "/images/hospitality.svg",
  },
  {
    id: 6,
    title: "Low and Medium Skill Workers",
    description:
      "Plan, implement and coordinate livelihood and agriculture components of the project with specific focus on crop production, livestock production, Income Generating activities in the farm and off-farm sectors and cash assistance programming",
    icon: "/images/low-and-medium-skilled-work.svg",
  },
  {
    id: 7,
    title: "Transporation",
    description:
      "Plan, implement and coordinate livelihood and agriculture components of the project with specific focus on crop production, livestock production, Income Generating activities in the farm and off-farm sectors and cash assistance programming",
    icon: "/images/transport-and-logistics.svg",
  },
  {
    id: 8,
    title: "Engineering",
    description:
      "Plan, implement and coordinate livelihood and agriculture components of the project with specific focus on crop production, livestock production, Income Generating activities in the farm and off-farm sectors and cash assistance programming",
    icon: "/images/engineering.svg",
  },
  {
    id: 9,
    title: "Finance",
    description:
      "Plan, implement and coordinate livelihood and agriculture components of the project with specific focus on crop production, livestock production, Income Generating activities in the farm and off-farm sectors and cash assistance programming",
    icon: "/images/health-care.svg",
  },
  {
    id: 10,
    title: "Legal Service",
    description:
      "Plan, implement and coordinate livelihood and agriculture components of the project with specific focus on crop production, livestock production, Income Generating activities in the farm and off-farm sectors and cash assistance programming",
    icon: "/images/engineering.svg",
  },
  {
    id: 11,
    title: "ICt",
    description:
      "Plan, implement and coordinate livelihood and agriculture components of the project with specific focus on crop production, livestock production, Income Generating activities in the farm and off-farm sectors and cash assistance programming",
    icon: "/images/engineering.svg",
  },
  {
    id: 12,
    title: "Health Care",
    description:
      "Plan, implement and coordinate livelihood and agriculture components of the project with specific focus on crop production, livestock production, Income Generating activities in the farm and off-farm sectors and cash assistance programming",
    icon: "/images/engineering.svg",
  },
  {
    id: 13,
    title: "Manufacturing",
    description:
      "Plan, implement and coordinate livelihood and agriculture components of the project with specific focus on crop production, livestock production, Income Generating activities in the farm and off-farm sectors and cash assistance programming",
    icon: "/images/engineering.svg",
  },
  {
    id: 14,
    title: "Social Scince",
    description:
      "Plan, implement and coordinate livelihood and agriculture components of the project with specific focus on crop production, livestock production, Income Generating activities in the farm and off-farm sectors and cash assistance programming",
    icon: "/images/engineering.svg",
  },
];
</script>

<template>
  <div class="bg-white w-[91%] h-[700px] rounded-xl shadow-lg mb-[100px]">
    <div class="flex justify-between px-10 py-8">
      <div class="flex justify-center items-center gap-4">
        <button
          @click="closeModal"
          class="w-10 h-10 transition-all duration-400 hover:bg-teal-100 text-gray-500 rounded text-lg"
        >
          <Icon name="lucide:x" />
        </button>
        <h2 class="font-bold">Jobs by sector</h2>
      </div>
      <button
        class="border rounded px-4 py-1 text-teal-500 border-teal-500 transition-all duration-400 hover:bg-teal-500 hover:text-white"
      >
        View All <Icon name="lucide:arrow-right" />
      </button>
    </div>

    <div class="grid grid-cols-4 gap-2 px-8">
      <JobSectorCard
        v-for="sector in sectors"
        :icon="sector.icon"
        :title="sector.title"
        :description="sector.description"
      />

      <div class="col-start-4 row-start-3 row-span-2 w-80 h-64">
        <img src="/images/Bot1.svg" alt="Bot" class="" />

        <div class="flex flex-col items-end">
          <p class="font-thin text-xs">Powerd by</p>
          <img src="/images/Hahu_footer_logo1.png" alt="" class="w-[70px]" />
        </div>
      </div>
    </div>
  </div>
</template>
