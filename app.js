// FilChantier — interactions minimales, sans dépendance.
(function () {
  "use strict";

  // Année dynamique dans le footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Menu mobile
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    var closeNav = function () {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Ouvrir le menu");
      mobileNav.hidden = true;
    };
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      if (open) {
        closeNav();
      } else {
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", "Fermer le menu");
        mobileNav.hidden = false;
      }
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) closeNav();
    });
  }

  // Formulaire liste d'attente : validation légère + feedback.
  // Le fallback natif (mailto) reste actif si JS échoue.
  var form = document.getElementById("waitlist-form");
  var status = document.getElementById("form-status");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      var email = form.querySelector("#email");
      var value = (email && email.value ? email.value : "").trim();
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

      if (!valid) {
        e.preventDefault();
        status.textContent = "Vérifie ton adresse email pour réserver ta place.";
        status.className = "form-status is-error";
        if (email) email.focus();
        return;
      }

      status.textContent = "Merci ! Ta place est en cours de réservation, on te recontacte très vite.";
      status.className = "form-status is-success";
      // On laisse l'action mailto/# se déclencher normalement.
    });
  }
})();
