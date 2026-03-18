// script.js — animations + quote generator

// Fade-in animation on scroll

document.addEventListener('DOMContentLoaded', () => {

  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -20px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });


  // Quote Generator

  const quotes = [
    "Growth begins when you decide you are worthy of it.",
    "Healing is not linear, but every step forward matters.",
    "You are allowed to evolve beyond the version of you that survived.",
    "Your peace is worth protecting.",
    "You are not too late. You are right on time.",
    "Every day is another chance to begin again.",
    "The woman you are becoming is powerful.",
    "Your story is not over.",
    "Strength grows in the moments you choose yourself.",
    "You deserve a life that feels good to wake up to.",
    "Your boundaries are an act of self-respect.",
    "Transformation begins with a single courageous step.",
    "You are capable of more than you realize.",
    "Your voice matters and your healing matters.",
    "Trust the process of becoming who you are meant to be.",
    "Peace begins when you stop abandoning yourself.",
    "You are worthy of love, respect, and joy.",
    "The future you want begins with the choices you make today.",
    "Your past prepared you; it does not define you.",
    "Courage is choosing growth even when it feels uncomfortable."
  ];

  const quoteButton = document.getElementById("affirm-btn");
  const quoteText = document.getElementById("affirmation-text");

  if (quoteButton && quoteText) {

    quoteButton.addEventListener("click", () => {

      const randomIndex = Math.floor(Math.random() * quotes.length);

      quoteText.style.opacity = 0;

      setTimeout(() => {
        quoteText.textContent = quotes[randomIndex];
        quoteText.style.opacity = 1;
      }, 200);

    });

  }

});