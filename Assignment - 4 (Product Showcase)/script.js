document.addEventListener("DOMContentLoaded", function () {
  // ---------- Mobile nav toggle ----------
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    var setOpen = function (isOpen) {
      nav.classList.toggle("is-open", isOpen);
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    };

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll(".nav__link").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });
  }

  // ---------- Catalog category filter ----------
  var filterBar = document.getElementById("filter-bar");
  var cards = document.querySelectorAll("#showcase .product-card");
  var emptyState = document.getElementById("empty-state");

  if (filterBar && cards.length) {
    filterBar.addEventListener("click", function (event) {
      var chip = event.target.closest(".filter-chip");
      if (!chip) return;

      filterBar.querySelectorAll(".filter-chip").forEach(function (btn) {
        btn.classList.toggle("is-active", btn === chip);
      });

      var filter = chip.getAttribute("data-filter");
      var visibleCount = 0;

      cards.forEach(function (card) {
        var match = filter === "all" || card.getAttribute("data-category") === filter;
        card.hidden = !match;
        if (match) visibleCount += 1;
      });

      if (emptyState) emptyState.hidden = visibleCount !== 0;
    });
  }
});
