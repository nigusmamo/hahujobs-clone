<script setup>

import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


const jobs = [
    {
        id: 1,
        image: "/images/logo_150.webp",
        title: "ካሸር",
        location: "Addis Ababa",
        company: "SNFD Bakery PLC",
        daysLeft: "11",
        posted: "5",
        views: "5.4k",
        catagory: "Business",
        description: "ዲፕሎማ ወይም የመጀመሪያ ዲግሪ በአካውንቲንግ ወይም በተመሳሳይ የትምህርት መስክ ያላት አግባብነት ካለው የስራ ልምድ ጋር ዋና ዋና ኃላፊነቶች - ደንበኞችን በአክብሮት እና በከፍተኛ ሙያዊ ስነ-ምግባር ማስተናገድ እና ቅሬታዎችን መፍታት - የተለያዩ የክፍያ አማራጮችን (ጥሬ ገንዘብ፣ የባንክ ካርድ፣ የሞባይል ባንኪንግ ወዘተ) በመጠቀም ደንበኞችን ማስተናገድ - ለእያንዳንዱ ግብይት ተገቢውን ደረሰኝ ማዘጋጀት እና ለደንበኞች ማቅረብ - ሁሉንም የገንዘብ እንቅስቃሴዎች በድርጅቱ መመሪያ መሠረት መፈጸም - የገንዘብ ሳጥንን ትክክለኛነትና ደህንነት መጠበቅ - ዕለታዊ የሽያጭ ሪፖር ማዘጋጀት - ማንኛውንም የሂሳብ ልዩነት ወይም ስህተት ወዲያውኑ ለቅርብ ተቆጣጣሪ ማሳወቅ - የስራ ቦታን ምንጊዜም ንጹህ፣ የተደራጀ እና ለስራ ምቹ ማድረግ"
    },
     {
        id: 2,
        image: "/images/echo.webp",
        title: "የሰው ኃይል አስተዳደር ባለሙያ",
        location: "Addis Ababa",
        company: "SNFD Bakery PLC",
        daysLeft: "11",
        posted: "5",
        views: "5.4k",
        catagory: "Business",
        description: "በሰው ኃይል አስተዳደር፣ በቢዝነስ አስተዳደር ወይም በተመሳሳይ የትምህርት መስክ የመጀመሪያ ዲግሪ ያለው/ያላት አግባብነት ካለው የስራ ልምድ ጋር ዋና ዋና ኃላፊነቶች - ለሽያጭ፣ ለገበያ፣ ለግንባታ እና ለአስተዳደር ሚናዎች እጩዎችን ማጣራት፣ ቃለ መጠይቅ ማድረግ፣ መገምገም እና ውጤቱን ማሳወቅ - የስራ ቅጥር ማስታወቂያዎችን ማዘጋጀት እና መለጠፍ እንዲሁም ማስተዳደር - ለሠራተኞች ስጋቶች እና ለግጭት አፈታት የመጀመሪያ የመገናኛ ነጥብ ሆኖ ማገልገል - የቡድን ግንባታ እና የስልጠና ክፍለ ጊዜዎችን ማደራጀት - ትክክለኛ የሠራተኛ መዝገቦችን (ኮንትራቶች፣ የእረፍት ጊዜ፣ ጥቅማ ጥቅሞች) በአግባቡ መያዝ - የክህሎት ክፍተቶችን በመለየት በሽያጭ ቴክኒኮች፣ በደንበኛ አገልግሎት እና በግንባታ ደህንነት ላይ ስልጠናዎችን ማዘጋጀት - ለሠራተኞች የሙያ መሻሻያ ፕሮግራሞችን መደገፍ - የደመወዝ ክፍያ፣ ጥቅማ ጥቅሞች ማጥናት እና ደረጃዎቸን መመደብ"
    },
     {
        id: 3,
        image: "/images/atta.jpeg",
        title: "Junior MEP Engineer (Electro-Mechanical)",
        location: "Addis Ababa",
        company: "SNFD Bakery PLC",
        daysLeft: "11",
        posted: "5",
        views: "5.4k",
        catagory: "Business",
        description: "Bachelor's Degree in Electro-Mechanical Engineering or with related field of study from a recognized university with relevant work experience Duties and Responsibilities - Assist in supervising Mechanical, Electrical, Plumbing, and Fire Protection installation works. - Review engineering drawings, shop drawings, specifications, and technical documents. - Assist in reviewing MEP design drawings for constructability and coordination. - Identify clashes and inconsistencies between different engineering disciplines. - Monitor daily work progress and prepare daily, weekly, and monthly progress reports. - Assist in quantity take-offs, material verification, and work measurement."
    },
    {
        id: 4,
        image: "/images/logo_150.webp",
        title: "በያጅ",
        location: "Addis Ababa",
        company: "SNFD Bakery PLC",
        daysLeft: "11",
        posted: "5",
        views: "5.4k",
        catagory: "Business",
        description: "ሰርተፍኬት ወይም ዲፕሎማ በዌልዲንግ ወይም በተመሳሳይ የትምህርት መስክ ያለው/ላት አግባብነት ካለው የስራ ልምድ ጋር ዋና ዋና ኃላፊነቶች የተለያዩ ዘዴዎችን በመጠቀም የዌልዲንግ ስራዎችን ማከናወን እና ብረቶችን በጥራት ማያያዝ - የብረት ክፍሎችን መቆራረጥ እና ማገጣጠም እንዲሁም ቀለም መቀባት - የራስ መከላከያ መሣሪያዎችን (ጭምብል፣ ጓንት) በአግባቡ በመጠቀም - የስራ ጥራትን ማረጋገጥ እና መመርመር - የብየዳ መሳሪያዎችንና ማሽኖችን በአግባቡ መጠቀምና መጠበቅ - የመሳሪያ ጥገና እና ለስራ የሚሰጡ መሣሪያዎችን በጥንቃቄ መያዝ - የሥራ ቦታ የደህንነት መመሪያዎችን መከተል"
    },
    {
        id: 5,
        image: "/images/logo_150.webp",
        title: "በያጅ",
        location: "Addis Ababa",
        company: "SNFD Bakery PLC",
        daysLeft: "11",
        posted: "5",
         views: "5.4k",
        catagory: "Business",
        description: "ሰርተፍኬት ወይም ዲፕሎማ በዌልዲንግ ወይም በተመሳሳይ የትምህርት መስክ ያለው/ላት አግባብነት ካለው የስራ ልምድ ጋር ዋና ዋና ኃላፊነቶች የተለያዩ ዘዴዎችን በመጠቀም የዌልዲንግ ስራዎችን ማከናወን እና ብረቶችን በጥራት ማያያዝ - የብረት ክፍሎችን መቆራረጥ እና ማገጣጠም እንዲሁም ቀለም መቀባት - የራስ መከላከያ መሣሪያዎችን (ጭምብል፣ ጓንት) በአግባቡ በመጠቀም - የስራ ጥራትን ማረጋገጥ እና መመርመር - የብየዳ መሳሪያዎችንና ማሽኖችን በአግባቡ መጠቀምና መጠበቅ - የመሳሪያ ጥገና እና ለስራ የሚሰጡ መሣሪያዎችን በጥንቃቄ መያዝ - የሥራ ቦታ የደህንነት መመሪያዎችን መከተል"
    },
    {
        id: 6,
        image: "/images/logo_150.webp",
        title: "በያጅ",
        location: "Addis Ababa",
        company: "SNFD Bakery PLC",
        daysLeft: "11",
        posted: "5",
         views: "5.4k",
        catagory: "Business",
        description: "ሰርተፍኬት ወይም ዲፕሎማ በዌልዲንግ ወይም በተመሳሳይ የትምህርት መስክ ያለው/ላት አግባብነት ካለው የስራ ልምድ ጋር ዋና ዋና ኃላፊነቶች የተለያዩ ዘዴዎችን በመጠቀም የዌልዲንግ ስራዎችን ማከናወን እና ብረቶችን በጥራት ማያያዝ - የብረት ክፍሎችን መቆራረጥ እና ማገጣጠም እንዲሁም ቀለም መቀባት - የራስ መከላከያ መሣሪያዎችን (ጭምብል፣ ጓንት) በአግባቡ በመጠቀም - የስራ ጥራትን ማረጋገጥ እና መመርመር - የብየዳ መሳሪያዎችንና ማሽኖችን በአግባቡ መጠቀምና መጠበቅ - የመሳሪያ ጥገና እና ለስራ የሚሰጡ መሣሪያዎችን በጥንቃቄ መያዝ - የሥራ ቦታ የደህንነት መመሪያዎችን መከተል"
    },
    {
        id: 7,
        image: "/images/logo_150.webp",
        title: "በያጅ",
        location: "Addis Ababa",
        company: "SNFD Bakery PLC",
        daysLeft: "11",
        posted: "5",
        views: "5.4k",
        catagory: "Business",
        description: "ሰርተፍኬት ወይም ዲፕሎማ በዌልዲንግ ወይም በተመሳሳይ የትምህርት መስክ ያለው/ላት አግባብነት ካለው የስራ ልምድ ጋር ዋና ዋና ኃላፊነቶች የተለያዩ ዘዴዎችን በመጠቀም የዌልዲንግ ስራዎችን ማከናወን እና ብረቶችን በጥራት ማያያዝ - የብረት ክፍሎችን መቆራረጥ እና ማገጣጠም እንዲሁም ቀለም መቀባት - የራስ መከላከያ መሣሪያዎችን (ጭምብል፣ ጓንት) በአግባቡ በመጠቀም - የስራ ጥራትን ማረጋገጥ እና መመርመር - የብየዳ መሳሪያዎችንና ማሽኖችን በአግባቡ መጠቀምና መጠበቅ - የመሳሪያ ጥገና እና ለስራ የሚሰጡ መሣሪያዎችን በጥንቃቄ መያዝ - የሥራ ቦታ የደህንነት መመሪያዎችን መከተል"
    },
    {
        id: 7,
        image: "/images/logo_150.webp",
        title: "በያጅ",
        location: "Addis Ababa",
        company: "SNFD Bakery PLC",
        daysLeft: "11",
        posted: "5",
        views: "5.4k",
        catagory: "Business",
        description: "ሰርተፍኬት ወይም ዲፕሎማ በዌልዲንግ ወይም በተመሳሳይ የትምህርት መስክ ያለው/ላት አግባብነት ካለው የስራ ልምድ ጋር ዋና ዋና ኃላፊነቶች የተለያዩ ዘዴዎችን በመጠቀም የዌልዲንግ ስራዎችን ማከናወን እና ብረቶችን በጥራት ማያያዝ - የብረት ክፍሎችን መቆራረጥ እና ማገጣጠም እንዲሁም ቀለም መቀባት - የራስ መከላከያ መሣሪያዎችን (ጭምብል፣ ጓንት) በአግባቡ በመጠቀም - የስራ ጥራትን ማረጋገጥ እና መመርመር - የብየዳ መሳሪያዎችንና ማሽኖችን በአግባቡ መጠቀምና መጠበቅ - የመሳሪያ ጥገና እና ለስራ የሚሰጡ መሣሪያዎችን በጥንቃቄ መያዝ - የሥራ ቦታ የደህንነት መመሪያዎችን መከተል"
    },
    {
        id: 7,
        image: "/images/logo_150.webp",
        title: "በያጅ",
        location: "Addis Ababa",
        company: "SNFD Bakery PLC",
        daysLeft: "11",
        posted: "5",
        views: "5.4k",
        catagory: "Business",
        description: "ሰርተፍኬት ወይም ዲፕሎማ በዌልዲንግ ወይም በተመሳሳይ የትምህርት መስክ ያለው/ላት አግባብነት ካለው የስራ ልምድ ጋር ዋና ዋና ኃላፊነቶች የተለያዩ ዘዴዎችን በመጠቀም የዌልዲንግ ስራዎችን ማከናወን እና ብረቶችን በጥራት ማያያዝ - የብረት ክፍሎችን መቆራረጥ እና ማገጣጠም እንዲሁም ቀለም መቀባት - የራስ መከላከያ መሣሪያዎችን (ጭምብል፣ ጓንት) በአግባቡ በመጠቀም - የስራ ጥራትን ማረጋገጥ እና መመርመር - የብየዳ መሳሪያዎችንና ማሽኖችን በአግባቡ መጠቀምና መጠበቅ - የመሳሪያ ጥገና እና ለስራ የሚሰጡ መሣሪያዎችን በጥንቃቄ መያዝ - የሥራ ቦታ የደህንነት መመሪያዎችን መከተል"
    },
    {
        id: 7,
        image: "/images/logo_150.webp",
        title: "በያጅ",
        location: "Addis Ababa",
        company: "SNFD Bakery PLC",
        daysLeft: "11",
        posted: "5",
        views: "5.4k",
        catagory: "Business",
        description: "ሰርተፍኬት ወይም ዲፕሎማ በዌልዲንግ ወይም በተመሳሳይ የትምህርት መስክ ያለው/ላት አግባብነት ካለው የስራ ልምድ ጋር ዋና ዋና ኃላፊነቶች የተለያዩ ዘዴዎችን በመጠቀም የዌልዲንግ ስራዎችን ማከናወን እና ብረቶችን በጥራት ማያያዝ - የብረት ክፍሎችን መቆራረጥ እና ማገጣጠም እንዲሁም ቀለም መቀባት - የራስ መከላከያ መሣሪያዎችን (ጭምብል፣ ጓንት) በአግባቡ በመጠቀም - የስራ ጥራትን ማረጋገጥ እና መመርመር - የብየዳ መሳሪያዎችንና ማሽኖችን በአግባቡ መጠቀምና መጠበቅ - የመሳሪያ ጥገና እና ለስራ የሚሰጡ መሣሪያዎችን በጥንቃቄ መያዝ - የሥራ ቦታ የደህንነት መመሪያዎችን መከተል"
    }
    
]

</script>
<template>
    <section class="px-32 py-6 bg-white ">
        <div class="text-center">
            <h1 class="text-5xl font-extrabold mt-12">Featured Jobs</h1>
            <p class="mt-4 text-sm">Explore our handpicked selection of top job openings. Find your dream career match today.</p>
        </div>

    <div class="relative mt-8  ">
        <Carousel :items-to-show="3.5" :wrap-around="true" :autoplay="3000" :gap="12">
            <Slide v-for="job in jobs" :key="job.id" class="flex items-start">
                <JobCard 
                :title="job.title"
                :location="job.location"
                :catagory="job.catagory"
                :company="job.company"
                :image="job.image"
                :description="job.description"
                :daysLeft="job.daysLeft"
                :posted="job.posted"
                :views="job.views" class="hover:h-[500px] transition-all duration-700 overflow-hidden ease-in-out hover:border-b-8 hover:border-teal-600"/>

            </Slide>
            <template #addons>
                <Pagination class="gap-4"/>
            </template>
        </Carousel>
        
        <div class="absolute left-0 top-0 h-full w-[200px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

    
        <div class="absolute right-0 top-0 h-full w-[200px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>


    </div>

    </section>  
</template>

<style>
.carousel__pagination-button {
  width: 10px;
  height: 10px;
  border-radius:10px;
  background: #d1d5db;
}

.carousel__pagination-button--active {
  background: #14b8a6;
}
</style>