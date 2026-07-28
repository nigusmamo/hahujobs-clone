<template>
  <aside class="w-[325px] h-[750px] sticky top-20 bg-gray-200 mb-8">
    <div class="ml-12 mt-12">
      <div class="flex flex-col items-center">
        <h2 class="text-xl font-bold text-gray-600">Additional Filters</h2>
        <input
          type="range"
          class="mt-12 text-teal-500 accent-teal-600 h-2 w-64 bg-red-200"
        />

        <hr class="w-24 mt-4" />
      </div>
      <div class="flex justify-between mr-4 text-sm text-gray-600">
        <p>0-3 years of experience</p>

        <div class="flex gap-2">
          <input
            type="checkbox"
            class="w-5 h-5 border border-teal-300 accent-teal-500"
          />
          <span> > 10 </span>
        </div>
      </div>

      <hr class="border-t border-gray-300 my-6 w-50" />

      <h2 class="mt-8 font-bold">Type</h2>

      <div class="flex flex-wrap gap-2 mt-4 text-gray-600">
        <div
          class="bg-gray-200 px-4 flex justify-center rounded-xl border border-[#009688] hover:bg-[#C3DFDD]"
        >
          Bid +
        </div>
        <div
          class="bg-gray-200 px-4 flex justify-center rounded-xl border border-[#009688] hover:bg-[#C3DFDD]"
        >
          Contract +
        </div>
        <div
          class="bg-gray-200 px-4 flex justify-center rounded-xl border border-[#009688] hover:bg-[#C3DFDD]"
        >
          Full Time +
        </div>
        <div
          class="bg-gray-200 px-4 flex justify-center rounded-xl border border-[#009688] hover:bg-[#C3DFDD]"
        >
          Internship +
        </div>
        <div
          class="bg-gray-200 px-4 flex justify-center rounded-xl border border-[#009688] hover:bg-[#C3DFDD]"
        >
          Part Time +
        </div>
      </div>

      <hr class="border-t border-gray-300 my-6" />

      <h2 class="mt-4 font-bold">Regions <Icon name="lucide:info" /></h2>

      <section>
        <EthiopiaMap class="w-full h-[200px]" />
      </section>

      <button
        class="mt-4 border bg-teal-600 w-10 flex items-center justify-center rounded-full text-white font-bold text-sm py-1"
      >
        All
      </button>
    </div>
  </aside>
</template>
