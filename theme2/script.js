const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  const spans = menuToggle.querySelectorAll('span');
  spans.forEach(span => span.classList.toggle('active'));
});

document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
    const spans = menuToggle.querySelectorAll('span');
    spans.forEach(span => span.classList.remove('active'));
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      navLinks.classList.remove('active');
      const spans = menuToggle.querySelectorAll('span');
      spans.forEach(span => span.classList.remove('active'));
    }
  });
});

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
    let index = sections.length; 
    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
    
    navItems.forEach((link) => link.classList.remove('active'));
    if(navItems[index]) navItems[index].classList.add('active');
}

window.addEventListener('scroll', updateActiveLink);
