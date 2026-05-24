document.addEventListener('DOMContentLoaded', () => {

  /* ── Build all project sections from projects.js data ─────── */
  function renderProjects() {
    const container = document.getElementById('projects-container');
    const navList   = document.getElementById('nav-list');

    const layouts = ['layout-1', 'layout-2', 'layout-3', 'layout-4', 'layout-5', 'layout-6', 'layout-7', 'layout-8'];

    projects.forEach((project, i) => {
      const n      = i + 1;
      const id     = `project-${n}`;
      const num    = String(n).padStart(2, '0');
      const layout = project.layout || layouts[i % layouts.length];

      // Nav panel entry
      const navTitle = project.title || '—';
      const li = document.createElement('li');
      li.innerHTML = `<a href="#${id}" class="nav-link" data-section="${id}">${num} — ${navTitle}</a>`;
      navList.appendChild(li);

      // All photos for lightbox: details first, then gallery
      const allPhotos = [...project.details, ...project.gallery];
      const galleryHTML = allPhotos
        .map(src => `<a href="${src}" class="glightbox" data-gallery="${id}"></a>`)
        .join('');

      // Info block — skip title/button if absent
      const titleHTML = project.title
        ? `<h2 class="project-title reveal">${project.title}</h2>` : '';
      const btnHTML = allPhotos.length > 0
        ? `<button class="view-more-btn reveal reveal-d1" data-gallery="${id}">Galerie completă →</button>` : '';

      const infoHTML = `<span class="project-num">${num}</span>${titleHTML}${btnHTML}`;

      const section = document.createElement('section');
      section.id        = id;
      section.className = `project ${layout}`;
      section.dataset.accent = project.accent;
      section.style.setProperty('--accent', project.accent);

      section.innerHTML = `
        <figure class="pj-photo${project.portrait ? ' portrait' : ''}">
          <img src="${project.hero}" alt="${project.title || `Proiect ${n}`}">
        </figure>
        <div class="pj-info">${infoHTML}</div>
        <div class="gallery-hidden">${galleryHTML}</div>
      `;

      section.style.zIndex = n;
      container.appendChild(section);
    });
  }

  renderProjects();

  /* Pre-compute section scroll positions at load (scroll=0, sticky not yet active) */
  const sectionPositions = new Map();
  document.querySelectorAll('#hero, .project, #contact').forEach(el => {
    sectionPositions.set('#' + el.id, el.getBoundingClientRect().top + window.scrollY);
  });

  /* ── Lenis smooth scroll ──────────────────────────────────────── */
  const lenis = new Lenis({
    duration: 1.3,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  gsap.registerPlugin(ScrollTrigger);
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  /* ── Stacked card scale-down ──────────────────────────────────── */
  document.querySelectorAll('.project').forEach(section => {
    gsap.to(section, {
      scale: 0.92,
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  const navToggle  = document.getElementById('nav-toggle');
  const navOverlay = document.getElementById('nav-overlay');
  const navPanel   = document.getElementById('nav-panel');

  function closeNav() {
    navPanel.classList.remove('open');
    navOverlay.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navPanel.setAttribute('aria-hidden', 'true');
    lenis.start();
  }

  navToggle.addEventListener('click', () => {
    const open = navPanel.classList.toggle('open');
    navOverlay.classList.toggle('open', open);
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
    navPanel.setAttribute('aria-hidden', !open);
    open ? lenis.stop() : lenis.start();
  });

  navOverlay.addEventListener('click', closeNav);

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      if (link.closest('#nav-panel')) closeNav();
      const href = link.getAttribute('href');
      const y = sectionPositions.get(href);
      if (y !== undefined) {
        isSnapping = true;
        lenis.scrollTo(y, {
          duration: 1.6,
          onComplete: () => { isSnapping = false; },
        });
      }
    });
  });

  /* ── Hero animations ──────────────────────────────────────────── */
  gsap.to('#hero-portrait', {
    yPercent: 18,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  gsap.to('#hero-content', {
    opacity: 0,
    yPercent: -8,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: '55% top',
      end: 'bottom top',
      scrub: true,
    },
  });

  const scrollIndicator = document.getElementById('scroll-indicator');
  lenis.on('scroll', ({ scroll }) => {
    if (scroll > 60) scrollIndicator?.classList.add('hidden');
    else scrollIndicator?.classList.remove('hidden');
  });

  /* ── Scroll snap ──────────────────────────────────────────────── */
  const snapSections = [
    document.getElementById('hero'),
    ...document.querySelectorAll('.project'),
    document.getElementById('contact'),
  ];

  let snapTimer = null;
  let isSnapping = false;

  function snapToNearest() {
    const threshold = window.innerHeight * 0.22;
    let nearest = null, minDist = Infinity;
    snapSections.forEach(el => {
      if (!el) return;
      const top = sectionPositions.get('#' + el.id) ?? 0;
      const dist = Math.abs(top - lenis.scroll);
      if (dist < minDist) { minDist = dist; nearest = el; }
    });
    if (nearest && minDist > 2 && minDist < threshold) {
      isSnapping = true;
      lenis.scrollTo(sectionPositions.get('#' + nearest.id) ?? 0, {
        duration: 0.75,
        easing: t => 1 - Math.pow(1 - t, 3),
        onComplete: () => { isSnapping = false; },
      });
    }
  }

  lenis.on('scroll', ({ velocity }) => {
    if (isSnapping) return;
    clearTimeout(snapTimer);
    if (Math.abs(velocity) < 0.3) snapTimer = setTimeout(snapToNearest, 60);
  });

  /* ── Reveal animations ────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ── Active nav link highlight ───────────────────────────────── */
  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  const projectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id     = entry.target.id;
      const accent = entry.target.dataset.accent || 'transparent';
      navLinks.forEach(link => {
        const isActive = link.dataset.section === id;
        link.classList.toggle('active', isActive);
        link.style.borderLeftColor = isActive ? accent : 'transparent';
      });
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.project[data-accent]').forEach(s =>
    projectObserver.observe(s)
  );

  /* ── GLightbox ────────────────────────────────────────────────── */
  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    zoomable: false,
    closeButton: true,
    openEffect:  'fade',
    closeEffect: 'fade',
    slideEffect: 'fade',
  });

  document.querySelectorAll('.view-more-btn[data-gallery]').forEach(btn => {
    btn.addEventListener('click', () => {
      const firstItem = document.querySelector(`.glightbox[data-gallery="${btn.dataset.gallery}"]`);
      if (firstItem) firstItem.click();
    });
  });

});
