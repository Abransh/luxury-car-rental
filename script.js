
const phone = "393282793725";

// WhatsApp Logic
function wa(text) {
  return "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);
}

document.getElementById("waBtn").href = wa("Hello! I want to rent the Mustang Mach-E GT. Dates: ____");

// Language Logic
const btnEN = document.getElementById("btnEN");
const btnIT = document.getElementById("btnIT");

function setLang(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
  btnEN.classList.toggle("active", lang === "en");
  btnIT.classList.toggle("active", lang === "it");
}

btnEN.onclick = () => setLang("en");
btnIT.onclick = () => setLang("it");

// Navbar Scroll Effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Animations with Motion One
const { animate, stagger, inView } = Motion;

// Hero Animation
animate(".hero-visual", { opacity: [0, 1], y: [50, 0] }, { duration: 1 });
animate(".hero-content > *", 
  { opacity: [0, 1], y: [20, 0] }, 
  { delay: stagger(0.1), duration: 0.8 }
);

// Scroll Animations
inView(".grid", ({ target }) => {
  animate(
    target.querySelectorAll(".card"),
    { opacity: [0, 1], y: [30, 0] },
    { delay: stagger(0.1), duration: 0.6, easing: "ease-out" }
  );
});
