const hamburger = document.getElementById("hamburger");
const navVertical = document.getElementById("nav-vertical");

hamburger.addEventListener("click", () => {
  navVertical.classList.toggle("show"); // Affiche ou cache le menu vertical
});

// Fermer le menu si un lien est cliqué
const navLinks = document.querySelectorAll("#nav-vertical ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navVertical.classList.remove("show");
  });
});

// Afficher/Masquer le bouton en fonction du défilement
window.addEventListener("scroll", () => {
  const scrollTopButton = document.getElementById("scroll-top");
  if (window.scrollY > 200) {
    scrollTopButton.classList.add("show");
  } else {
    scrollTopButton.classList.remove("show");
  }
});

// Fonction pour remonter en haut
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".cta-button");
  const reservationSection = document.getElementById("reservation");

  console.log("Boutons détectés :", buttons);
  console.log("Section réservation détectée :", reservationSection);

  if (!reservationSection) {
    console.error("La section de réservation est introuvable !");
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Tentative de redirection vers la section réservation...");
      reservationSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
});
