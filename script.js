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
})();
