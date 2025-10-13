function getQuote() {
    alert("Redirecting to the quote form...");
    window.location.href= "quote.html"; 
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

