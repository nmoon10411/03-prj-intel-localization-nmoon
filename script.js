// Year
document.getElementById('year').textContent = new Date().getFullYear();

// RTL Toggle
const bs = document.getElementById('bs-css');
function setDir(dir) {
  document.documentElement.dir = dir;
  bs.href = dir === 'rtl'
    ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css'
    : 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
  localStorage.setItem('dir', dir);
}
setDir(localStorage.getItem('dir') || 'ltr');

// Controls
document.getElementById('toggleDir').addEventListener('click', () => {
  setDir(document.documentElement.dir === 'rtl' ? 'ltr' : 'rtl');
});
document.getElementById('lang').addEventListener('change', (e) => {
  setDir(e.target.value === 'ar' ? 'rtl' : 'ltr');
});

// Form Handling
const form = document.getElementById('subForm');
const msg  = document.getElementById('formMsg');
form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    msg.textContent = 'Please fix the errors above.';
    msg.className = 'text-danger';
    return;
  }
  msg.textContent = 'Thanks! You’re subscribed.';
  msg.className = 'text-success';
  form.reset();
  form.classList.remove('was-validated');
});
