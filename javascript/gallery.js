function toggleText(container){
  const text = container.querySelector('.hidden-text');
  if (text.style.display === 'none' || text.style.display === '') { 
    text.style.display = 'block';
  } else {  
    text.style.display = 'none';  
  }
}