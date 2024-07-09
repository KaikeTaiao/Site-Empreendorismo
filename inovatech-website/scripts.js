// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll(".nav-menu ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: "smooth"
            });
            // Update active link
            navLinks.forEach(navLink => navLink.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Animation on scroll
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Change header text color based on section in view
    const sectionsArray = Array.from(sections);
    window.addEventListener("scroll", function() {
        let currentSection = sectionsArray.find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
        });

        if (currentSection) {
            const sectionId = currentSection.id;
            navLinks.forEach(link => {
                if (link.getAttribute("data-section") === sectionId) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        }
    });
});
