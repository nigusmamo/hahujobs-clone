<template>
    <section class="text-center bg-[url('/images/Background2.svg')]">
        <div class="absolute top-0 left-0 w-full h-[40vh] -z-10 bg-gradient-to-b from-[#d7fdf6] to-transparent"></div>
        <Navbar />

        <div class="inline-flex items-center gap-3 rounded-full border border-gray-300 bg-white px-1 py-1 shadow-sm mt-24 " >
            <img src="/images/badge.svg" alt="" class="h-6 w-20 border border-teal-200 rounded-full px-3 py-1 bg-teal-50" >

            <img src="/images/hahumoto.svg" alt="" class="h-3 px-2" >
        </div>

        <div class="text-center">
            <h1 class="text-6xl text-secondary-11 mt-4 font-medium">All Ethiopian Jobs in One Place.</h1>
            <p class="mt-4">Find career opportunities in Ethiopia</p>
            <div class="mt-4">
                <input type="text" placeholder="Search for jobs" class="border py-3 pl-12 rounded-l-xl focus:border-teal-300 focus:outline-none focus:rounded-bl-none w-[380px] h-[50px] focus:w-[500px] transition-[width] duration-700 ease-in-out hover:border-teal-600 text-lg">
                <button class="bg-gradient-to-r from-teal-800 to-teal-600 mx-auto px-6 py-3 text-center font-bold rounded-r-2xl text-white"><Icon name="lucide:search" class="w-5 h-5 text-white px-6" />Find Job</button>
            </div>
        </div>
       

        <img src="/images/resized-default.svg" alt="" class="mt-8">

    </section>
   
</template>