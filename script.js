document.addEventListener("DOMContentLoaded", () => {
  const rtlLangs = ['ar','he','fa','ur'];
  const bsLink = document.getElementById('bootstrap-css');
  const timeline = document.getElementById('timeline');
  const arrow = document.getElementById('arrow-text');
  const toggle = document.getElementById('toggle-rtl');

  function setDir(dir) {
    document.documentElement.setAttribute('dir', dir);
    bsLink.href = dir === 'rtl'
      ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css'
      : 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    arrow.textContent = dir === 'rtl'
      ? 'قم بالتمرير أفقيًا لعرض المزيد ←'
      : 'Scroll horizontally to view more →';

    // Reverse timeline order for RTL
    if (timeline) {
      const cards = Array.from(timeline.children);
      timeline.innerHTML = "";
      if (dir === 'rtl') cards.reverse();
      cards.forEach(c => timeline.appendChild(c));

      requestAnimationFrame(() => {
        timeline.scrollLeft = dir === 'rtl'
          ? timeline.scrollWidth
          : 0;
      });
    }
  }

  // Auto-detect language
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
