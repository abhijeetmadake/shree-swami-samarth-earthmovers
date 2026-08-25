console.log("Welcome to Shree Swami Samarth Earthmovers");


/* ==========================================
   COUNTER
========================================== */

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


/* ==========================================
   STICKY NAVBAR
========================================== */

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    header.classList.toggle(
        "sticky",
        window.scrollY > 50
    );

});


/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }

});


/* ==========================================
   BACK TO TOP
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


if (topBtn) {

    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* ==========================================
   TRANSLATIONS
========================================== */

const translations = {


    /* ======================================
       ENGLISH
    ====================================== */

    en: {

        home: "Home",

        about: "About",

        services: "Services",

        gallery: "Gallery",

        contact: "Contact",

        loading: "Loading...",

        heroTitle:
            "Building Strong Foundations",

        heroDescription:
            "Professional Earthmoving, Excavation and JCB Services",

        getQuote:
            "Get a Quote",

        aboutUs:
            "About Us",

        aboutTitle:
            "Shree Swami Samarth Earthmovers",

        aboutDescription:
            "We provide reliable earthmoving and construction services using advanced machinery like JCBs, Tractors, and Excavators. Our experienced team ensures every project is completed safely, efficiently, and on time.",

        experiencedOperators:
            "Experienced Operators",

        modernMachinery:
            "Modern Machinery",

        affordablePricing:
            "Affordable Pricing",

        onTimeDelivery:
            "On-Time Project Delivery",

        learnMore:
            "Learn More",

        projectsCompleted:
            "Projects Completed",

        heavyMachines:
            "Heavy Machines",

        happyClients:
            "Happy Clients",

        yearsExperience:
            "Years Experience",

        ourMachinery:
            "Our Machinery",

        heavyEquipment:
            "Heavy Equipment",

        jcbExcavator:
            "JCB Excavator",

        jcbExcavatorDesc:
            "Suitable for excavation, digging and construction work.",

        tractor:
            "Tractor",

        tractorDesc:
            "Transport and agricultural support services.",

        dumper:
            "Dumper",

        dumperDesc:
            "Heavy-duty transportation of construction material.",

        ourWork:
            "Our Work",

        projectGallery:
            "Project Gallery",

        testimonials:
            "Testimonials",

        whatClientsSay:
            "What Our Clients Say",

        testimonial1:
            "Excellent excavation work. The team completed our project on time with quality service.",

        testimonial2:
            "Professional operators and well-maintained JCBs. Highly recommended.",

        testimonial3:
            "Affordable pricing and excellent support throughout the project.",

        contactUs:
            "Contact Us",

        getInTouch:
            "Get In Touch",

        address:
            "Shevgaon, Ahmednagar, Maharashtra",

        yourName:
            "Your Name",

        yourEmail:
            "Your Email",

        phoneNumber:
            "Phone Number",

        yourMessage:
            "Your Message",

        sendMessage:
            "Send Message",

        footerDescription:
            "Reliable Earthmoving & Construction Services",

        allRightsReserved:
            "All Rights Reserved."

    },


    /* ======================================
       MARATHI
    ====================================== */

    mr: {

        home:
            "मुख्यपृष्ठ",

        about:
            "आमच्याबद्दल",

        services:
            "सेवा",

        gallery:
            "कामाची छायाचित्रे",

        contact:
            "संपर्क",

        loading:
            "लोड होत आहे...",

        heroTitle:
            "मजबूत पायाभरणी, भक्कम बांधकाम",

        heroDescription:
            "अर्थमूव्हिंग, उत्खनन आणि JCB च्या व्यावसायिक सेवा",

        getQuote:
            "कोटेशन मिळवा",

        aboutUs:
            "आमच्याबद्दल",

        aboutTitle:
            "श्री स्वामी समर्थ अर्थमूव्हर्स",

        aboutDescription:
            "आम्ही JCB, ट्रॅक्टर आणि उत्खनन यंत्रांच्या सहाय्याने विश्वासार्ह अर्थमूव्हिंग व बांधकाम सेवा देतो. आमची अनुभवी टीम प्रत्येक काम सुरक्षितपणे, योग्य पद्धतीने आणि वेळेत पूर्ण करण्यास कटिबद्ध आहे.",

        experiencedOperators:
            "अनुभवी ऑपरेटर",

        modernMachinery:
            "आधुनिक यंत्रसामग्री",

        affordablePricing:
            "किफायतशीर दर",

        onTimeDelivery:
            "वेळेत काम पूर्ण करण्याची खात्री",

        learnMore:
            "अधिक माहिती",

        projectsCompleted:
            "पूर्ण केलेली कामे",

        heavyMachines:
            "अवजड यंत्रे",

        happyClients:
            "समाधानी ग्राहक",

        yearsExperience:
            "वर्षांचा अनुभव",

        ourMachinery:
            "आमची यंत्रसामग्री",

        heavyEquipment:
            "अवजड यंत्रसामग्री",

        jcbExcavator:
            "JCB उत्खनन यंत्र",

        jcbExcavatorDesc:
            "उत्खनन, खोदकाम आणि विविध बांधकाम कामांसाठी उपयुक्त.",

        tractor:
            "ट्रॅक्टर",

        tractorDesc:
            "वाहतूक तसेच शेतीशी संबंधित कामांसाठी उपयुक्त सेवा.",

        dumper:
            "डंपर",

        dumperDesc:
            "बांधकाम साहित्याची जड वाहतूक करण्यासाठी उपयुक्त.",

        ourWork:
            "आमची कामे",

        projectGallery:
            "कामांची छायाचित्रे",

        testimonials:
            "ग्राहकांचे अभिप्राय",

        whatClientsSay:
            "आमचे ग्राहक काय म्हणतात",

        testimonial1:
            "उत्खननाचे उत्कृष्ट काम. आमचे काम टीमने वेळेत आणि उत्तम दर्जासह पूर्ण केले.",

        testimonial2:
            "अनुभवी ऑपरेटर आणि उत्तम देखभाल केलेल्या JCB मशीन. सेवा नक्कीच शिफारस करण्यासारखी आहे.",

        testimonial3:
            "किफायतशीर दर आणि संपूर्ण कामादरम्यान उत्कृष्ट सहकार्य मिळाले.",

        contactUs:
            "संपर्क करा",

        getInTouch:
            "आमच्याशी संपर्क साधा",

        address:
            "शेवगाव, अहमदनगर, महाराष्ट्र",

        yourName:
            "तुमचे नाव",

        yourEmail:
            "तुमचा ई-मेल",

        phoneNumber:
            "मोबाईल नंबर",

        yourMessage:
            "तुमचा संदेश",

        sendMessage:
            "संदेश पाठवा",

        footerDescription:
            "विश्वासार्ह अर्थमूव्हिंग आणि बांधकाम सेवा",

        allRightsReserved:
            "सर्व हक्क राखीव."

    },


    /* ======================================
       HINDI
    ====================================== */

    hi: {

        home:
            "होम",

        about:
            "हमारे बारे में",

        services:
            "सेवाएं",

        gallery:
            "कार्य तस्वीरें",

        contact:
            "संपर्क",

        loading:
            "लोड हो रहा है...",

        heroTitle:
            "मजबूत नींव, मजबूत निर्माण",

        heroDescription:
            "अर्थमूविंग, खुदाई और JCB की पेशेवर सेवाएं",

        getQuote:
            "कोटेशन प्राप्त करें",

        aboutUs:
            "हमारे बारे में",

        aboutTitle:
            "श्री स्वामी समर्थ अर्थमूवर्स",

        aboutDescription:
            "हम JCB, ट्रैक्टर और खुदाई मशीनों की सहायता से विश्वसनीय अर्थमूविंग और निर्माण सेवाएं प्रदान करते हैं। हमारी अनुभवी टीम प्रत्येक कार्य को सुरक्षित तरीके से, सही गुणवत्ता के साथ और समय पर पूरा करने के लिए प्रतिबद्ध है।",

        experiencedOperators:
            "अनुभवी ऑपरेटर",

        modernMachinery:
            "आधुनिक मशीनरी",

        affordablePricing:
            "किफायती दरें",

        onTimeDelivery:
            "समय पर कार्य पूरा करने की गारंटी",

        learnMore:
            "और जानकारी",

        projectsCompleted:
            "पूरे किए गए कार्य",

        heavyMachines:
            "भारी मशीनें",

        happyClients:
            "संतुष्ट ग्राहक",

        yearsExperience:
            "वर्षों का अनुभव",

        ourMachinery:
            "हमारी मशीनरी",

        heavyEquipment:
            "भारी मशीनरी",

        jcbExcavator:
            "JCB खुदाई मशीन",

        jcbExcavatorDesc:
            "खुदाई, निर्माण और अन्य निर्माण कार्यों के लिए उपयुक्त।",

        tractor:
            "ट्रैक्टर",

        tractorDesc:
            "परिवहन और कृषि संबंधी कार्यों के लिए उपयोगी सेवा।",

        dumper:
            "डंपर",

        dumperDesc:
            "निर्माण सामग्री की भारी ढुलाई के लिए उपयुक्त।",

        ourWork:
            "हमारे कार्य",

        projectGallery:
            "कार्य तस्वीरें",

        testimonials:
            "ग्राहकों की प्रतिक्रियाएं",

        whatClientsSay:
            "हमारे ग्राहक क्या कहते हैं",

        testimonial1:
            "उत्खनन का बहुत अच्छा काम किया गया। हमारी परियोजना को टीम ने समय पर और अच्छी गुणवत्ता के साथ पूरा किया।",

        testimonial2:
            "अनुभवी ऑपरेटर और अच्छी तरह से रखरखाव की गई JCB मशीनें। सेवा की अत्यधिक अनुशंसा की जाती है।",

        testimonial3:
            "किफायती दरें और पूरे काम के दौरान बेहतरीन सहयोग मिला।",

        contactUs:
            "संपर्क करें",

        getInTouch:
            "हमसे संपर्क करें",

        address:
            "शेवगांव, अहमदनगर, महाराष्ट्र",

        yourName:
            "आपका नाम",

        yourEmail:
            "आपका ई-मेल",

        phoneNumber:
            "मोबाइल नंबर",

        yourMessage:
            "आपका संदेश",

        sendMessage:
            "संदेश भेजें",

        footerDescription:
            "विश्वसनीय अर्थमूविंग और निर्माण सेवाएं",

        allRightsReserved:
            "सर्वाधिकार सुरक्षित।"

    }

};


/* ==========================================
   LANGUAGE SELECTOR
========================================== */

const languageBtn =
    document.getElementById("languageBtn");

const languageMenu =
    document.getElementById("languageMenu");

const currentLanguage =
    document.getElementById("currentLanguage");


/* ==========================================
   OPEN / CLOSE LANGUAGE MENU
========================================== */

if (languageBtn && languageMenu) {

    languageBtn.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            languageMenu.classList.toggle("active");

        }
    );

}


/* ==========================================
   CHANGE LANGUAGE
========================================== */

function changeLanguage(language) {

    const selectedTranslation =
        translations[language];

    if (!selectedTranslation) {
        return;
    }


    /* ======================================
       TRANSLATE ALL TEXT
    ====================================== */

    document
        .querySelectorAll("[data-translate]")
        .forEach(element => {

            const key =
                element.getAttribute("data-translate");

            if (
                selectedTranslation[key] !== undefined
            ) {

                element.textContent =
                    selectedTranslation[key];

            }

        });


    /* ======================================
       TRANSLATE FORM PLACEHOLDERS
    ====================================== */

    document
        .querySelectorAll("[data-placeholder]")
        .forEach(element => {

            const key =
                element.getAttribute("data-placeholder");

            if (
                selectedTranslation[key] !== undefined
            ) {

                element.placeholder =
                    selectedTranslation[key];

            }

        });


    /* ======================================
       CHANGE CURRENT LANGUAGE
    ====================================== */

    if (language === "en") {

        currentLanguage.textContent =
            "English";

    }

    else if (language === "mr") {

        currentLanguage.textContent =
            "मराठी";

    }

    else if (language === "hi") {

        currentLanguage.textContent =
            "हिंदी";

    }


    /* ======================================
       SAVE LANGUAGE
    ====================================== */

    localStorage.setItem(
        "selectedLanguage",
        language
    );

}


/* ==========================================
   LANGUAGE BUTTONS
========================================== */

const languageButtons =
    document.querySelectorAll(
        ".language-menu button"
    );


languageButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            const selectedLanguage =
                this.getAttribute("data-lang");

            changeLanguage(
                selectedLanguage
            );

            languageMenu.classList.remove(
                "active"
            );

        }
    );

});


/* ==========================================
   CLOSE LANGUAGE MENU
========================================== */

document.addEventListener(
    "click",
    function (event) {

        if (
            !event.target.closest(
                ".language-selector"
            )
        ) {

            if (languageMenu) {

                languageMenu.classList.remove(
                    "active"
                );

            }

        }

    }
);


/* ==========================================
   LOAD SAVED LANGUAGE
========================================== */

const savedLanguage =
    localStorage.getItem(
        "selectedLanguage"
    );


if (
    savedLanguage &&
    translations[savedLanguage]
) {

    changeLanguage(
        savedLanguage
    );

}

else {

    changeLanguage("en");

}