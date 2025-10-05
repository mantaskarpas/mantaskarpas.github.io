function toggleText(container){
  const text = container.querySelector('.hidden-text');
  if (text.style.display === 'none' || text.style.display === '') { 
    text.style.display = 'block';
  } else {  
    text.style.display = 'none';  
  }
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});