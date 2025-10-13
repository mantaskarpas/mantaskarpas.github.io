function learnMore() {
  alert("Redirecting ...");
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const closeBtn = document.querySelector('.close-menu a');
closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
});