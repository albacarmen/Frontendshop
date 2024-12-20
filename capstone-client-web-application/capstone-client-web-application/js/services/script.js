const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙'; // Moon icon for dark mode
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '🌞'; // Sun icon for light mode
    }
});
