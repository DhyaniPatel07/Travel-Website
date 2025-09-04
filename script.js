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
function searchDestination() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  let result = "";

  if (query.includes("beach")) {
    result = "🏖️ Try Goa or Maldives!";
  } else if (query.includes("temple")) {
    result = "⛩️ Try Kedarnath or Angkor Wat!";
  } else if (query.includes("india")) {
    result = "🇮🇳 Explore India!";
  } else if (query.includes("japan")) {
    result = "🗾 Explore Japan!";
  } else {
    result = "⚠️ No match found. Try searching 'beach', 'temple', 'India', or 'Japan'.";
  }

  document.getElementById("searchResult").innerText = result;
}

// List of destinations
const destinations = {
  "goa": { name: "Goa Beach", img: "images/goa.jpg", icon: "🏖️" },
  "maldives": { name: "Maldives", img: "images/maldives.jpg", icon: "🏝️" },
  "kedarnath": { name: "Kedarnath Temple", img: "images/kedarnath.jpg", icon: "⛩️" },
  "angkor wat": { name: "Angkor Wat", img: "images/angkorwat.jpg", icon: "🏯" },
  "india": { name: "India", img: "images/india.jpg", icon: "🇮🇳" },
  "japan": { name: "Japan", img: "images/japan.jpg", icon: "🗾" }
};

// Show suggestions as user types
function showSuggestions() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const suggestionsDiv = document.getElementById("suggestions");
  suggestionsDiv.innerHTML = "";

  if (query.length === 0) return; // no input → no suggestions

  Object.keys(destinations).forEach(key => {
    if (key.startsWith(query)) {
      const suggestion = document.createElement("div");
      suggestion.classList.add("suggestion-item");
      suggestion.textContent = destinations[key].name;
      suggestion.onclick = () => {
        document.getElementById("searchBar").value = key;
        suggestionsDiv.innerHTML = "";
        searchDestination();
      };
      suggestionsDiv.appendChild(suggestion);
    }
  });
}

// Show result with image
function searchDestination() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const resultDiv = document.getElementById("searchResult");

  if (destinations[query]) {
    const dest = destinations[query];
    resultDiv.innerHTML = `<h3>${dest.icon} ${dest.name}</h3><img src="${dest.img}" alt="${dest.name}" width="250">`;
  } else {
    resultDiv.innerHTML = `<p>⚠️ No match found. Try: Goa, Maldives, Kedarnath, Angkor Wat, India, Japan.</p>`;
  }
}

