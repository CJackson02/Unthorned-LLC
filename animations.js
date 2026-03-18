/* ================================
   1. Scroll Reveal Animation
================================ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


/* ================================
   2. Parallax Hero Image
================================ */
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-image");
  if (hero) {
    hero.style.transform = `translateY(${window.scrollY * 0.2}px)`;
  }
});


/* ================================
   3. Page Load Fade-In
================================ */
window.onload = () => {
  document.body.classList.add("loaded");
};


/* ================================
   4. Floating Button Click
================================ */
const floatBtn = document.getElementById("float-book");
if (floatBtn) {
  floatBtn.onclick = () => {
    window.location.href = "/contact.html";
  };
}


/* ================================
   5. Testimonial Auto-Slider
================================ */
const testimonials = [
  "“Jess helped me find clarity and confidence in my goals.”",
  "“Her coaching style is supportive, intuitive, and empowering.”",
  "“Unthorned gave me a new perspective on my mindset and career.”"
];

let tIndex = 0;

function rotateTestimonials() {
  const txt = document.getElementById("testimonial-text");
  if (!txt) return;
  tIndex = (tIndex + 1) % testimonials.length;
  txt.style.opacity = 0;

  setTimeout(() => {
    txt.textContent = testimonials[tIndex];
    txt.style.opacity = 1;
  }, 500);
}

setInterval(rotateTestimonials, 4000);


/* ================================
   6. Affirmation Generator
================================ */
const affirmations = [
  "I am worthy of the life I desire.",
  "I release what no longer serves me.",
  "I trust myself to make aligned decisions.",
  "I am evolving into the best version of me.",
  "Peace flows through me effortlessly."
];

const affirmBtn = document.getElementById("affirm-btn");
if (affirmBtn) {
  affirmBtn.onclick = () => {
    const pick = affirmations[Math.floor(Math.random() * affirmations.length)];
    document.getElementById("affirmation-text").textContent = pick;
  };
}


/* ================================
   7. Smooth Anchor Scrolling
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const targetID = this.getAttribute("href");
    if (targetID.length > 1) {
      e.preventDefault();
      document.querySelector(targetID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* ================================
   8. Soft Hover Animations
================================ */
document.querySelectorAll(".hover-soft").forEach(el => {
  el.addEventListener("mouseover", () => el.classList.add("hover-active"));
  el.addEventListener("mouseout", () => el.classList.remove("hover-active"));
});


/* ================================
   9. Staggered Reveal
================================ */
const staggerTargets = document.querySelectorAll(".stagger");
const staggerObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const children = entry.target.querySelectorAll("*");
      children.forEach((child, i) => {
        child.style.transitionDelay = `${i * 0.1}s`;
        child.classList.add("stagger-show");
      });
    }
  });
});

staggerTargets.forEach(el => staggerObs.observe(el));
