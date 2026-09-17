AOS.init({
    duration: 1000,
    once: true,
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
});

// Close sidebar on link click
if (sidebar) {
    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
        });
    });
}

// Social icons toggle panel
const socialToggle = document.getElementById('social-icon-toggle');
const socialPanel = document.getElementById('social-links-panel');

socialToggle.addEventListener('click', () => {
    if (socialPanel.style.display === 'flex') {
        socialPanel.style.display = 'none';
    } else {
        socialPanel.style.display = 'flex';
    }
});

// Hide social panel on clicking outside
document.addEventListener('click', (event) => {
    if (!socialToggle.contains(event.target) && !socialPanel.contains(event.target)) {
        socialPanel.style.display = 'none';
    }
});
