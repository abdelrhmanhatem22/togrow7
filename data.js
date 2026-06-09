// كوؤسات 
const COURSES = [
{
    slug: "programming",
    title: "Programming · Front-End",
    title_ar: "برمجة الواجهات الأمامية",
    icon: "fa-code",
    duration: "3 Months",
    short: "HTML, CSS, JavaScript . Build real websites from scratch.",
    short_ar: "تعلم HTML و CSS و JavaScript وإنشاء مواقع ويب حقيقية من الصفر.",
    about: "Learn Front-End development step by step and build real projects for your portfolio.",
    about_ar: "تعلم تطوير الواجهات الأمامية خطوة بخطوة وقم بتنفيذ مشاريع حقيقية لإضافتها إلى معرض أعمالك.",
    img: "course-programming (1).jpg"
},
    {
        slug: "graphic-design",
        title: "Graphic Design",
        title_ar: " جرافيك ديزاين",
        icon: "fa-pen-ruler",
        duration: "3 Months",
        short: "Photoshop, Illustrator and design principles for stunning visuals.",
        short_ar: "تعلم Photoshop و Illustrator ومبادئ التصميم لإنشاء صور مذهلة.",
        about: "Master graphic design using Photoshop, Illustrator, and modern design principles. Create professional branding, social media designs, and marketing materials.",
    about_ar: "أتقن التصميم الجرافيكي باستخدام Photoshop و Illustrator ومبادئ التصميم الحديثة، مع تنفيذ هويات بصرية وتصميمات سوشيال ميديا وأعمال تسويقية احترافية.",
        img:"course-graphic-design.jpg"
    },
    {
        slug: "digital-marketing",
        title: "Digital Marketing",
        title_ar: "تسويق الكتروني",
        icon: "fa-bullhorn",
        duration: "3 Months",
        short: "Social media, ads, SEO and content strategy to grow any brand.",
        short_ar: "تعلم وسائل التواصل الاجتماعي والإعلانات و SEO Estrategy لنمو أي علامة تجارية.",
        about: "Learn social media marketing, paid advertising, SEO, content creation, and marketing strategies to grow businesses and brands online.",
    about_ar: "تعلم التسويق عبر وسائل التواصل الاجتماعي والإعلانات الممولة وSEO وصناعة المحتوى والاستراتيجيات التسويقية لتنمية الشركات والعلامات التجارية عبر الإنترنت.",
        img:"course-digital-marketing (1).jpg"
    },
    {
        slug: "english",
        title: "English",
        title_ar: "الإنجليزية",
        icon: "fa-comments",
        duration: "4 Months",
        short: "Practical English to speak, write and communicate with confidence.",
        short_ar: "تعلم الإنجليزية بشكل عملي للتحدث والكتابة والتواصل بثقة.",
        about: "Improve your English speaking, listening, reading, and writing skills through practical lessons and real-life conversations.",
        about_ar: "طوّر مهارات التحدث والاستماع والقراءة والكتابة باللغة الإنجليزية من خلال دروس عملية ومحادثات واقعية تساعدك على اكتساب الثقة والطلاقة.",
        img:"course-english.jpg"
    },
    {
        slug: "advanced-english",
        title: "Advanced English",
        title_ar: "الإنجليزية المتقدمة",
        icon: "fa-language",
        duration: "4 Months",
        short: "For learners ready to master fluency, IELTS prep and pro-level skills.",
        short_ar: "للمتعلمين المستعدين لمواصلة اللباقة، وإعداد IELTS المهارات على مستوى المحترفين.",
        about: "Enhance your fluency, pronunciation, advanced grammar, and communication skills for academic and professional environments.",
        about_ar: "طوّر مستوى الطلاقة والنطق والقواعد المتقدمة ومهارات التواصل باللغة الإنجليزية للاستخدام الأكاديمي والمهني.",
        img:"course-advanced-english (1).jpg"
    },
    {
        slug: "reels-maker",
        title: "Reels Maker",
        title_ar: "صانع محتوي",
        icon: "fa-film",
        duration: "3 Month",
        short: "Shoot, edit and publish viral short videos for Instagram & TikTok.",
        short_ar: "التقاط، تحرير ونشر مقاطع فيديو قصيرة شهيرة لـ Instagram & TikTok.",
        about: "Learn how to create engaging reels and short-form videos using professional editing techniques, storytelling, and social media trends.",
        about_ar: "تعلم صناعة الريلز والفيديوهات القصيرة باستخدام تقنيات المونتاج الاحترافية والسرد القصصي وأحدث اتجاهات وسائل التواصل الاجتماعي.",
        img:"course-reel-maker.jpg"
    },
    {
        slug: "ai",
        title: "Artificial Intelligence",
        title_ar: "الذكاء الاصطناعي",
        icon: "fa-brain",
        duration: "3 Months",
        short: "Use AI tools, prompt engineering and automate your work like a pro.",
        short_ar: "استخدم أدوات الذكاء الاصطناعي، وهندسة المطالبات وأتمتة عملك مثل محترف.",
        about: "Explore Artificial Intelligence, prompt engineering, AI tools, automation, and practical applications that improve productivity and business growth.",
        about_ar: "استكشف الذكاء الاصطناعي وهندسة الأوامر وأدوات الذكاء الاصطناعي والأتمتة والتطبيقات العملية التي تساعد على زيادة الإنتاجية وتطوير الأعمال.",
        img:"course-ai.jpg"
    }
];

// حبراء

const TRAINERS = [
    {
        name: "Aya Alaasar",
        role_en: "Front-End Trainer",
        role_ar: "مدربه فرونت إند",
        bio_en: "Senior Front-End Engineer with 7+ years building production web apps.",
        bio_ar: "مهندس فرونت إند خبير لمدة 7+ سنوات في بناء تطبيقات ويب احترافية.",
        img: "",
        facebook: "",
        instagram: "",
        tiktok: "",
        whatsapp: ""
    },
    {
        name: "Alhassan Ahmed",
        role_en: "Graphic Designer",
        role_ar: "مدرب الجرافيك",
        bio_en: "Graphic engineer with 4 years of experience in creating professional designs",
        bio_ar: "مهندس جرافيك خبره لمده 4سنوات في بناء تصاميم احترافيه",
        img: "",
        facebook: "",
        instagram: "",
        tiktok: "",
        whatsapp: ""
    },
    {
        name: "Mohamed alsawy",
        role_en: "Digital Marketer",
        role_ar: "خبير تسويق رقمي ",
        bio_en: "Performance marketer specialised in Meta & Google ads with proven ROI.",
        bio_ar: "مسوق أداء متخصص في إعلانات ميتا وجوجل مع عائد استثمار مثبت.",
        img: "",
        facebook: "",
        instagram: "",
        tiktok: "",
        whatsapp: ""
    },
    {
        name: "Aya Amr",
        role_en: "English Instructor",
        role_ar: "مدربة لغة إنجليزية",
        bio_en: "Certified TEFL instructor passionate about helping learners speak fluently.",
        bio_ar: "مدربة معتمدة في تدريس الإنجليزية كلغة أجنبية، شغوفة بمساعدة المتعلمين على التحدث بطلاقة.",
        img: "",
        facebook: "",
        instagram: "",
        tiktok: "",
        whatsapp: ""
    },
    {
        name: "Aya Elaasar",
        role_en: "AI Specialist",
        role_ar: "أخصائيه ذكاء اصطناعي",
        bio_en: "AI engineer focused on practical AI tools and automation for daily work.",
        bio_ar: "مهندسه ذكاء اصطناعي تركز على أدوات الذكاء الاصطناعي العملية وأتمتة العمل اليومي.",
        img: "",
        facebook: "",
        instagram: "",
        tiktok: "",
        whatsapp: ""
    },
    {
        name: "Yousef Mohamed",
        role_en: "Reels & Video Editor",
        role_ar: "مونتير فيديوهات وريلز",
        bio_en: "Short-video creator with millions of views across TikTok & Instagram.",
        bio_ar: "صانع محتوى فيديوهات قصيرة بملايين المشاهدات على تيك توك وإنستغرام.",
        img: "", facebook: "",
        instagram: "",
        tiktok: "",
        whatsapp: ""
    },
    {
        name: "Bishoy Elgamil",
        role_en: "English Instructor",
        role_ar:"خبير لغه انجليزيه",
        bio_en: "Certified TEFL instructor passionate about helping learners speak fluently.",
        bio_ar: "مدرب معتمد في تدريس الإنجليزية كلغة أجنبية، شغوف بمساعدة المتعلمين على التحدث بطلاقة.",
        img: "",
        facebook: "",
        instagram: "",
        tiktok: "",
        whatsapp: ""
    },
];
// اوفرات 
const OFFERS = [
    {
        course: "Front-End Development",
        course_ar: "تطوير واجهات المستخدم",
        discount: 65,
        oldPrice: 6600,
        newPrice: 2200,
        duration: "Ends in 7 days",
        duration_ar: "ينتهي خلال 7 أيام",
        img: "discount-programming.jpg"
    },
    {
        course: "Graphic Design",
        course_ar: "تصميم جرافيك",
        discount: 65,
        oldPrice: 6600,
        newPrice: 2200,
        duration: "Ends in 5 days",
        duration_ar: "ينتهي خلال 5 أيام",
        img: "discount-graphic-design.jpg"
    },
    {
        course: "Digital Marketing",
        course_ar: "التسويق الرقمي",
        discount: 65,
        oldPrice: 6600,
        newPrice: 2200,
        duration: "Ends in 3 days",
        duration_ar: "ينتهي خلال 3 أيام",
        img: "discount-digital-marketing.jpg"
    },
    {
        course: "Artificial Intelligence",
        course_ar: "الذكاء الاصطناعي",
        discount: 65,
        oldPrice: 6600,
        newPrice: 2200,
        duration: "Ends in 10 days",
        duration_ar: "ينتهي خلال 10 أيام",
        img: "discount-ai (2).jpg"
    },
    {
        course: "English Course",
        course_ar: "دورة اللغة الإنجليزية",
        discount: 65,
        oldPrice: 7200,
        newPrice: 2600,
        duration: "Ends in 12 days",
        duration_ar: "ينتهي خلال 12 يوم",
        img: "discount-english (1).jpg"
    },
    {
        course: "Reels Maker",
        course_ar: "صانع محتوي",
        discount: 65,
        oldPrice: 6600,
        newPrice: 2200,
        duration: "Ends in 4 days",
        duration_ar: "ينتهي خلال 4 أيام",
        img: "discount-reel-maker.jpg"
    },
    {
        course: "Advanced English",
        course_ar: "اللغة الإنجليزية المتقدمة",
        discount: 65,
        oldPrice: 7200,
        newPrice: 3000,
        duration: "Ends in 8 days",
        duration_ar: "ينتهي خلال 8 أيام",
        img: "discount-advanced-english.jpg"
    }
];
// مشاريع
const PROJECTS = {
    "Programming": [
        { type: "video", src: "Food Website - Profile 1 - Microsoft​ Edge 2026-04-26 00-22-36.mp4", title: "Food Website" },
        { type: "video", src: "video_2026-06-09_00-44-55.mp4", title: "Falma website" },
        { type: "video", src: "video_2026-06-09_00-48-35.mp4", title: "Flovuers Hub website" },
        { type: "video", src: "IMG_8315.MP4", title: "Hardee website" }
    ],
    "Graphic Design": [
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.55.04 PM (1).jpeg", title: "ٍsocial poster" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.55.04 PM.jpeg", title: "Social Posters" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.55.06 PM (3).jpeg", title: "social poster" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.55.06 PM (4).jpeg", title: "social poster" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.55.07 PM (1).jpeg", title: "social poster" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.55.06 PM.jpeg", title: "social poster" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.55.07 PM.jpeg", title: "social poster" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.55.04 PM (2).jpeg", title: "social poster" }
    ],
    "Digital Marketing": [
        { type: "image", src: "", title: "Ad Campaign" },
        { type: "image", src: "", title: "Social Media Strategy" },
        { type: "video", src: "", title: "SEO Case Study" }
    ],
    "English": [
        { type: "video", src: "", title: "Student Speaking Project" },
        { type: "video", src: "", title: "Conversation Club" }
    ],
    "AI": [
        { type: "video", src: "WhatsApp Video 2026-06-08 at 11.04.04 AM.mp4", title: "" },
        { type: "video", src: "WhatsApp Video 2026-06-08 at 11.08.04 AM.mp4", title: "" }
    ]
};
// حفلات
const GRADUATION = {
    "TGR1": [
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.07.15 AM.jpeg",title:"stadge moment"  },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.05.30 AM.jpeg",title: "Stadge Moment"  },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 5.58.09 AM.jpeg", title: "Stadge Moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.11.46 AM.jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 5.58.10 AM.jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.18.07 AM.jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 5.58.09 AM (2).jpeg", title: "stage moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 5.58.10 AM (2).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.25.55 AM.jpeg",title:"stadge moment"  },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.29.53 AM.jpeg",title: "Stadge Moment"  },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.29.29 AM.jpeg", title: "Stadge Moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.29.15 AM.jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.28.54 AM.jpeg", title: "stadge moment" },
    ],
    "TGR2": [
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.57.55 AM.jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.58.16 AM.jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.58.01 AM.jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.58.16 AM.jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.58.17 AM (1).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.58.24 AM (2).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.58.22 AM.jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.58.24 AM (1).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.58.17 AM (2).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.58.25 AM (3).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 7.12.21 AM.jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 7.12.21 AM (1).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.58.25 AM (1).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.58.24 AM (3).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.58.24 AM (5).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.58.24 AM (4).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 7.54.35 AM.jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.58.25 AM.jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 7.55.41 AM.jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-08 at 6.58.23 AM (2).jpeg", title: "stadge moment" },
        
    ],
        "Events": [
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.55 AM (3).jpeg",title:"stadge moment"  },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.57 AM.jpeg",title: "Stadge Moment"  },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.56 AM.jpeg", title: "Stadge Moment" },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.55 AM (3).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.55 AM (4).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.57 AM (2).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.41 AM.jpeg", title: "stage moment" },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.56 AM (4).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.56 AM (5).jpeg",title:"stadge moment"  },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.56 AM (2).jpeg",title: "Stadge Moment"  },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.56 AM (1).jpeg", title: "Stadge Moment" },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.56 AM (1).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.55 AM (1).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.38 AM.jpeg",title:"stadge moment"  },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.37 AM.jpeg",title: "Stadge Moment"  },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.44 AM.jpeg", title: "Stadge Moment" },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.55 AM (5).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.55 AM (1).jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.55 AM.jpeg", title: "stadge moment" },
        { type: "image", src: "WhatsApp Image 2026-06-09 at 1.27.55 AM (2).jpeg", title: "stadge moment" },
    ],
};

// اراء
const TESTIMONIALS = [
    { name: "Abdelrahman Hatem", role: "Front-End Developer", rating: 5, img: "WhatsApp Image 2026-06-08 at 4.37.13 AM.jpeg", text: "Two Grow Academy changed my life! I learned Front-End and now I work as a freelancer." },
    { name: "Mohamed Elbaz", role: "Graphic Designer", rating: 5, img: "WhatsApp Image 2026-06-08 at 4.44.14 AM.jpeg", text: "Amazing trainers and very practical content. I built a real portfolio during the course." },
    { name: "Ahmed shreef", role: "Digital Marketer", rating: 5, img: "WhatsApp Image 2026-06-08 at 4.41.18 AM.jpeg", text: "I grew my own business thanks to the Digital Marketing course. Highly recommended!" },
    { name: "sayed", role: "English Learner", rating: 5, img: "WhatsApp Image 2026-06-08 at 4.46.30 AM.jpeg", text: "My English improved a lot — speaking with confidence for the first time in my life." },
]

// ترجمه
const TRANSLATIONS = {
    ar: {
        // هيدر
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_courses: "الكورسات",
        nav_trainers: "المدربين",
        nav_offers: "العروض",
        nav_projects: "المشاريع",
        nav_graduation: "التخرج",
        nav_contact: "اتصل بنا",
        register_btn: "سجل الآن",
        // هيرو
        hero_badge: "مرحباً بك في تو جرو أكاديمي",
        hero_title: "ابدأ مستقبلك مع",
        hero_title_accent: "تو جرو أكاديمي",
        hero_desc: "أكاديمية تعليمية تساعدك على بناء مهارات عملية، وتطوير مواهبك، وبدء مسيرة مهنية ناجحة من خلال دورات احترافية على يد مدربين خبراء.",
        register_btn_hero: "سجل الآن",
        view_courses_btn: "استعرض الكورسات",
        students_count: "طالب",
        students_label: "ينموون معنا بالفعل",
        // عن
        about_badge: "— عن الأكاديمية",
        about_title: "عن",
        about_title_accent: "تو جرو أكاديمي",
        about_desc: "تو جرو أكاديمي هي أكاديمية تعليمية رائدة تقدم دورات عالية الجودة في التكنولوجيا والتصميم والتسويق واللغات. نحن نمكن طلابنا من المهارات العملية والمشاريع الحقيقية.",
        vision_title: "رؤيتنا",
        vision_desc: "أن نكون الأكاديمية التعليمية الرائدة في المنطقة، لبناء جيل من المحترفين.",
        mission_title: "مهمتنا",
        mission_desc: "تقديم تعليم عملي عالي الجودة عبر مدربين خبراء ومشاريع حقيقية. تدريب وتشغيل الطلبه",
        why_title: "لماذا تو جرو؟",
        why_desc: "  مدربون خبراء، مشاريع عملية، شهادات معتمدة، ومجتمع قوي.تعليم لايف ومسجل . برنامج عليه كل المحاضرات ترجعلها ااي وقت",
        // حالات 
        courses_available: "كورس متاح",
        expert_trainers: "مدرب خبير",
        happy_students: "طالب سعيد",
        success_rate: "نسبة نجاح",
        // كورسات
        courses_section_badge: "— كورساتنا",
        courses_section_title: "استكشف كورساتنا",
        courses_section_desc: "اختر من بين مجموعة واسعة من الكورسات الاحترافية.",
        view_details: "تفاصيل",
        // خبراء
        trainers_section_badge: "— فريقنا",
        trainers_section_title: "مدربونا الخبراء",
        trainers_section_desc: "تعلم من محترفي الصناعة.",
        // اوفرات
        offers_section_badge: "— لفترة محدودة",
        offers_section_title: "العروض والخصومات الحالية",
        offers_section_desc: "احصل على أفضل العروض على كورساتنا الأكثر شهرة.",
        register_now: "سجل الآن",
        // مشاريغ
        projects_section_badge: "— أعمال الطلاب",
        projects_section_title: "مشاريع الطلاب",
        projects_section_desc: "مشاريع حقيقية أنشأها طلابنا الموهوبون.",
        // مشاريع
        graduation_section_badge: "— الاحتفال بالنجاح",
        graduation_section_title: "حفلات التخرج",
        graduation_section_desc: "ذكريات من حفلات التخرج لدينا.",
        // اراء
        testimonials_section_badge: "— ماذا يقول الطلاب",
        testimonials_section_title: "آراء الطلاب",
        // تةاصل
        contact_section_badge: "— تواصل معنا",
        contact_section_title: "اتصل بنا",
        contact_section_desc: "لديك سؤال؟ أرسل لنا رسالة.",
        contact_name: "الاسم",
        contact_phone: "الهاتف",
        contact_email: "البريد الإلكتروني",
        contact_message: "الرسالة",
        contact_name_placeholder: "الاسم الكامل",
        contact_phone_placeholder: "مثال: 010xxxxxxxx",
        contact_email_placeholder: "بريدك الإلكتروني",
        contact_message_placeholder: "كيف يمكننا مساعدتك؟",
        send_btn: "إرسال الرسالة",
        address_title: "العنوان",
        address_text: "مول سيتي سنتر، نيو نوزة — بجوار مترو هشام بركات، مبنى B، الطابق الثالث",
        phone_title: "الهاتف",
        email_title: "البريد الإلكتروني",
        open_map: "فتح في خرائط جوجل",
        // فةةتر
        footer_invest: "استثمر في نفسك. تعلم مهارات عملية، وابنِ مشاريع حقيقية، وابدأ المسيرة المهنية التي تستحقها.",
        footer_quick_links: "روابط سريعة",
        footer_contact_info: "معلومات الاتصال",
        footer_follow_us: "تابعنا",
        footer_stay_connected: "ابق على تواصل مع الأكاديمية عبر وسائل التواصل الاجتماعي.",
        copyright: "جميع الحقوق محفوظة",
        // تفاصيل كورس
        back_to_courses: "رجوع إلى الكورسات",
        about_course: "عن الكورس",
        what_you_learn: "ماذا ستتعلم",
        course_info: "معلومات الكورس",
        duration_label: "المدة",
        level_label: "المستوى",
        level_value: "مبتدئ → متقدم",
        certificate_label: "الشهادة",
        certificate_value: "مُضمنة",
        format_label: "النظام",
        format_value: "مجموعات وأونلاين",
        register: "سجل الآن",
        months: "شهور",
        about_course_desc_en: (course) => `في دورة ${course.title} الخاصة بنا، ستتعلم خطوة بخطوة، وتعمل على مشاريع حقيقية، وتنتهي بمحفظة أعمال.`,
        // ترجمخه
        checklist_items: [
            "أسس قوية ومفاهيم أساسية",
            "تطبيق عملي على مشاريع حقيقية",
            "أدوات يستخدمها المحترفون",
            "أفضل الممارسات ونصائح للمهنة",
            "مشروع نهائي يضاف إلى بورتفوليو الخاص بك"
        ],
        // اراء
        testimonials_list: [
            { name: "عبدالرحمن حاتم ", role: "طالب فرونت إند", rating: 5,img:"WhatsApp Image 2026-06-08 at 4.37.13 AM.jpeg", text: " تو جرو أكاديمي غيرت حياتي! تعلمت الفرونت إند ودلوقتي شغال فريلانس ." },
            { name:"محمد الباز", role: "طالب جرافيك", rating: 5,img:"WhatsApp Image 2026-06-08 at 4.44.14 AM.jpeg", text: "مدربين علي اعلي مستوي   ومحتوى عملي ومفيد جدًا. بنيت بورتفوليو حقيقي وقت  الكورس." },
            { name: "احمد شريف", role: "طالب تسويق رقمي", rating: 5,img:"WhatsApp Image 2026-06-08 at 4.41.18 AM.jpeg", text: " انا اتعلمت ديجتال بجد المكان حلو جدا واستفدت كتير وخدت من خبره المدرب وحاليا ماسك براندات  !" },
            { name: "سيد", role: "طالب إنجليزية", rating: 5,img:"WhatsApp Image 2026-06-08 at 4.46.30 AM.jpeg", text: "بجد الانجلش قبل تو جرو حاجه وبعدها حاجه تانيه خالص اتعلمت وبقيت واثق ونا بتكلم    " },
        ]
    },
    en: {
        // هيدر
        nav_home: "Home",
        nav_about: "About",
        nav_courses: "Courses",
        nav_trainers: "Trainers",
        nav_offers: "Offers",
        nav_projects: "Projects",
        nav_graduation: "Graduation",
        nav_contact: "Contact",
        register_btn: "Register Now",
        // هيرة
        hero_badge: "WELCOME TO TWO GROW ACADEMY",
        hero_title: "START YOUR FUTURE WITH",
        hero_title_accent: "TO GROW ACADEMY",
        hero_desc: "An educational academy that helps you build practical skills, develop your talents, and start a successful career through professional courses by expert trainers.",
        register_btn_hero: "Register Now",
        view_courses_btn: "View Courses",
        students_count: "Students",
        students_label: "are already growing with us",
        // غن
        about_badge: "— ABOUT THE ACADEMY",
        about_title: "About",
        about_title_accent: "To Grow Academy",
        about_desc: "Two Grow Academy is a leading educational academy that offers high-quality courses in technology, design, marketing, and languages. We empower our students with practical skills and real-world projects.",
        vision_title: "Our Vision",
        vision_desc: "To become the leading educational academy in the region, building a generation of professionals.",
        mission_title: "Our Mission",
        mission_desc: "To deliver high-quality, practical education through expert trainers and real projects.",
        why_title: "Why Two Grow?",
        why_desc: "Expert trainers, practical projects, recognized certificates, and a strong community.",
        // Stats
        courses_available: "Courses Available",
        expert_trainers: "Expert Trainers",
        happy_students: "Happy Students",
        success_rate: "Success Rate",
        // Courses 
        courses_section_badge: "— OUR COURSES",
        courses_section_title: "Explore Our Courses",
        courses_section_desc: "Choose from a wide range of professional courses.",
        view_details: "View Details",
        
        // خيراء
        trainers_section_badge: "— MEET THE TEAM",
        trainers_section_title: "Our Expert Trainers",
        trainers_section_desc: "Learn from industry professionals.",
        // Offer
        offers_section_badge: "— LIMITED TIME",
        offers_section_title: "Current Offers & Discounts",
        offers_section_desc: "Grab the best deals on our most popular courses.",
        register_now: "Register Now",
        // Project
        projects_section_badge: "— STUDENT WORK",
        projects_section_title: "Student Projects",
        projects_section_desc: "Real projects built by our talented students.",
        // حفلات
        graduation_section_badge: "— CELEBRATING SUCCESS",
        graduation_section_title: "Graduation Ceremonies",
        graduation_section_desc: "Memories from our graduation ceremonies.",
        // اراء
        testimonials_section_badge: "— WHAT STUDENTS SAY",
        testimonials_section_title: "Student Testimonials",
        // Contact
        contact_section_badge: "— GET IN TOUCH",
        contact_section_title: "Contact Us",
        contact_section_desc: "Have a question? Send us a message.",
        contact_name: "Name",
        contact_phone: "Phone",
        contact_email: "Email",
        contact_message: "Message",
        contact_name_placeholder: "Your full name",
        contact_phone_placeholder: "01xxxxxxxxx",
        contact_email_placeholder: "you@example.com",
        contact_message_placeholder: "How can we help you?",
        send_btn: "Send Message",
        address_title: "Address",
        address_text: "City Center Mall, New Nozha — next to Hisham Barakat Metro, Building B, 3rd Floor",
        phone_title: "Phone",
        email_title: "Email",
        open_map: "Open in Google Maps",
        // Footer
        footer_invest: "Invest in yourself. Learn practical skills, build real projects, and start the career you deserve.",
        footer_quick_links: "Quick Links",
        footer_contact_info: "Contact Info",
        footer_follow_us: "Follow Us",
        footer_stay_connected: "Stay connected with the academy on social media.",
        copyright: "All Rights Reserved.",
        // Course details
        back_to_courses: "Back to Courses",
        about_course: "About the Course",
        what_you_learn: "What You'll Learn",
        course_info: "Course Info",
        duration_label: "Duration",
        level_label: "Level",
        level_value: "Beginner → Advanced",
        certificate_label: "Certificate",
        certificate_value: "Included",
        format_label: "Format",
        format_value: "Group & Online",
        register: "Register Now",
        months: "Months",
        about_course_desc_en: (course) =>
        `In our ${course.title} course, you will learn step by step, work on real projects, and finish with a portfolio.`,
        // Checklist 
        checklist_items: [
            "Strong foundations and core concepts",
            "Hands-on practice with real projects",
            "Tools used by professionals",
            "Best practices and career tips",
            "Final project added to your portfolio"
        ],
        // اراء
        testimonials_list: [
            { name: "Abdelrahman Hatem", role: "Front-End Developer", rating: 5,img:"WhatsApp Image 2026-06-08 at 4.37.13 AM.jpeg", text: "Two Grow Academy changed my life! I learned Front-End and now I work as a freelancer." },
            { name: "Mohamed Elbaz", role: "Graphic Designer", rating: 5,img:"WhatsApp Image 2026-06-08 at 4.44.14 AM.jpeg", text: "Trainers at the highest level and very practical and useful content. I built a real portfolio during the course.." },
            { name: "Ahmed shreef", role: "Digital Marketer", rating: 5,img:"WhatsApp Image 2026-06-08 at 4.41.18 AM.jpeg", text: "I seriously learned digital; the place is very nice, I benefited a lot and took from the trainer's experience, and now I am managing brands." },
            { name: "sayed", role: "English Learner", rating: 5,img:"WhatsApp Image 2026-06-08 at 4.46.30 AM.jpeg", text: "Honestly, English before you knew something and after something completely different, I learned it and started speaking with confidence." },
        ]
    }
};  
