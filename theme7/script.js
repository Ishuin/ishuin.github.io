// Handle active navigation state
document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            e.target.classList.add('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Optional: Add a simple animation to the hello text when page loads
window.addEventListener('load', () => {
    const hello = document.querySelector('.hello');
    hello.style.opacity = '0';
    hello.style.transform = 'translateY(20px)';
    
    // Add transition properties
    hello.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    
    // Trigger animation
    setTimeout(() => {
        hello.style.opacity = '1';
        hello.style.transform = 'translateY(0)';
    }, 100);
});