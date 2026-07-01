const media = document.querySelector(".contact-media");

const contactList = [
    {
        id: 1,
        icon: "ph ph-phone-call",
        name: "Phone",
        value: "+91 8976114603",
        href: "tel:+918976114603"
    },
    {
        id: 2,
        icon: "ph ph-envelope",
        name: "E-Mail",
        value: "kunalviishwakarma3110@gmail.com",
        href: "mailto:kunalviishwakarma3110@gmail.com"
    },
    {
        id: 3,
        icon: "ph ph-map-pin-area",
        name: "Country",
        value: "India",
        href: "#"
    },
]

const contactContent = contactList.map((ele) =>{
    return `
        <div class="media" key=${ele?.id}>
            <span>
                <i class="${ele?.icon}"></i>
            </span>

            <div class="contact-value">
                <p>${ele?.name}</p>
                <a href="${ele?.href}">${ele?.value}</a>
            </div>
        </div>
    `;
}).join("");

if (media) media.innerHTML = contactContent;