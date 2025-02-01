document.addEventListener('DOMContentLoaded', function() {
  // Animate skill bars
  const progressBars = document.querySelectorAll('.progress-bar');
  
  progressBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      setTimeout(() => {
          bar.style.width = width + '%';
      }, 200);
  });

  // Add active class to current navigation item
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
      });
  });

  // Download CV button click handler
  const downloadBtn = document.querySelector('.download-cv');
  
  downloadBtn.addEventListener('click', function(e) {
      e.preventDefault();
      alert('CV download started!');
      // Add actual download functionality here
  });

  // Hire me button click handler
  const hireMeBtn = document.querySelector('.hire-me');
  
  hireMeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Thank you for your interest! Please use the contact form to get in touch.');
  });
});