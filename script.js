// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

    menuBtn.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

    lucide.createIcons();

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.innerHTML = '<i data-lucide="menu"></i>';

        lucide.createIcons();

    });

});


// CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// SCROLL REVEAL ANIMATIONS

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});


document.querySelectorAll(
    ".project, .service, .about-right, .process-card, .section-heading, .contact-section"
).forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// WHATSAPP CONTACT

const whatsappBtn = document.getElementById("whatsappBtn");

// REPLACE WITH YOUR NUMBER.
// Include country code without + or spaces.

const phoneNumber = "254791433904";

const message = encodeURIComponent(
    "Hello JABARI! I'm interested in discussing a project with you."
);

whatsappBtn.href = `https://wa.me/${254791433904}?text=${message}`;

whatsappBtn.target = "_blank";

whatsappBtn.rel = "noopener noreferrer";


// INITIALISE ICONS

lucide.createIcons();