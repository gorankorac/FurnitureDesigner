/* ==========================================================================
   FORMA — main script
   ========================================================================== */

(function () {
  "use strict";

  // The inline fallback in <head> un-hides content if this script never runs.
  if (window.__formaFallback) {
    clearTimeout(window.__formaFallback);
  }

  var body = document.body;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------------------------------------------------- Footer year */

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------------------------------------------------- Hero load sequence */

  function markLoaded() {
    requestAnimationFrame(function () {
      body.classList.add("is-loaded");
    });
  }

  var heroImg = document.querySelector(".hero__media img");

  if (reducedMotion.matches || !heroImg) {
    markLoaded();
  } else {
    // Start once the hero image is ready, but never wait longer than 1.2s.
    var ready = heroImg.decode ? heroImg.decode().catch(function () {}) : Promise.resolve();
    var timeout = new Promise(function (resolve) { setTimeout(resolve, 1200); });
    Promise.race([ready, timeout]).then(markLoaded);
  }

  /* ---------------------------------------------------- Mobile menu */

  var toggle = document.querySelector("[data-menu-toggle]");
  var menu = document.querySelector("[data-menu]");
  var menuLabel = document.querySelector("[data-menu-label]");
  var menuOpen = false;
  var hideTimer = null;

  function openMenu() {
    if (menuOpen) return;
    menuOpen = true;
    clearTimeout(hideTimer);
    menu.hidden = false;
    void menu.offsetWidth; // commit display before animating
    menu.classList.add("is-open");
    body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    menuLabel.textContent = "Zatvori meni";

    var firstLink = menu.querySelector("a");
    if (firstLink) firstLink.focus({ preventScroll: true });
  }

  function closeMenu(returnFocus) {
    if (!menuOpen) return;
    menuOpen = false;
    menu.classList.remove("is-open");
    body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    menuLabel.textContent = "Otvori meni";

    hideTimer = setTimeout(function () {
      if (!menuOpen) menu.hidden = true;
    }, reducedMotion.matches ? 0 : 700);

    if (returnFocus) toggle.focus({ preventScroll: true });
  }

  if (toggle && menu && menuLabel) {
    toggle.addEventListener("click", function () {
      if (menuOpen) {
        closeMenu(false);
      } else {
        openMenu();
      }
    });

    // Close before the browser follows the anchor, so scrolling is unlocked.
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (!menuOpen) return;

      if (event.key === "Escape") {
        closeMenu(true);
        return;
      }

      // Keep keyboard focus inside the menu (toggle + links) while open.
      if (event.key === "Tab") {
        var focusables = [toggle].concat(Array.prototype.slice.call(menu.querySelectorAll("a")));
        var first = focusables[0];
        var last = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    // The overlay only exists below the tablet breakpoint.
    window.matchMedia("(min-width: 768px)").addEventListener("change", function (mq) {
      if (mq.matches) closeMenu(false);
    });
  }

  /* ---------------------------------------------------- Sticky / hide-on-scroll header */

  var header = document.querySelector("[data-header]");
  var lastY = window.scrollY;
  var ticking = false;
  var DELTA = 6;

  function updateHeader() {
    var y = Math.max(window.scrollY, 0);
    var hideAfter = header.offsetHeight * 2;

    header.classList.toggle("is-scrolled", y > 10);

    if (!menuOpen && Math.abs(y - lastY) > DELTA) {
      var scrollingDown = y > lastY;
      header.classList.toggle("is-hidden", scrollingDown && y > hideAfter);
      lastY = y;
    }

    ticking = false;
  }

  if (header) {
    updateHeader();
    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateHeader);
      }
    }, { passive: true });

    // Reveal the header when keyboard focus lands inside it.
    header.addEventListener("focusin", function () {
      header.classList.remove("is-hidden");
    });
  }

  /* ---------------------------------------------------- Active nav link */

  var navLinks = document.querySelectorAll(".nav__link");

  if ("IntersectionObserver" in window && navLinks.length) {
    var linkFor = {};
    navLinks.forEach(function (link) {
      linkFor[link.getAttribute("href").slice(1)] = link;
    });

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = linkFor[entry.target.id];
        if (link) link.classList.toggle("is-active", entry.isIntersecting);
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    Object.keys(linkFor).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });
  }

  /* ---------------------------------------------------- Scroll reveal */

  var revealEls = document.querySelectorAll("[data-reveal]");

  function revealAll() {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    revealAll();
  } else {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  // If the user switches to reduced motion mid-visit, show everything at once.
  reducedMotion.addEventListener("change", function (mq) {
    if (mq.matches) {
      revealAll();
      body.classList.add("is-loaded");
    }
  });

})();
