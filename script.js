const toggle = document.getElementById("menu-toggle");
if (toggle){
    toggle.addEventListener("change", () => {
        document.body.classList.toggle("no-scroll", toggle.checked);
    })
}

// HOME PAGE //
const words = [
    // "Youtuber",
    "Creator",
    // "Mentor",
    "Coder",
    // "Freelencer",
    "Developer",
    // "Trainer",
];

const typingText = document.getElementById('typing-span');

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () =>{
    const currentWord = words[wordIndex];

    if (!isDeleting){
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length){
        isDeleting = true;
        setTimeout(type, nextWordDelay)
        }
        else{
        setTimeout(type, typingDelay);
    }
    }else{
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if(charIndex === 0){
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }else{
            setTimeout(type, erasingDelay);
        }
    }
};

document.addEventListener('DOMContentLoaded', () =>{
    if (words?.length) 
        type();
});

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
    link.addEventListener('click',(e) => {
        e.preventDefault();

        link.classList.add("active");

        navlinks.forEach((l) => {
            if (l === link){
                l.classList.add("active");
            }else{
                l.classList.remove("active");
            }
        });

        const tabname = link.dataset.tab;

        tabs.forEach((tab) => {
            if (tab.id === tabname){
                tab.classList.add("active");
            }else{
                tab.classList.remove("active");
            }
        });

        //services
        if (tabname === "services"){
            const serviceList = [
            {
                id:1,
                icon:"ph-code",
                text:"Website Development",
                para:"I build responsive and modern websites using the latest technologies like HTML, CSS, JavaScript, React, and...",
            },
            {
                id:2,
                icon:"",
                text:"UX/UI Design",
                para:"Custom mobile apps for Android and iOS using React Native and Expo, designed to provide excellent UI/UX...",
            },
            {
                id:3,
                icon:"",
                text:"SEO Optimization",
                para:"I improve website visibility on search engines with optimized structure, keywords, and performance best...",
            },
            {
                id:4,
                icon:"",
                text:"Graphic Design",
                para:"Offering expert advice and solutions for tech projects, helping individuals and startups with project planning and...",
            },
            {
                id:5,
                icon:"",
                text:"Mentorship & Training",
                para:"Personal mentorship for beginners to advanced learners in web development, including live coding sessions and...",
            },
            {
                id:6,
                icon:"",
                text:"Photography",
                para:"End-to-end delivery of freelance projects – from planning to deployment – with quality assurance and post-...",
            },
        ];

        // const services = document.getElementsByClassName("service-list");

        // const innerContent = serviceList.map(() => {
        //     return `
        //     <div>Inner Box</div>
        //     `;  
        // });

        Array.from(services).forEach((ele) => {
            ele.innerHTML = innerContent;
        });
        }
    });
});