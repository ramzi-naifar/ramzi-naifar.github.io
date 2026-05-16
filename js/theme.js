// Dark / light mode toggle with localStorage persistence
(function () {
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply saved preference or fall back to system preference
  if (saved === 'dark' || (saved === null && prefersDark)) {
    document.body.classList.add('dark');
  }

  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
})();
