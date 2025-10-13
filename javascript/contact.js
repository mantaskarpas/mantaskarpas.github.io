function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return false;    
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

