function toggleNav() {
    const nav = document.getElementById('global-nav');
    const button = document.querySelector('.hamburger');
    const isExpanded = nav.getAttribute('aria-expanded') === 'true';
    nav.setAttribute('aria-expanded', !isExpanded);
    button.setAttribute('aria-expanded', !isExpanded);
  }