// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (name && email && message) {
        document.getElementById("formResponse").textContent =
          "✅ Thank you, " + name + "! Your message has been sent.";
        form.reset();
      } else {
        document.getElementById("formResponse").textContent =
          "❌ Please fill out all fields.";
      }
    });
  }
});

// Random Recommendation on Home Page
function showRandomRecommendation() {
  const recommendations = [
    "🏖️ Visit Goa for stunning beaches!",
    "🌴 Explore the Maldives for luxury and relaxation.",
    "⛩️ Visit Kedarnath Temple for spiritual peace.",
    "🕌 Explore Angkor Wat in Cambodia.",
    "🇮🇳 Discover India – culture, food, and heritage.",
    "🇯🇵 Travel to Japan – tradition meets technology."
  ];
  const random = recommendations[Math.floor(Math.random() * recommendations.length)];
  document.getElementById("randomResult").textContent = random;
}
