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
            const skills = document.querySelector('.skills-list');

            const skillsList = [
            {
                id : 1,
                name: "HTML - Hyper Text Markup language",
                icon: "assets/skills/html.png",
            },
            
            {
                id : 2,
                name: "CSS - Cascading Style Sheet",
                icon: "assets/skills/css.png"
            }
        
        ];

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
    });
});
