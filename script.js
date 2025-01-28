document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navVertical = document.getElementById("nav-vertical");

  // Vérifier si les éléments existent avant d'ajouter des événements
  if (!hamburger || !navVertical) {
    console.error("Élément manquant : vérifiez les IDs du menu hamburger et du menu.");
    return;
  }

  // Toggle du menu
  hamburger.addEventListener("click", () => {
    console.log("Menu hamburger cliqué"); // Debug
    navVertical.classList.toggle("show");
  });

  // Fermer le menu si un lien est cliqué
  const navLinks = document.querySelectorAll("#nav-vertical ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      console.log("Lien cliqué, fermeture du menu"); // Debug
      navVertical.classList.remove("show");
    });
  });

  // Fermer le menu en cliquant ailleurs
  document.addEventListener("click", (event) => {
    if (!navVertical.contains(event.target) && !hamburger.contains(event.target)) {
      console.log("Clic en dehors, fermeture du menu"); // Debug
      navVertical.classList.remove("show");
    }
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
