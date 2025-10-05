function bookRepair() {
  alert("Redirecting to the booking page...");
  // window.location.href = "booking.html"; // Uncomment when ready
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});