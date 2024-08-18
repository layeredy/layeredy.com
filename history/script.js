// Theme switcher
const toggleIcon = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', currentTheme);
updateIcon(currentTheme);

toggleIcon.addEventListener('click', function() {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    toggleIcon.innerHTML = theme === 'light' 
        ? '<i class="bi bi-sun-fill"></i>' 
        : '<i class="bi bi-moon-fill"></i>';
};