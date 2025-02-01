// Add hover effect to navigation items
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = 'var(--accent-color)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.color = 'var(--text-color)';
    });
});

// Settings button rotation
const settingsBtn = document.querySelector('.settings-btn');
settingsBtn.addEventListener('click', () => {
    settingsBtn.style.transform = 'rotate(90deg)';
    setTimeout(() => {
        settingsBtn.style.transform = 'rotate(0deg)';
    }, 300);
});