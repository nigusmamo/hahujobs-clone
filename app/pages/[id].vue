<script setup>

defineProps({
    singlejob: Object
})
</script>

<template>
    <section class="">
        <Navbar class="bg-gray-200"/>
    <main class="flex bg-gray-200">
          <SideBar />

      <section class="flex-1 bg-gray-200">
        <div class="flex gap-2 backdrop-blur-md px-2 py-4 z-10 sticky top-20 font-sm">
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

        <div class="max-w-[950px]  bg-white shadow-xl rounded mt-4 p-10 mb-8">

             <div class="grid grid-cols-3 mb-8">

                    
                    <div></div>

                    
                    <div>
                    <h1 class="text-4xl font-bold">
                        Mathematics Teacher
                    </h1>

                    <p class="text-gray-500 mt-2">
                        Spring Of Knowledge Academy
                    </p>
                    </div>

                  
                    <div class="flex justify-end">
                       <button
                       class=""
                       >
                       <Icon name="lucide:bookmark"/>
                       Save
                       </button>
                    </div>

                </div>

                

            <!-- </div> -->



             
            <div class="grid grid-cols-3 gap-10">

                <div>
                    <img src="/images/logo.png" alt="" class="w-44 h-44 border border-xl object-contain">
                </div>

                <div class="space-y-5">

                <div class="flex items-center gap-3">

                    <Icon name="mdi:briefcase" class="text-teal-600"/>

                    <span>Education</span>

                    >

                    <span>Teaching</span>

                </div>

                <div class="flex items-center gap-3">

                    <Icon name="mdi:map-marker" class="text-teal-600"/>

                    Addis Ababa

                </div>

                <div class="flex items-center gap-3">

                    <Icon name="mdi:account-group" class="text-teal-600"/>

                    2 Positions

                </div>

                <div class="flex items-center gap-3">

                    <Icon name="mdi:clock" class="text-teal-600"/>

                    2026-07-29 - 2026-08-02

                </div>

                <div class="flex items-center gap-3">

                    <Icon name="mdi:eye" class="text-teal-600"/>

                    7.5k Views

                </div>

            </div>

            <div class="space-y-8">

                <div>

                    <h3 class="font-semibold mb-3">
                        Required Skills
                    </h3>

                    <div class="flex flex-wrap gap-2">

                        <span class="badge">
                            Classroom management
                        </span>

                        <span class="badge">
                            Lesson planning
                        </span>

                        <span class="badge">
                            Communication
                        </span>

                    </div>

                </div>

                    <div>

                        <h3 class="font-semibold mb-3">
                            Fields of study
                        </h3>

                        <div class="flex flex-wrap gap-2">

                            <span class="badge">
                                Civil Engineering
                            </span>

                        </div>

                    </div>

                </div>

            </div>


<!-- 
            <div class="flex ">
                <div class="w-40 h-40 bg-gray-100 rounded mt-10 flex justify-center items-center">image</div>

            </div> -->

            <div class="flex justify-between items-center mt-8">
                <p class="bg-gray-300 rounded-full text-md px-4 py-1 "> <Icon name="lucide:clock"/> Full Time</p>
                <button class="border rounded border-teal-500 px-4 py-1 rounded-full text-md text-teal-600  flex items-center gap-2"> <Icon name="mdi:share-variant"/> Share</button>
            </div>

            <div class="flex justify-start gap-44 mt-8 border-b">
                <button class="text-sm font-medium py-2.5" role="tab">Post</button>
                <button class="text-sm font-medium py-2.5" role="tab">KPI</button>
                <button class="text-sm font-medium py-2.5" role="tab">Analysis</button>
            </div>

        

            <section>

                <div class="flex justify-between mt-4">
                    <p class="font-bold">Job Description</p>
                    <div></div>
                </div>

                

            <p class="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error expedita maxime sunt veniam quos ut voluptate. Explicabo error temporibus molestias ipsum porro voluptate nesciunt numquam odit autem. Et, accusamus?</p>

            <p class="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error expedita maxime sunt veniam quos ut voluptate. Explicabo error temporibus molestias ipsum porro voluptate nesciunt numquam odit autem. Et, accusamus?</p>


            <p class="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error expedita maxime sunt veniam quos ut voluptate. Explicabo error temporibus molestias ipsum porro voluptate nesciunt numquam odit autem. Et, accusamus?</p>


            <p class="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error expedita maxime sunt veniam quos ut voluptate. Explicabo error temporibus molestias ipsum porro voluptate nesciunt numquam odit autem. Et, accusamus?</p>


            <p class="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error expedita maxime sunt veniam quos ut voluptate. Explicabo error temporibus molestias ipsum porro voluptate nesciunt numquam odit autem. Et, accusamus?</p>


            <p class="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error expedita maxime sunt veniam quos ut voluptate. Explicabo error temporibus molestias ipsum porro voluptate nesciunt numquam odit autem. Et, accusamus?</p>


            <p class="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error expedita maxime sunt veniam quos ut voluptate. Explicabo error temporibus molestias ipsum porro voluptate nesciunt numquam odit autem. Et, accusamus?</p>


            <p class="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error expedita maxime sunt veniam quos ut voluptate. Explicabo error temporibus molestias ipsum porro voluptate nesciunt numquam odit autem. Et, accusamus?</p>


            <p class="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error expedita maxime sunt veniam quos ut voluptate. Explicabo error temporibus molestias ipsum porro voluptate nesciunt numquam odit autem. Et, accusamus?</p>


            <p class="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error expedita maxime sunt veniam quos ut voluptate. Explicabo error temporibus molestias ipsum porro voluptate nesciunt numquam odit autem. Et, accusamus?</p>


            <p class="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error expedita maxime sunt veniam quos ut voluptate. Explicabo error temporibus molestias ipsum porro voluptate nesciunt numquam odit autem. Et, accusamus?</p>


            <p class="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error expedita maxime sunt veniam quos ut voluptate. Explicabo error temporibus molestias ipsum porro voluptate nesciunt numquam odit autem. Et, accusamus?</p>


            <p class="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error expedita maxime sunt veniam quos ut voluptate. Explicabo error temporibus molestias ipsum porro voluptate nesciunt numquam odit autem. Et, accusamus?</p>

            </section>


            <h2 class="font-bold mt-8">Field Of Study</h2>
            <div class="flex gap-2 mt-4">
                <p class="bg-teal-600 rounded-full text-white px-4 py-1"">Accounting</p>
                <p class="bg-teal-600 rounded-full text-white px-4 py-1"">Accounting and Finance</p>
            </div>

            <h3 class="font-bold mt-20">Skills Required</h3>

            <div class="flex flex-wrap gap-2 mt-4">
                <p class="bg-teal-600 rounded-full text-white px-4 py-1">advice on financial matters</p>
                <p class="bg-teal-600 rounded-full text-white px-4 py-1">advice on financial matters</p>
                <p class="bg-teal-600 rounded-full text-white px-4 py-1">advice on financial matters</p>
                <p class="bg-teal-600 rounded-full text-white px-4 py-1">advice on financial matters</p>
                <p class="bg-teal-600 rounded-full text-white px-4 py-1">advice on financial matters</p>
            </div>

            <div class="mt-4 flex justify-between">
                <div></div>
                <button class="bg-teal-600 text-lg px-12 py-2 text-white rounded font-bold">Apply Now</button>
            </div>

        </div>

        

      </section>
    </main>

        <FooterSection/>
    </section>
</template>