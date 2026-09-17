(() => {
  const header = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");
  const yearEl = document.getElementById("year");
  const copyBtn = document.getElementById("copyContract");
  const contractAddress = document.getElementById("contractAddress");
  const tickerTrack = document.getElementById("tickerTrack");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Marquee items
  const marqueeItems = [
    "EVERYTHING IS FINE",
    "$FINE",
    "BNB CHAIN",
    "STAY CALM",
    "EVERYTHING IS FINE",
    "COFFEE SECURED",
    "CHAOS LEVEL: ACCEPTABLE",
  ];

  if (tickerTrack) {
    const doubled = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];
    tickerTrack.innerHTML = doubled
      .map(
        (item) =>
          `<span>${item}<span class="dot" aria-hidden="true">•</span></span>`,
      )
      .join("");
  }

  // Sticky header
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu
  let menuOpen = false;

  const setMenu = (open) => {
    menuOpen = open;
    if (!mobileMenu || !menuToggle || !header || !menuIcon) return;
    mobileMenu.classList.toggle("is-open", open);
    header.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
    menuIcon.innerHTML = open
      ? '<path d="M18 6 6 18M6 6l12 12" />'
      : '<path d="M4 6h16M4 12h16M4 18h16" />';
  };

  if (menuToggle) {
    menuToggle.addEventListener("click", () => setMenu(!menuOpen));
  }

  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });
  }

  // Copy contract
  if (copyBtn && contractAddress) {
    copyBtn.addEventListener("click", async () => {
      const value = contractAddress.textContent?.trim() || "TBA";
      const original = copyBtn.textContent;
      try {
        if (value !== "TBA") {
          await navigator.clipboard.writeText(value);
        }
      } catch {
        /* ignore */
      }
      copyBtn.textContent = "Copied!";
      window.setTimeout(() => {
        copyBtn.textContent = original || "Copy Contract";
      }, 1600);
    });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  // Floating embers
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    document.querySelectorAll(".embers").forEach((layer) => {
      const count = Number(layer.getAttribute("data-embers") || 12);
      const colors = ["", "orange", "burnt"];
      for (let i = 0; i < count; i += 1) {
        const ember = document.createElement("span");
        ember.className = `ember ${colors[i % colors.length]}`.trim();
        ember.style.left = `${8 + ((i * 17) % 84)}%`;
        ember.style.bottom = `${(i * 11) % 40}%`;
        ember.style.width = `${2 + (i % 4)}px`;
        ember.style.height = ember.style.width;
        ember.style.animationDuration = `${3.2 + (i % 5) * 0.55}s`;
        ember.style.animationDelay = `${(i % 7) * 0.45}s`;
        layer.appendChild(ember);
      }
    });
  }
})();
