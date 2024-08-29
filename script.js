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
}

// Typing effect
document.addEventListener('DOMContentLoaded', function () {
    const element = document.querySelector('.text-lowercase');
    const words = ["business", "project", "website", "app", "utility", "API", "concept", "solution", "resource", "tool", "vision", "idea"];
    let index = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    let isDeleting = false;

    function typeWriter() {
        if (charIndex < words[index].length && !isDeleting) {
            element.textContent += words[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else if (charIndex > 0 && isDeleting) {
            element.textContent = element.textContent.slice(0, -1);
            charIndex--;
            setTimeout(typeWriter, typingSpeed);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                index = (index + 1) % words.length;
            }
            setTimeout(typeWriter, 500);
        }
    }

    typeWriter();
});

document.addEventListener('DOMContentLoaded', function() {
    const heroImages = document.querySelectorAll('.hero-img');
    let currentIndex = 0;

    function switchImage() {
        heroImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % heroImages.length;
        heroImages[currentIndex].classList.add('active');
    }

    setInterval(switchImage, 5000);
});