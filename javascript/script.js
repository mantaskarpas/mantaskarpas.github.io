function bookRepair() {
  alert("Redirecting to the booking page...");
   window.location.href = "booking.html"; // Uncomment when booking page is ready
}

function getQuote() {
  alert("Redirecting to the quote form...");
  window.location.href = "quote.html"; // Uncomment when quote page is ready
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
