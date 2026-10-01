/* ==========================================================================
   Payton Hood Creative — site behavior
   ========================================================================== */

/* ---- Settings: edit these ---------------------------------------------- */
var PHC_SETTINGS = {
  email: "paytonhoodcreative@gmail.com",
  // Inquiry form delivery via FormSubmit (free, no account). The very first
  // submission sends an activation email to the address above. Click it once.
  formEndpoint: "https://formsubmit.co/ajax/paytonhoodcreative@gmail.com",
  // Basic analytics: create a free GoatCounter site (https://www.goatcounter.com)
  // and put its code here, e.g. "paytonhood". Leave "" to disable.
  goatcounter: ""
};

(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.remove("no-js");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var projects = window.PHC_PROJECTS || [];
  var byId = {};
  projects.forEach(function (p) { byId[p.id] = p; });
  var catLabel = {};
  (window.PHC_CATEGORIES || []).forEach(function (c) { catLabel[c.id] = c.label; });

  var ICON = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>'
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Image with graceful fallback (Drive can be slow or blocked). */
  function imgTag(p, width, extra) {
    return '<img src="' + esc(window.PHC_IMG(p, width)) + '" alt="' + esc(p.title + (p.subtitle ? ": " + p.subtitle : "")) +
      '" loading="lazy" decoding="async" referrerpolicy="no-referrer" data-fallback="' + esc(p.title) + '"' + (extra || "") + ">";
  }
  document.addEventListener("error", function (e) {
    var img = e.target;
    if (img.tagName !== "IMG" || !img.dataset.fallback || img.dataset.failed) return;
    img.dataset.failed = "1";
    img.style.visibility = "hidden";
    var fb = document.createElement("div");
    fb.className = "img-fallback";
    fb.setAttribute("aria-hidden", "true");
    fb.textContent = img.dataset.fallback;
    img.insertAdjacentElement("afterend", fb);
  }, true);

  /* ---- Header / nav ---------------------------------------------------- */
  var header = $(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 30); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  var toggle = $(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    $$(".nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---- Reveal on scroll ------------------------------------------------ */
  function observeReveals(root) {
    var els = $$(".reveal:not(.is-visible)", root);
    if (!("IntersectionObserver" in window) || reduceMotion) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- Hero carousel --------------------------------------------------- */
  var hero = $("[data-hero]");
  if (hero && window.PHC_HERO) {
    var slidesWrap = $(".hero__slides", hero);
    var dotsWrap = $(".hero__dots", hero);
    var capText = $(".hero__caption-text", hero);
    var SLIDE_MS = 6500;
    hero.style.setProperty("--slide-ms", SLIDE_MS + "ms");
    var slides = window.PHC_HERO.map(function (s) { return { s: s, p: byId[s.id] }; }).filter(function (x) { return x.p; });
    slidesWrap.innerHTML = slides.map(function (x, i) {
      return '<div class="hero__slide' + (x.s.contain ? " hero__slide--contain" : "") + (i === 0 ? " is-active" : "") + '">' +
        imgTag(x.p, 2000, i === 0 ? ' fetchpriority="high" loading="eager"' : "") + "</div>";
    }).join("");
    dotsWrap.innerHTML = slides.map(function (x, i) {
      return '<button class="hero__dot' + (i === 0 ? " is-active" : "") + '" type="button" aria-label="Show slide ' + (i + 1) + ": " + esc(x.p.title) + '"></button>';
    }).join("");
    var slideEls = $$(".hero__slide", hero);
    var dotEls = $$(".hero__dot", hero);
    var current = 0, timer = null, paused = false;
    var setCaption = function () {
      var x = slides[current];
      capText.innerHTML = "<strong>" + esc(x.p.title) + "</strong>" + esc(x.s.label || x.p.subtitle || "");
    };
    var go = function (n) {
      slideEls[current].classList.remove("is-active");
      dotEls[current].classList.remove("is-active");
      current = (n + slides.length) % slides.length;
      slideEls[current].classList.add("is-active");
      // restart dot animation
      void dotEls[current].offsetWidth;
      dotEls[current].classList.add("is-active");
      setCaption();
      schedule();
    };
    var schedule = function () {
      clearTimeout(timer);
      if (!paused && !reduceMotion) timer = setTimeout(function () { go(current + 1); }, SLIDE_MS);
    };
    dotEls.forEach(function (d, i) { d.addEventListener("click", function () { go(i); }); });
    $(".hero__btn--prev", hero).addEventListener("click", function () { go(current - 1); });
    $(".hero__btn--next", hero).addEventListener("click", function () { go(current + 1); });
    var pause = function (v) { paused = v; hero.classList.toggle("is-paused", v); if (v) clearTimeout(timer); else schedule(); };
    hero.addEventListener("mouseenter", function () { pause(true); });
    hero.addEventListener("mouseleave", function () { pause(false); });
    hero.addEventListener("focusin", function () { pause(true); });
    hero.addEventListener("focusout", function () { pause(false); });
    document.addEventListener("visibilitychange", function () { pause(document.hidden); });
    setCaption();
    schedule();
  }

  /* ---- Client spotlight ------------------------------------------------ */
  var spot = $("[data-spotlight]");
  if (spot && window.PHC_SPOTLIGHT) {
    var items = window.PHC_SPOTLIGHT.map(function (id) { return byId[id]; }).filter(Boolean);
    var frame = $(".spotlight__frame", spot);
    var body = $(".spotlight__body", spot);
    var picks = $(".spotlight__nav", spot);
    var idx = 0, spotTimer;
    picks.innerHTML = items.map(function (p, i) {
      return '<button type="button" class="spotlight__pick" aria-pressed="' + (i === 0) + '">' + esc(p.title.split(":")[0]) + "</button>";
    }).join("");
    var render = function (i, animate) {
      var p = items[i];
      var paint = function () {
        frame.innerHTML = imgTag(p, 1400);
        body.innerHTML =
          '<p class="spotlight__client">' + esc(p.client) + "</p>" +
          '<h3 class="spotlight__title">' + esc(p.title) + "</h3>" +
          '<ul class="spotlight__tags">' + (p.services || []).map(function (s) { return '<li class="tag">' + esc(s) + "</li>"; }).join("") + "</ul>" +
          "<p>" + esc(p.description) + "</p>" +
          (p.points ? '<ul class="spotlight__points">' + p.points.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" : "") +
          '<div class="btn-row"><a class="btn btn--navy" href="' + (doc.dataset.root || "") + 'work/#' + esc(p.id) + '">View the project ' + ICON.arrow + '</a></div>';
        body.classList.remove("is-fading");
      };
      $$(".spotlight__pick", picks).forEach(function (b, j) { b.setAttribute("aria-pressed", String(j === i)); });
      if (animate && !reduceMotion) { body.classList.add("is-fading"); setTimeout(paint, 300); } else paint();
    };
    var cycle = function () {
      clearTimeout(spotTimer);
      if (!reduceMotion) spotTimer = setTimeout(function () { idx = (idx + 1) % items.length; render(idx, true); cycle(); }, 11000);
    };
    $$(".spotlight__pick", picks).forEach(function (b, i) {
      b.addEventListener("click", function () { idx = i; render(i, true); clearTimeout(spotTimer); });
    });
    spot.addEventListener("mouseenter", function () { clearTimeout(spotTimer); });
    spot.addEventListener("mouseleave", cycle);
    render(0, false);
    cycle();
  }

  /* ---- Work grid + filters + lightbox ---------------------------------- */
  var grid = $("[data-work-grid]");
  var list = [];
  if (grid) {
    var mode = grid.dataset.workGrid; // "featured" | "all"
    var limit = parseInt(grid.dataset.limit || "0", 10);
    list = projects.filter(function (p) { return mode === "all" || p.featured; });
    if (limit) list = list.slice(0, limit);
    grid.innerHTML = list.map(function (p, i) {
      var cls = "work-card reveal" + (p.size ? " work-card--" + p.size : "");
      return '<button type="button" class="' + cls + '" id="' + esc(p.id) + '" data-index="' + i + '" data-cats="' + esc(p.categories.join(" ")) + '" aria-label="Open ' + esc(p.title) + '">' +
        imgTag(p, p.size === "wide" ? 1600 : 1000) +
        '<span class="work-card__view">' + ICON.plus + "</span>" +
        '<span class="work-card__info"><span class="work-card__cat">' + esc(catLabel[p.categories[0]] || "") + '</span><span class="work-card__title">' + esc(p.title) + "</span></span>" +
        "</button>";
    }).join("") + '<div class="work-empty" hidden><h3>New work landing soon</h3><p>This collection is being curated right now. <a class="text-link" href="' + (doc.dataset.root || "") + 'contact/">Ask to see more →</a></p></div>';
    observeReveals(grid);

    var filters = $("[data-filters]");
    if (filters) {
      filters.innerHTML = window.PHC_CATEGORIES.map(function (c) {
        var n = c.id === "all" ? list.length : list.filter(function (p) { return p.categories.indexOf(c.id) > -1; }).length;
        return '<button type="button" class="filter" data-filter="' + c.id + '" aria-pressed="' + (c.id === "all") + '">' + esc(c.label) + '<span class="filter__count">' + n + "</span></button>";
      }).join("");
      var applyFilter = function (id) {
        $$(".filter", filters).forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.filter === id)); });
        var shown = 0;
        $$(".work-card", grid).forEach(function (card) {
          var match = id === "all" || card.dataset.cats.split(" ").indexOf(id) > -1;
          card.classList.toggle("is-hidden", !match);
          if (match) { shown++; card.classList.add("is-visible"); }
        });
        $(".work-empty", grid).hidden = shown > 0;
      };
      filters.addEventListener("click", function (e) {
        var b = e.target.closest(".filter");
        if (!b) return;
        applyFilter(b.dataset.filter);
        if (history.replaceState) history.replaceState(null, "", b.dataset.filter === "all" ? location.pathname : "?category=" + b.dataset.filter);
      });
      var q = new URLSearchParams(location.search).get("category");
      if (q && catLabel[q]) applyFilter(q);
    }

    /* Lightbox */
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "Project details");
    lb.innerHTML = '<div class="lightbox__inner"><div class="lightbox__media"><button class="lightbox__arrow lightbox__arrow--prev" type="button" aria-label="Previous project">' + ICON.left + '</button><div class="lightbox__img"></div><button class="lightbox__arrow lightbox__arrow--next" type="button" aria-label="Next project">' + ICON.right + '</button></div><div class="lightbox__body on-light"></div></div><button class="lightbox__close" type="button" aria-label="Close">' + ICON.close + "</button>";
    document.body.appendChild(lb);
    var lbIdx = 0, lastFocus = null;
    var visibleIdx = function () {
      return $$(".work-card", grid).filter(function (c) { return !c.classList.contains("is-hidden"); }).map(function (c) { return +c.dataset.index; });
    };
    var openLb = function (i) {
      lbIdx = i;
      var p = list[i];
      $(".lightbox__img", lb).innerHTML = imgTag(p, 2200);
      $(".lightbox__body", lb).innerHTML =
        '<p class="eyebrow">' + esc(p.categories.map(function (c) { return catLabel[c]; }).join(" · ")) + "</p>" +
        "<h3>" + esc(p.title) + "</h3>" +
        '<p class="spotlight__client">' + esc(p.client) + (p.year ? " · " + esc(p.year) : "") + "</p>" +
        "<p>" + esc(p.description) + "</p>" +
        (p.points ? '<ul class="spotlight__points">' + p.points.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" : "") +
        '<ul class="spotlight__tags">' + (p.services || []).map(function (s) { return '<li class="tag">' + esc(s) + "</li>"; }).join("") + "</ul>" +
        '<div class="btn-row">' +
        (p.pdf ? '<a class="btn btn--ghost-dark btn--ghost" href="' + esc(window.PHC_VIEW(p)) + '" target="_blank" rel="noopener">View full presentation</a>' : "") +
        '<a class="btn" href="' + (doc.dataset.root || "") + 'contact/">Start something similar ' + ICON.arrow + "</a></div>";
      if (!lb.classList.contains("is-open")) {
        lastFocus = document.activeElement;
        lb.classList.add("is-open");
        document.body.style.overflow = "hidden";
        $(".lightbox__close", lb).focus();
      }
      if (history.replaceState) history.replaceState(null, "", "#" + p.id);
    };
    var closeLb = function () {
      lb.classList.remove("is-open");
      document.body.style.overflow = "";
      if (history.replaceState) history.replaceState(null, "", location.pathname + location.search);
      if (lastFocus) lastFocus.focus();
    };
    var step = function (d) {
      var v = visibleIdx(); var pos = v.indexOf(lbIdx);
      openLb(v[(pos + d + v.length) % v.length]);
    };
    grid.addEventListener("click", function (e) {
      var c = e.target.closest(".work-card");
      if (c) openLb(+c.dataset.index);
    });
    $(".lightbox__close", lb).addEventListener("click", closeLb);
    $(".lightbox__arrow--prev", lb).addEventListener("click", function () { step(-1); });
    $(".lightbox__arrow--next", lb).addEventListener("click", function () { step(1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "Tab") { // simple focus trap
        var f = $$("button, a[href]", lb); var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    // Deep link: work/#project-id
    if (location.hash) {
      var hit = list.findIndex(function (p) { return "#" + p.id === location.hash; });
      if (hit > -1) setTimeout(function () { openLb(hit); }, 300);
    }
  }

  /* ---- Inquiry form ---------------------------------------------------- */
  var form = $("[data-inquiry]");
  if (form) {
    var status = $(".form__status", form);
    var success = form.parentNode.querySelector(".form-success");
    var needsInterest = !!$('input[name="interests"]', form);
    // Pre-select interest from ?interest=branding etc.
    var pre = new URLSearchParams(location.search).get("interest");
    if (pre) $$('input[name="interests"]', form).forEach(function (cb) { if (cb.dataset.key === pre) cb.checked = true; });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form__status";
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var interests = $$('input[name="interests"]:checked', form).map(function (c) { return c.value; });
      if (needsInterest && !interests.length) {
        status.className = "form__status is-error";
        status.textContent = "Pick at least one thing you're interested in, even if it's “Something else.”";
        status.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      var data = {};
      new FormData(form).forEach(function (v, k) { if (k !== "interests") data[k] = v; });
      if (needsInterest) data["Interested in"] = interests.join(", ");
      var btn = $('button[type="submit"]', form);
      btn.disabled = true;
      btn.dataset.label = btn.innerHTML;
      btn.textContent = "Sending…";

      var mailtoFallback = function () {
        var lines = Object.keys(data).filter(function (k) { return k.charAt(0) !== "_" && k !== "_honey"; }).map(function (k) { return k + ": " + data[k]; });
        return "mailto:" + PHC_SETTINGS.email + "?subject=" + encodeURIComponent("New PHC inquiry: " + (data["Project name"] || data.Name || "")) + "&body=" + encodeURIComponent(lines.join("\n"));
      };

      fetch(PHC_SETTINGS.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data)
      }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          if (!res.ok || String(res.j.success) === "false") throw new Error(res.j.message || "Send failed");
          form.hidden = true;
          success.classList.add("is-visible");
          success.scrollIntoView({ behavior: "smooth", block: "center" });
          if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: "inquiry-sent", event: true });
        })
        .catch(function () {
          status.className = "form__status is-error";
          status.innerHTML = "Hmm, that didn't send. You can <a class=\"text-link\" href=\"" + esc(mailtoFallback()) + "\">send it by email instead</a> (your answers are filled in), or write to <a class=\"text-link\" href=\"mailto:" + PHC_SETTINGS.email + "\">" + PHC_SETTINGS.email + "</a>.";
          btn.disabled = false;
          btn.innerHTML = btn.dataset.label;
        });
    });
  }

  /* ---- Analytics (optional) -------------------------------------------- */
  if (PHC_SETTINGS.goatcounter) {
    var gc = document.createElement("script");
    gc.async = true;
    gc.src = "//gc.zgo.at/count.js";
    gc.setAttribute("data-goatcounter", "https://" + PHC_SETTINGS.goatcounter + ".goatcounter.com/count");
    document.head.appendChild(gc);
  }

  observeReveals(document);
})();
