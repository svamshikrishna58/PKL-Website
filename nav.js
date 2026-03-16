/* ============================================
   Shared Navigation & Footer HTML Templates
   Injected into every page via this file
   ============================================ */

const NAV_HTML = `
<nav class="navbar">
  <div class="container nav-inner">
    <!-- Logo -->
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-icon">PKL</div>
      <div class="nav-logo-text">
        <span class="nav-logo-main">Pro Kabaddi</span>
        <span class="nav-logo-sub">League</span>
      </div>
    </a>

    <!-- Desktop Links -->
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="teams.html">Teams</a></li>
      <li><a href="players.html">Players</a></li>
      <li><a href="schedule.html">Schedule</a></li>
      <li><a href="points.html">Points Table</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>

    <!-- CTA Button -->
    <a href="schedule.html" class="btn btn-primary nav-cta">Buy Tickets</a>

    <!-- Hamburger -->
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- Mobile Menu -->
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Home</a>
  <a href="teams.html">Teams</a>
  <a href="players.html">Players</a>
  <a href="schedule.html">Schedule</a>
  <a href="points.html">Points Table</a>
  <a href="contact.html">Contact</a>
</div>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <!-- Brand -->
      <div>
        <a href="index.html" class="nav-logo" style="display:inline-flex;">
          <div class="nav-logo-icon">PKL</div>
          <div class="nav-logo-text">
            <span class="nav-logo-main">Pro Kabaddi</span>
            <span class="nav-logo-sub">League</span>
          </div>
        </a>
        <p class="footer-brand-text">
          India's premier kabaddi league, bringing together the best athletes 
          from across the nation in an electrifying sporting spectacle.
        </p>
        <div class="footer-socials">
          <a href="#" class="footer-social">𝕏</a>
          <a href="#" class="footer-social">f</a>
          <a href="#" class="footer-social">▶</a>
          <a href="#" class="footer-social">📸</a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <p class="footer-heading">Quick Links</p>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="teams.html">Teams</a></li>
          <li><a href="players.html">Players</a></li>
          <li><a href="schedule.html">Match Schedule</a></li>
        </ul>
      </div>

      <!-- More Links -->
      <div>
        <p class="footer-heading">More</p>
        <ul class="footer-links">
          <li><a href="points.html">Points Table</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <p class="footer-heading">Contact</p>
        <ul class="footer-links" style="gap:14px;">
          <li style="display:flex;align-items:flex-start;gap:10px;padding-left:0;">
            <span style="color:var(--red);font-size:16px;flex-shrink:0;">📍</span>
            <span style="color:var(--text-muted);font-size:14px;">Mastech House, Mumbai, Maharashtra, India</span>
          </li>
          <li style="display:flex;align-items:center;gap:10px;padding-left:0;">
            <span style="color:var(--red);font-size:16px;">📞</span>
            <a href="tel:+912240808080" style="color:var(--text-muted);font-size:14px;">+91 22 4080 8080</a>
          </li>
          <li style="display:flex;align-items:center;gap:10px;padding-left:0;">
            <span style="color:var(--red);font-size:16px;">✉</span>
            <a href="mailto:info@prokabaddi.com" style="color:var(--text-muted);font-size:14px;">info@prokabaddi.com</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <span>© 2025 Pro Kabaddi League. All rights reserved.</span>
      <div class="footer-bottom-right">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>
`;

// Inject nav and footer into page
document.addEventListener('DOMContentLoaded', () => {
  // Insert navbar before first element in body
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  // Insert footer at end of body
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
});
