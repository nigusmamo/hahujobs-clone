<template>
    <nav class="flex  justify-between items-center py-4 px-20 sticky ">
        
        <div class="flex flex-col items-start">
            <img src="/images/Hahu_footer_logo1.png" alt="Hahu Jobs" class="w-[130px]">
            <p class="text-xs text-gray-600">Primary</p>
        </div>

        <ul class="flex space-x-8 justify-center gap-6">
            <li><NuxtLink to="/" class="hover:text-teal-600">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-teal-600">About</NuxtLink></li>
            <li><NuxtLink to="/jobs" class="hover:text-teal-600">Jobs</NuxtLink></li>
            <li><NuxtLink to="/vacancy" class="hover:text-teal-600">Post Vacancy</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-teal-600">Contact</NuxtLink></li>
        </ul>

        <div class="space-x-4">
            <button class="pr-2">
                 <Icon name="lucide:moon" class="w-4 h-4"/>
            </button>
           
            <button class="bg-gradient-to-r from-teal-800 to-teal-600 px-6 py-2 text-white rounded-md text-xs font-bold">Login</button>
            <span class="text-xs font-bold">Or</span>
            <button class="bg-gradient-to-r from-teal-800 to-teal-600 px-4 py-2 text-white rounded-md text-xs font-bold">Sign Up</button>
            
        </div>
    </nav>
    
</template>
