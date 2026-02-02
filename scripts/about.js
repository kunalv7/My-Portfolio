const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content");

// document.addEventListener("DOMContentLoaded", () => {
//     if (aboutTabs){
//         aboutTabs[0].click();
//     }
// });

aboutTabs.forEach((tab) =>{
    tab.removeEventListener("click", (e) => {
        e.preventDefault();

        aboutTabs.forEach((a) => {
            a.classList.remove('active');

        });

        tab.classList.add("active");

        aboutContent.forEach((c) => {
            c.classList.remove("active");
        });

        document.getElementById(tab.dataset.section) .classList.add("active");

        const activeTab = tab.dataset.section;

        document.getElementById(activeTab).classList.add("active");

        if (activeTab === "experience"){
            const experiences = document.querySelector(".experience-list");

            const experienceList = [
                {
                    id: 1,
                    data: "2023 - 2024",
                    position: "Frontend Developer",
                    company: "Mindstay Technology",
                    details: "Build responsive and optimized UIs using React.js and Tailwind CSS. Collaborated with backend teams to integrate APIs and improve user experience.",
                },
                {
                    id: 2,
                    data: "2022 - 2023",
                    position: "MERN Stack",
                    company: "Mindstay Technology",
                    details: "Build responsive and optimized UIs using React.js and Tailwind CSS. Collaborated with backend teams to integrate APIs and improve user experience.",
                },
                {
                    id: 3,
                    data: "2021 - 2022",
                    position: "MERN Stack",
                    company: "Mindstay Technology",
                    details: "Build responsive and optimized UIs using React.js and Tailwind CSS. Collaborated with backend teams to integrate APIs and improve user experience.",
                }
            ];

            const experienceContent = experienceList.map((ele) =>{
                return `
                
                `
            })
        }
    });
});