/* ============================================
   Pro Kabaddi League - Shared JavaScript
   Navigation, Animations, Utilities
   ============================================ */

// ---- Navigation ----
function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const navbar = document.querySelector('.navbar');

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.background = 'rgba(10,10,15,0.98)';
    } else {
      navbar.style.background = 'rgba(10,10,15,0.92)';
    }
  });

  // Mark active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ---- Scroll Reveal Animation ----
function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, entry.target.dataset.delay || 0);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// ---- Staggered Reveal ----
function staggerReveal(selector, delayStep = 100) {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('reveal');
    el.dataset.delay = i * delayStep;
  });
}

// ---- Filter Tabs ----
function initFilterTabs(tabSelector, targetSelector, filterAttr) {
  const tabs = document.querySelectorAll(tabSelector);
  const targets = document.querySelectorAll(targetSelector);

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      targets.forEach(target => {
        if (filter === 'all' || target.dataset[filterAttr] === filter) {
          target.style.display = '';
          target.style.opacity = '1';
        } else {
          target.style.display = 'none';
        }
      });
    });
  });
}

// ---- Countdown Timer ----
function initCountdown(elementId, targetDate) {
  const el = document.getElementById(elementId);
  if (!el) return;

  function update() {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const diff = target - now;

    if (diff < 0) { el.textContent = 'LIVE'; return; }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    el.innerHTML = `
      <span>${String(days).padStart(2,'0')}<small>D</small></span>
      <span>${String(hours).padStart(2,'0')}<small>H</small></span>
      <span>${String(mins).padStart(2,'0')}<small>M</small></span>
      <span>${String(secs).padStart(2,'0')}<small>S</small></span>
    `;
  }

  update();
  setInterval(update, 1000);
}

// ---- Smooth Counter ----
function animateCounter(el, target, duration = 1500) {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(start + (target - start) * eased);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, parseInt(entry.target.dataset.count));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ---- Init All ----
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initReveal();
  initCounters();
});
