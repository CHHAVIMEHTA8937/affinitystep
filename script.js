
document.addEventListener("DOMContentLoaded", function () {

    // ================= MOBILE NAVBAR =================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const menuOpen = navLinks.classList.contains("active");

            menuToggle.innerHTML = menuOpen ? "✕" : "☰";

            menuToggle.setAttribute("aria-expanded", menuOpen);

        });

    }


    // ================= CLOSE MENU ON LINK CLICK =================

    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {

            if (navLinks) {
                navLinks.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.innerHTML = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            }

        });

    });


    // ================= SMOOTH SCROLL =================

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // ================= HERO ANIMATION =================

    const heroContent = document.querySelector(".hero-content");
    const heroVisual = document.querySelector(".hero-visual");

    setTimeout(function () {

        if (heroContent) {
            heroContent.classList.add("show");
        }

        if (heroVisual) {
            heroVisual.classList.add("show");
        }

    }, 150);


    // ================= SCROLL REVEAL =================

    const revealElements = document.querySelectorAll(
        ".intro-section, .challenge-card, .service-card, .roles-content, .role-item, .cta-section"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(function (element) {
        observer.observe(element);
    });


    // ================= CURRENT YEAR =================

    const yearElement = document.querySelector(".copyright");

    if (yearElement) {
        yearElement.innerHTML =
            "© " + new Date().getFullYear() +
            " Affinity Steps. All rights reserved.";
    }

});
