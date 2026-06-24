const projectList = [
    {
        id: 1,
        number: "01",
        title: "Photography-Safe-Vault",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, qui ipsam! Illum doloremque eaque eos numquam iusto facere! Necessitatibus, odit.",
        techStack: ["MongoDB", "Express", "React", "Node"],
        image: "assets/projects/project1.webp",
        liveLink: "#",
        githubLink: "https://github.com/kunalv7/Photography-Safe-Vault",
    },
    {
        id: 2,
        number: "02",
        title: "FullStack Threads Clone",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, qui ipsam! Illum doloremque eaque eos numquam iusto facere! Necessitatibus, odit.",
        techStack: ["MongoDB", "Express", "React", "Node"],
        image: "assets/projects/project1.webp",
        liveLink: "#",
        githubLink: "#",
    },
]

const projects = document.querySelector(".projects");

let currentIndex = 0;

const renderproject = (index) => {
    const projectContent = projectList[index];

    const previousDisabled = currentIndex === 0;
    const nextDisabled = currentIndex === projectList.length - 1;

    projects.innerHTML =
    `
    <div class="projects">
        <div class="project-info">
            <h3>${projectContent?.number}</h3>
            <h4>${projectContent?.title}</h4>
            <p>${projectContent?.discription}</p>

            <div class="tech-stack">
                ${
                    projectContent?.techStack?.map((tech, i) => {
                        return `
                            <span>${tech}</span>
                        `;
                    }).join(",")
                }
            </div>

            <hr>

            <div class="links">
                <a href="${projectContent?.liveLink}">
                    <i class="ph ph-arrow-right"></i>
                </a>

                <a href="${projectContent?.githubLink}">
                    <i class="ph ph-github-logo"></i>
                </a>
            </div>
        </div>

        <div class="carousel">
            <img src="${projectContent?.image}" alt="${projectContent?.title}">

            <div class="arrows">
                <a href="#" id="previous" class="${previousDisabled ? "disabled-btn" : ""}">
                    <i class="ph ph-caret-left"></i>
                </a>

                <a href="#" id="next" class="${nextDisabled ? "disabled-btn" : ""}">
                    <i class="ph ph-caret-right"></i>
                </a>
            </div>
        </div>
    </div>
    `;

    document.getElementById("previous").addEventListener("click", (e) => {
        e.preventDefault();

        if (currentIndex > 0) {
            currentIndex--;
            renderproject(currentIndex);
        }
    });

    document.getElementById("next").addEventListener("click", (e) => {
        e.preventDefault();

        if (currentIndex < projectList.length - 1) {
            currentIndex++;
            renderproject(currentIndex);
        }
    });
};

renderproject(currentIndex);