(function () {
  if (typeof gsap === "undefined") return;

  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  var isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ---------- helpers ---------- */

  function splitLines(container) {
    var lines = [];
    container.querySelectorAll(":scope > *").forEach(function (el) {
      el.style.overflow = "hidden";
      el.style.display = "block";
      var inner = document.createElement("span");
      inner.style.display = "inline-block";
      inner.style.willChange = "transform";
      inner.innerHTML = el.innerHTML;
      el.innerHTML = "";
      el.appendChild(inner);
      lines.push(inner);
    });
    return lines;
  }

  function magnetize(el, strength) {
    strength = strength || 0.35;
    var xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    var yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    el.addEventListener("mousemove", function (e) {
      var rect = el.getBoundingClientRect();
      var relX = e.clientX - (rect.left + rect.width / 2);
      var relY = e.clientY - (rect.top + rect.height / 2);
      xTo(relX * strength);
      yTo(relY * strength);
    });

    el.addEventListener("mouseleave", function () {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    });
  }

  /* ---------- 1. hero entrance ---------- */

  function heroIntro() {
    var tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    var navTitle = document.querySelector("nav h1");
    var navLinks = gsap.utils.toArray("nav .links a");
    if (navTitle) tl.from(navTitle, { y: -16, opacity: 0, duration: 0.6 }, 0);
    if (navLinks.length)
      tl.from(
        navLinks,
        { y: -16, opacity: 0, duration: 0.6, stagger: 0.06 },
        0.05,
      );

    var heading = document.querySelector(".leftheadings");
    if (heading) {
      var lines = splitLines(heading);
      tl.from(lines, { yPercent: 110, duration: 1, stagger: 0.12 }, 0.2);
    }

    var meta = document.querySelector(".rightheadings");
    if (meta) {
      var divider = meta.querySelector(".h-px");
      tl.from(meta, { y: 16, opacity: 0, duration: 0.7 }, 0.6);
      if (divider)
        tl.from(
          divider,
          { scaleX: 0, transformOrigin: "left center", duration: 0.7 },
          0.6,
        );
    }

    return tl;
  }

  /* ---------- 2. scroll-triggered reveals ---------- */

  function scrollReveals() {
    var els = gsap.utils.toArray("[data-reveal]");
    if (!els.length || typeof ScrollTrigger === "undefined") return;

    if (reduceMotion) {
      gsap.set(els, { y: 0, opacity: 1 });
      return;
    }

    gsap.set(els, { y: 40, opacity: 0 });
    els.forEach(function (el) {
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: function () {
          gsap.to(el, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" });
        },
      });
    });
  }

  function scrollRevealBlocks() {
    var containers = gsap.utils.toArray("[data-reveal-blocks]");
    if (!containers.length || typeof ScrollTrigger === "undefined") return;

    containers.forEach(function (container) {
      var blocks = container.querySelectorAll(":scope > div");
      if (!blocks.length) return;

      if (reduceMotion) {
        gsap.set(blocks, { scaleY: 1 });
        return;
      }

      gsap.set(blocks, { scaleY: 0, transformOrigin: "top center" });
      ScrollTrigger.create({
        trigger: container,
        start: "top 85%",
        once: true,
        onEnter: function () {
          gsap.to(blocks, {
            scaleY: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
          });
        },
      });
    });
  }

  /* ---------- 3. image wipe reveals ---------- */

  function imageWipes() {
    var els = gsap.utils.toArray("[data-wipe]");
    if (!els.length || typeof ScrollTrigger === "undefined") return;

    if (reduceMotion) {
      gsap.set(els, { clipPath: "none", scale: 1 });
      return;
    }

    els.forEach(function (el) {
      gsap.set(el, {
        clipPath: "inset(100% 0 0 0)",
        scale: 1.12,
        transformOrigin: "center",
      });
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: function () {
          gsap.to(el, {
            clipPath: "inset(0% 0 0 0)",
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
          });
        },
      });
    });
  }

  /* ---------- 4. ambient decorative motion ---------- */

  function ambientMotion() {
    if (reduceMotion) return;

    var floaters = gsap.utils.toArray("[data-float]");
    floaters.forEach(function (el, i) {
      gsap.to(el, {
        y: gsap.utils.random(-16, 16),
        rotation: gsap.utils.random(-5, 5),
        duration: gsap.utils.random(5, 8),
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: i * 0.4,
      });
    });

    if (typeof ScrollTrigger === "undefined") return;
    gsap.utils.toArray("[data-parallax]").forEach(function (el) {
      var speed = parseFloat(el.getAttribute("data-parallax")) || 0.2;
      gsap.to(el, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }

  /* ---------- 5. magnetic micro-interactions ---------- */

  function magneticElements() {
    if (isCoarsePointer || reduceMotion) return;
    gsap.utils.toArray("[data-magnetic]").forEach(function (el) {
      magnetize(el);
    });
  }

  /* ---------- 6. clock crossfade ---------- */
  /* handled inline in each page's clock script via setTextWithFade(), which
       checks for gsap itself — nothing to wire up here. */

  /* ---------- 8. cross-page transition overlay ---------- */

  function pageTransitions() {
    var overlay = document.querySelector(".page-transition");
    if (!overlay || reduceMotion) return;

    document.querySelectorAll('a[href$=".html"]').forEach(function (link) {
      var url;
      try {
        url = new URL(link.getAttribute("href"), window.location.href);
      } catch (e) {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (link.target === "_blank") return;
      if (url.pathname === window.location.pathname) return;

      var navigated = false;
      function go() {
        if (navigated) return;
        navigated = true;
        window.location.href = link.getAttribute("href");
      }

      link.addEventListener("click", function (e) {
        e.preventDefault();
        gsap.set(overlay, { transformOrigin: "bottom" });
        gsap.to(overlay, {
          scaleY: 1,
          duration: 0.55,
          ease: "power4.inOut",
          onComplete: go,
        });
        setTimeout(go, 900);
      });
    });
  }

  /* ---------- 9. marquee ---------- */

  function marquee() {
    var wrapper = document.querySelector(".marquee");
    var track = document.querySelector(".marquee-track");
    if (!wrapper || !track) return;

    if (reduceMotion) {
      gsap.set(track, { xPercent: 0 });
      return;
    }

    var tween = gsap.to(track, {
      xPercent: -50,
      duration: 28,
      ease: "none",
      repeat: -1,
    });

    wrapper.addEventListener("mouseenter", function () {
      gsap.to(tween, { timeScale: 0.2, duration: 0.4 });
    });
    wrapper.addEventListener("mouseleave", function () {
      gsap.to(tween, { timeScale: 1, duration: 0.4 });
    });
  }

  /* ---------- boot ---------- */

  heroIntro();
  scrollReveals();
  scrollRevealBlocks();
  imageWipes();
  ambientMotion();
  magneticElements();
  pageTransitions();
  marquee();

  if (typeof ScrollTrigger !== "undefined") {
    window.addEventListener("load", function () {
      ScrollTrigger.refresh();
    });
  }
})();
