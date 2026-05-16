// Adds a shadow to the navbar when the user scrolls past the top
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});
