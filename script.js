(function () {
  document.documentElement.classList.add("js");

  var navToggle = document.querySelector(".nav-toggle");
  var navList = document.getElementById("primary-menu");

  if (navToggle && navList) {
    navToggle.hidden = false;

    navToggle.addEventListener("click", function () {
      var isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      navList.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("nav-open", !isOpen);
    });

    navList.addEventListener("click", function (event) {
      if (event.target && event.target.tagName === "A") {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation");
        navList.classList.remove("is-open");
        document.body.classList.remove("nav-open");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navList.classList.contains("is-open")) {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation");
        navList.classList.remove("is-open");
        document.body.classList.remove("nav-open");
        navToggle.focus();
      }
    });
  }

  var yearTargets = document.querySelectorAll("[data-current-year]");
  if (yearTargets.length) {
    var currentYear = String(new Date().getFullYear());
    yearTargets.forEach(function (target) {
      target.textContent = currentYear;
    });
  }

  var hero = document.querySelector(".hero");
  var heroVisual = document.querySelector(".hero__visual");
  var reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var desktopQuery = window.matchMedia("(min-width: 901px)");
  var parallaxFrame = null;
  var parallaxX = 0;
  var parallaxY = 0;

  function setHeroParallax(x, y) {
    if (!heroVisual) {
      return;
    }

    heroVisual.style.setProperty("--parallax-x", x + "px");
    heroVisual.style.setProperty("--parallax-y", y + "px");
  }

  if (hero && heroVisual) {
    hero.addEventListener("pointermove", function (event) {
      if (reduceMotionQuery.matches || !desktopQuery.matches) {
        return;
      }

      var rect = hero.getBoundingClientRect();
      var relativeX = (event.clientX - rect.left) / rect.width - 0.5;
      var relativeY = (event.clientY - rect.top) / rect.height - 0.5;

      parallaxX = relativeX * 14;
      parallaxY = relativeY * 10;

      if (parallaxFrame) {
        return;
      }

      parallaxFrame = window.requestAnimationFrame(function () {
        setHeroParallax(parallaxX.toFixed(2), parallaxY.toFixed(2));
        parallaxFrame = null;
      });
    });

    hero.addEventListener("pointerleave", function () {
      setHeroParallax(0, 0);
    });

    reduceMotionQuery.addEventListener("change", function () {
      setHeroParallax(0, 0);
    });
  }
})();
