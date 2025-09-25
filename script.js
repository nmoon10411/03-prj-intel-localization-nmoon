document.addEventListener("DOMContentLoaded", () => {
  const rtlLangs = ['ar','he','fa','ur'];
  const bsLink = document.getElementById('bootstrap-css');
  const timeline = document.getElementById('timeline');
  const arrow = document.getElementById('arrow-text');
  const toggle = document.getElementById('toggle-rtl');

  let lastDir = null; // remember last direction

  function setDir(dir) {
    if (dir === lastDir) return; // don't reset if direction hasn't changed
    lastDir = dir;

    document.documentElement.setAttribute('dir', dir);
    bsLink.href = dir === 'rtl'
      ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css'
      : 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';

    arrow.textContent = dir === 'rtl'
      ? 'قم بالتمرير أفقيًا لعرض المزيد ←'
      : 'Scroll horizontally to view more →';

    // Flip only once when direction changes
    if (timeline) {
      const cards = Array.from(timeline.children);
      if (dir === 'rtl') {
        timeline.style.direction = 'rtl';   // CSS handles flow
        cards.reverse().forEach(c => timeline.appendChild(c)); // one-time reverse
      } else {
        timeline.style.direction = 'ltr';
        cards.reverse().forEach(c => timeline.appendChild(c)); // reverse back to normal
      }
    }
  }

  // Detect browser language
  const lang = (document.documentElement.lang || navigator.language || '').slice(0,2).toLowerCase();
  setDir(rtlLangs.includes(lang) ? 'rtl' : 'ltr');

  // Manual toggle
  toggle.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
    setDir(cur);
  });

  // Year
  document.getElementById('year').textContent = new Date().getFullYear();
});
