<script setup>

const jobs = [
    {
        id: 1,
        image: "/images/logo_150.webp",
        title: "ካሸር",
        location: "Addis Ababa",
        company: "SNFD Bakery PLC",
        daysLeft: "11",
        posted: "5",
        catagory: "Business",
        description: "ዲፕሎማ ወይም የመጀመሪያ ዲግሪ በአካውንቲንግ ወይም በተመሳሳይ የትምህርት መስክ ያላት አግባብነት ካለው የስራ ልምድ ጋር ዋና ዋና ኃላፊነቶች - ደንበኞችን በአክብሮት እና በከፍተኛ ሙያዊ ስነ-ምግባር ማስተናገድ እና ቅሬታዎችን መፍታት - የተለያዩ የክፍያ አማራጮችን (ጥሬ ገንዘብ፣ የባንክ ካርድ፣ የሞባይል ባንኪንግ ወዘተ) በመጠቀም ደንበኞችን ማስተናገድ - ለእያንዳንዱ ግብይት ተገቢውን ደረሰኝ ማዘጋጀት እና ለደንበኞች ማቅረብ - ሁሉንም የገንዘብ እንቅስቃሴዎች በድርጅቱ መመሪያ መሠረት መፈጸም - የገንዘብ ሳጥንን ትክክለኛነትና ደህንነት መጠበቅ - ዕለታዊ የሽያጭ ሪፖር ማዘጋጀት - ማንኛውንም የሂሳብ ልዩነት ወይም ስህተት ወዲያውኑ ለቅርብ ተቆጣጣሪ ማሳወቅ - የስራ ቦታን ምንጊዜም ንጹህ፣ የተደራጀ እና ለስራ ምቹ ማድረግ"
    },
     {
        id: 1,
        image: "/images/echo.webp",
        title: "የሰው ኃይል አስተዳደር ባለሙያ",
        location: "Addis Ababa",
        company: "SNFD Bakery PLC",
        daysLeft: "11",
        posted: "5",
        catagory: "Business",
        description: "በሰው ኃይል አስተዳደር፣ በቢዝነስ አስተዳደር ወይም በተመሳሳይ የትምህርት መስክ የመጀመሪያ ዲግሪ ያለው/ያላት አግባብነት ካለው የስራ ልምድ ጋር ዋና ዋና ኃላፊነቶች - ለሽያጭ፣ ለገበያ፣ ለግንባታ እና ለአስተዳደር ሚናዎች እጩዎችን ማጣራት፣ ቃለ መጠይቅ ማድረግ፣ መገምገም እና ውጤቱን ማሳወቅ - የስራ ቅጥር ማስታወቂያዎችን ማዘጋጀት እና መለጠፍ እንዲሁም ማስተዳደር - ለሠራተኞች ስጋቶች እና ለግጭት አፈታት የመጀመሪያ የመገናኛ ነጥብ ሆኖ ማገልገል - የቡድን ግንባታ እና የስልጠና ክፍለ ጊዜዎችን ማደራጀት - ትክክለኛ የሠራተኛ መዝገቦችን (ኮንትራቶች፣ የእረፍት ጊዜ፣ ጥቅማ ጥቅሞች) በአግባቡ መያዝ - የክህሎት ክፍተቶችን በመለየት በሽያጭ ቴክኒኮች፣ በደንበኛ አገልግሎት እና በግንባታ ደህንነት ላይ ስልጠናዎችን ማዘጋጀት - ለሠራተኞች የሙያ መሻሻያ ፕሮግራሞችን መደገፍ - የደመወዝ ክፍያ፣ ጥቅማ ጥቅሞች ማጥናት እና ደረጃዎቸን መመደብ"
    },
     {
        id: 1,
        image: "/images/atta.jpeg",
        title: "Junior MEP Engineer (Electro-Mechanical)",
        location: "Addis Ababa",
        company: "SNFD Bakery PLC",
        daysLeft: "11",
        posted: "5",
        catagory: "Business",
        description: "Bachelor's Degree in Electro-Mechanical Engineering or with related field of study from a recognized university with relevant work experience Duties and Responsibilities - Assist in supervising Mechanical, Electrical, Plumbing, and Fire Protection installation works. - Review engineering drawings, shop drawings, specifications, and technical documents. - Assist in reviewing MEP design drawings for constructability and coordination. - Identify clashes and inconsistencies between different engineering disciplines. - Monitor daily work progress and prepare daily, weekly, and monthly progress reports. - Assist in quantity take-offs, material verification, and work measurement."
    },
    {
        id: 1,
        image: "/images/logo_150.webp",
        title: "በያጅ",
        location: "Addis Ababa",
        company: "SNFD Bakery PLC",
        daysLeft: "11",
        posted: "5",
        catagory: "Business",
        description: "ሰርተፍኬት ወይም ዲፕሎማ በዌልዲንግ ወይም በተመሳሳይ የትምህርት መስክ ያለው/ላት አግባብነት ካለው የስራ ልምድ ጋር ዋና ዋና ኃላፊነቶች የተለያዩ ዘዴዎችን በመጠቀም የዌልዲንግ ስራዎችን ማከናወን እና ብረቶችን በጥራት ማያያዝ - የብረት ክፍሎችን መቆራረጥ እና ማገጣጠም እንዲሁም ቀለም መቀባት - የራስ መከላከያ መሣሪያዎችን (ጭምብል፣ ጓንት) በአግባቡ በመጠቀም - የስራ ጥራትን ማረጋገጥ እና መመርመር - የብየዳ መሳሪያዎችንና ማሽኖችን በአግባቡ መጠቀምና መጠበቅ - የመሳሪያ ጥገና እና ለስራ የሚሰጡ መሣሪያዎችን በጥንቃቄ መያዝ - የሥራ ቦታ የደህንነት መመሪያዎችን መከተል"
    }
    
]

</script>
<template>
    <section class="px-6 py-4 ">
        <div class="text-center">
            <h1 class="text-5xl font-extrabold mt-12">Featured Jobs</h1>
            <p class="mt-4 text-sm">Explore our handpicked selection of top job openings. Find your dream career match today.</p>
        </div>
        <div class="flex justify-center gap-4 mt-6 flex-wrap">

        <JobCard 
        v-for="job in jobs"
        :key="job.id"
        :title="job.title"
        :location="job.location"
        :image="job.image"
        :company="job.company"
        :description="job.description"
        :catagory="job.catagory"
        :daysLeft="job.daysLeft"
        :posted="job.posted"
        />
        </div>

    </section>  
</template>