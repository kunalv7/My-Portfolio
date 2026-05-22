const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
    if (aboutTabs) {
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => { 
        e.preventDefault();

        aboutTabs.forEach((a) => {
            a.classList.remove("active");
        });

        tab.classList.add("active");

        aboutContent.forEach((c) => {
            c.classList.remove("active");
        });

        const activeTab = tab.dataset.section;

        document.getElementById(activeTab).classList.add("active");
        
        if (activeTab === "experience") {

            const experiences = document.querySelector(".experience-list");

            const experienceList = [
                {
                    id: 1,
                    date: "2023 - 2024",   
                    position: "Frontend Developer",
                    company: "Mindstay Technology",
                    details: "Build responsive and optimized UIs using React.js and Tailwind CSS. Collaborated with backend teams to integrate APIs and improve user experience.",
                },
                {
                    id: 2,
                    date: "2022 - 2023",
                    position: "MERN Stack",
                    company: "Mindstay Technology",
                    details: "Build responsive and optimized UIs using React.js and Tailwind CSS. Collaborated with backend teams to integrate APIs and improve user experience.",
                },
                {
                    id: 3,
                    date: "2021 - 2022",
                    position: "MERN Stack",
                    company: "Mindstay Technology",
                    details: "Build responsive and optimized UIs using React.js and Tailwind CSS. Collaborated with backend teams to integrate APIs and improve user experience.",
                }
            ];

            const experienceContent = experienceList.map((ele) => {
                return `
                  <div class="experience-box" key=${ele?.id}>
                        <h4>${ele.date}</h4>
                        <h3>${ele.position}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele.company}</p>
                        </div>
                        <p>${ele.details}</p>
                  </div>  
                `;
            }).join("");

            if (experiences) {
                experiences.innerHTML = experienceContent;
            }
        } else if (activeTab === "education"){
            const education = document.querySelector('.education-list');

            const educationList = [{
                id : 1,
                date: "2020 - 2023",
                degree: "Bachelor of Computer Application (BCA)",
                institution: "CS University, Dehradun",
                details: "Studies core subject like Data structure, Web development, and  Operating system. Built multiple academic project uisng JavaScript and MERN stack."
            }];

            const educationContent = educationList.map((ele) => {
                return `
                 <div class="experience-box" key=${ele?.id}>
                        <h4>${ele.date}</h4>
                        <h3>${ele.degree}</h3>
                        <div class="company-name"> 
                            <span></span>
                            <p>${ele.institution}</p>
                        </div>
                        <p>${ele.details}</p>
                  </div>  
                `;
            }).join("");

            if (education) {
                education.innerHTML = educationContent;
            } 

        } else if (activeTab === "skills"){
            const skills = document.querySelector('.skill-list');

            const skillList = [
            {
                id : 1,
                name: "HTML - Hyper Text Markup language",
                icon: "assets/skills/html.png",
            },
            
            {
                id : 2,
                name: "CSS - Cascading Style Sheet",
                icon: "assets/skills/css.png"
            },
            {
                id : 2,
                name: "CSS - Cascading Style Sheet",
                icon: "assets/skills/css.png"
            },
            {
                id : 2,
                name: "CSS - Cascading Style Sheet",
                icon: "assets/skills/css.png"
            }
        
        ];

            const skillContent = skillList.map((ele) => {
                return `
                 <div class="skill-box" key=${ele?.id}>
                    <img src=${ele?.icon}
                    alt=${ele.name}
                    title=${ele.name}
                    loading="lazy"/>
                  </div>  
                `;
            }).join("");

            if (skills) {
                skills.innerHTML = skillContent;
            }
        } else if (activeTab === "about-me"){

            const myInfo = document.querySelector(".my-info");

            const infoList = [
                {
                    id: 1,
                    key: "Name",
                    value: "Kunal Vishwakarma",
                },
                {
                    id: 2,
                    key: "Email",
                    value: "kunalvishwakarma3110g@gmail.com",
                },
                {
                    id: 3,
                    key: "Experience",
                    value: "2 Years",
                },
            ];

            const infoContent = infoList
                .map((ele) => {
                    return `
                    <div class="info-box">
                        <span>${ele.key} :</span>
                        <span>${ele.value}</span>
                    </div>
                `;
                })
                .join("");

            if (myInfo) {
                myInfo.innerHTML = infoContent;
            }

        }
    });
});


// 3:19:36 https://www.youtube.com/watch?v=9EM0XLN7cwc&t=11691s