// Toggle Dark Mode
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙 Switch to Dark Mode'; // Button text for light mode
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '🌞 Switch to Light Mode'; // Button text for dark mode
    }
});

// Ensure categories are loaded when page loads
function fetchCategories() {
    axios.get('/api/categories')
        .then(response => {
            const categories = response.data;
            renderCategories(categories);
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
        });
}

function renderCategories(categories) {
    const categoryList = document.getElementById('category-list');
    categoryList.innerHTML = '';  // Clear previous categories before adding new ones

    categories.forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.classList.add('category-item');
        categoryItem.textContent = category.name;
        categoryList.appendChild(categoryItem);
    });
}

window.onload = fetchCategories;



