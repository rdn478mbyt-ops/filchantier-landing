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
    var openNav = function () {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Fermer le menu");
      mobileNav.hidden = false;
    };
    toggle.addEventListener("click", function () {
      if (toggle.getAttribute("aria-expanded") === "true") closeNav();
      else openNav();
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        closeNav();
        toggle.focus();
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) closeNav();
    });
  }

  // Surlignage du lien de navigation actif au défilement
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.site-nav a[href^="#"]')
  );
  if (navLinks.length && "IntersectionObserver" in window) {
    var byId = {};
    var sections = [];
    navLinks.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      var section = id ? document.getElementById(id) : null;
      if (section) {
        byId[id] = link;
        sections.push(section);
      }
    });
    var setActive = function (id) {
      navLinks.forEach(function (l) { l.classList.remove("is-active"); });
      if (byId[id]) byId[id].classList.add("is-active");
    };
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { observer.observe(s); });
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
        status.textContent = "V\u00e9rifie ton adresse email pour r\u00e9server ta place.";
        status.className = "form-status is-error";
        if (email) email.focus();
        return;
      }

      status.textContent = "Merci\u202f! Ta place est en cours de r\u00e9servation, on te recontacte tr\u00e8s vite.";
      status.className = "form-status is-success";
      // On laisse l'action mailto se déclencher normalement.
    });
  }
})();
