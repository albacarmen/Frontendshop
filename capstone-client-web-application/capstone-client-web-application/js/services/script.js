// JavaScript to toggle dark mode on and off
const themeToggle = document.getElementById('theme-toggle');

// Function to toggle dark and light modes
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙 Switch to Dark Mode'; // Update button text
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '🌞 Switch to Light Mode'; // Update button text
    }
});


