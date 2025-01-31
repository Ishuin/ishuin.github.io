// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const links = document.querySelectorAll('nav a');
  
  links.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();  // Prevent default anchor behavior
          const targetId = this.getAttribute('href').substring(1); // Get the target id
          const target = document.getElementById(targetId); // Select the target
          target.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target smoothly
      });
  });
});