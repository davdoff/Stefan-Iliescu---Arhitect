document.addEventListener('DOMContentLoaded', () => {

  /* ── Build all project sections from projects.js data ─────── */
  function renderProjects() {
    const container     = document.getElementById('projects-container');
    const sidebarNav    = document.getElementById('sidebar-nav');
    const mobileMenu    = document.getElementById('mobile-menu');
    const mobileContact = mobileMenu.querySelector('.mobile-contact-link');

    const layouts = ['layout-a', 'layout-b', 'layout-c', 'layout-d', 'layout-e', 'layout-f', 'layout-g', 'layout-h', 'layout-i', 'layout-j', 'layout-k', 'layout-l', 'layout-m', 'layout-n', 'layout-o', 'layout-p', 'layout-q', 'layout-r', 'layout-s'];

    projects.forEach((project, i) => {
      const n      = i + 1;
      const id     = `project-${n}`;
      const num    = String(n).padStart(2, '0');
      const layout = layouts[i % layouts.length];

      // Sidebar link — show dash if project has no title (demo entries)
      const navTitle = project.title || '—';
      const li = document.createElement('li');
      li.innerHTML = `<a href="#${id}" class="sidebar-link" data-section="${id}">${num} — ${navTitle}</a>`;
      sidebarNav.appendChild(li);

      // Mobile menu link
      const mobileLink = document.createElement('a');
      mobileLink.href      = `#${id}`;
      mobileLink.className = 'mobile-link';
      mobileLink.textContent = project.title || `Proiect ${n}`;
      mobileMenu.insertBefore(mobileLink, mobileContact);

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

      // All layouts except those that handle accent via borders/bg use an accent rect element
      const accentRect = !['layout-a', 'layout-c', 'layout-d', 'layout-l', 'layout-o', 'layout-q'].includes(layout)
        ? '<div class="pj-accent-rect"></div>' : '';

      const section = document.createElement('section');
      section.id        = id;
      section.className = `project ${layout}`;
      section.dataset.accent = project.accent;
      section.style.setProperty('--accent', project.accent);

      section.innerHTML = `
        ${accentRect}
        <div class="pj-photo">
          <img src="${project.hero}" alt="${project.title}">
        </div>
        <div class="pj-info">${infoHTML}</div>
        <div class="gallery-hidden">${galleryHTML}</div>
      `;

      container.appendChild(section);
    });
  }

  renderProjects();

  /* ── Lenis smooth scroll ──────────────────────────────────────── */
  const lenis = new Lenis({
    duration: 1.3,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  gsap.registerPlugin(ScrollTrigger);
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const isMobileLink = link.closest('.mobile-menu');
      if (isMobileLink) {
        mobileMenu.classList.remove('open');
        hamburger?.classList.remove('open');
        hamburger?.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        lenis.start();
      }
      const target = document.querySelector(link.getAttribute('href'));
      if (target) lenis.scrollTo(target, { duration: 1.6, offset: 0 });
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

  /* ── Active sidebar nav ───────────────────────────────────────── */
  const sidebar      = document.getElementById('sidebar');
  const sidebarLinks = document.querySelectorAll('.sidebar-link[data-section]');

  const projectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id     = entry.target.id;
      const accent = entry.target.dataset.accent || 'transparent';
      sidebarLinks.forEach(link => {
        const isActive = link.dataset.section === id;
        link.classList.toggle('active', isActive);
        link.style.borderLeftColor = isActive ? accent : 'transparent';
      });
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.project[data-accent]').forEach(s =>
    projectObserver.observe(s)
  );

  /* ── Mobile menu ──────────────────────────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger?.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    mobileMenu.setAttribute('aria-hidden', !open);
    open ? lenis.stop() : lenis.start();
  });

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
