const htmlEl = document.getElementById('htmlRoot');
const toggleBtn = document.getElementById('toggleDirBtn');
const rtlLanguages = ['ar', 'he', 'fa', 'ur'];

// Toggle button for RTL/LTR
toggleBtn.addEventListener('click', () => {
  const current = htmlEl.getAttribute('dir');
  const newDir = current === 'rtl' ? 'ltr' : 'rtl';
  htmlEl.setAttribute('dir', newDir);
  localStorage.setItem('dir', newDir);
});

// Auto-detect based on browser language
(function() {
  const savedDir = localStorage.getItem('dir');
  if (savedDir) {
    htmlEl.setAttribute('dir', savedDir);
  } else {
    const userLang = navigator.language.slice(0, 2).toLowerCase();
    if (rtlLanguages.includes(userLang)) {
      htmlEl.setAttribute('dir', 'rtl');
    }
  }
})();
