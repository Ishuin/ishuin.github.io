document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav a.nav-link');
    const sections = document.querySelectorAll('.content-section');
  
    // Initially display the welcome section.
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const welcomeSection = document.getElementById('welcome');
    if (welcomeSection) {
        welcomeSection.style.display = 'block';
    }

    links.forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault();  // Prevent default anchor behavior
          const targetId = this.getAttribute('href').substring(1); // Get the target id

            // Hide all sections.
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the target section.
            const target = document.getElementById(targetId);
            target.style.display = 'block';
        });
    });
});