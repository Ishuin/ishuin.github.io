// Active link highlighting
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Add active class to clicked link
    this.classList.add('active');
    
    // Smooth scroll to section
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll indicator animation
const scrollIndicator = document.querySelector('.scroll-indicator');
let isVisible = true;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 100 && isVisible) {
    scrollIndicator.style.opacity = '0';
    isVisible = false;
  } else if (scrollPosition <= 100 && !isVisible) {
    scrollIndicator.style.opacity = '1';
    isVisible = true;
  }
});