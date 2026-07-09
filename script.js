// 1. TYPING EFFECT
        const roles = ["Frontend Developer", "UI/UX Designer", "Data Analyst", "IT Consultant", "KPI Analyst", "Content Creator"];
        const textEl = document.getElementById("typingText");
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeRole() {
            const currentRole = roles[roleIndex];
            const displayedText = currentRole.substring(0, charIndex);

            textEl.textContent = displayedText;

            if (!isDeleting && charIndex < currentRole.length) {
                charIndex++;
                setTimeout(typeRole, 100);
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                setTimeout(typeRole, 50);
            } else {
                isDeleting = !isDeleting;
                if (!isDeleting) {
                    roleIndex = (roleIndex + 1) % roles.length;
                }
                setTimeout(typeRole, 1200); // Wait before start deleting/typing new word
            }
        }
        document.addEventListener('DOMContentLoaded', typeRole);

        // 2. MOBILE NAVIGATION MENU
        const menuIcon = document.getElementById("menu-icon");
        const navLinks = document.getElementById("nav-links");

        menuIcon.addEventListener("click", () => {
            navLinks.classList.toggle("show");
            // Change icon toggle
            if(navLinks.classList.contains("show")){
                menuIcon.classList.remove("fa-bars");
                menuIcon.classList.add("fa-xmark");
            } else {
                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll(".nav-links a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");
                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
            });
        });

        // 3. SCROLL ANIMATION (Intersection Observer)
        // Adds a premium fade-up effect as the user scrolls down
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Run once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach((elem) => {
            observer.observe(elem);
        });

        // 4. NAVBAR SCROLL EFFECT (Glassmorphism enhance on scroll)
        const header = document.querySelector('.header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(17, 24, 39, 0.95)';
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8)';
            } else {
                header.style.background = 'rgba(17, 24, 39, 0.8)';
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            }
        });