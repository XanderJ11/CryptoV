document.addEventListener("DOMContentLoaded", () => {
  // MENU TOGGLE
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // SCROLL FADE-IN OBSERVER
  const faders = document.querySelectorAll(".section p, .section ul, .section ol");
  const options = {
    threshold: 0.1
  };

  const fadeInOnScroll = new IntersectionObserver((entries, fadeInOnScroll) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeIn 1.5s forwards";
        fadeInOnScroll.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach(el => {
    fadeInOnScroll.observe(el);
  });

  // Hero animations on load
  const heroTitle = document.querySelector(".hero h1");
  const heroText = document.querySelector(".hero p");
  const heroButton = document.querySelector(".cta-button");

  window.addEventListener("load", () => {
    heroTitle.style.transform = "translateY(0)";
    heroTitle.style.opacity = "1";
    heroText.style.opacity = "1";
    heroButton.style.opacity = "1";
    heroButton.style.transform = "translateY(0)";
  });
});
