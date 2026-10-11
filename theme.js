// Light/dark toggle. Without a saved choice the site follows the system setting;
// a click saves the opposite of what's showing (read back by the snippet in each page's <head>).
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-btn');
  var mq = matchMedia('(prefers-color-scheme: dark)');
  function isDark() { return root.dataset.theme ? root.dataset.theme === 'dark' : mq.matches; }
  function label() { btn.setAttribute('aria-label', isDark() ? 'Switch to light mode' : 'Switch to dark mode'); }
  btn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    label();
  });
  mq.addEventListener('change', label);
  label();
})();
