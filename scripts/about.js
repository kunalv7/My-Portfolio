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
                    date: "2023 - 2024",   // ✅ fixed data → date
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
                  <div class="experience-box">
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
        }
    });
});
