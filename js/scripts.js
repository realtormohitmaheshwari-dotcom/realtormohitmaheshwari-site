// =========================
// SMOOTH SCROLL
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// =========================
// STICKY NAV SHADOW
// =========================
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.background = "#000";
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
  } else {
    nav.style.background = "transparent";
    nav.style.boxShadow = "none";
  }
});

// =========================
// CONTACT FORM (UI ONLY)
// =========================
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
    form.reset();
  });
}
