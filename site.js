let currentLang = 'en';
let isDark = false;

// Theme Toggle
function toggleTheme() {
    isDark = !isDark;
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Language Toggle
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'tr' : 'en';
    updateLanguage();
    localStorage.setItem('language', currentLang);

    // Update toggle switch and labels
    const checkbox = document.getElementById('langToggle');
    const enLabel = document.getElementById('lang-en');
    const trLabel = document.getElementById('lang-tr');

    if (currentLang === 'tr') {
        checkbox.checked = true;
        enLabel.classList.remove('active');
        trLabel.classList.add('active');
    } else {
        checkbox.checked = false;
        enLabel.classList.add('active');
        trLabel.classList.remove('active');
    }
}

function updateLanguage() {
    // Update UI elements
    const elements = document.querySelectorAll('[data-en][data-tr]');
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });

    // Update policy content language sections (only on policies page)
    const langSections = document.querySelectorAll('.lang-section');
    if (langSections.length > 0) {
        langSections.forEach(section => {
            section.classList.remove('active');
        });
        document.querySelectorAll(`.lang-${currentLang}`).forEach(section => {
            section.classList.add('active');
        });
    }
}

// Initialize theme and language on page load
window.addEventListener('DOMContentLoaded', () => {
    // Load saved preferences
    const savedTheme = localStorage.getItem('theme');
    const savedLang = localStorage.getItem('language');

    if (savedTheme === 'dark') {
        isDark = true;
        document.body.classList.add('dark');
    }

    if (savedLang) {
        currentLang = savedLang;
        updateLanguage();

        // Set initial toggle state
        const checkbox = document.getElementById('langToggle');
        const enLabel = document.getElementById('lang-en');
        const trLabel = document.getElementById('lang-tr');

        if (currentLang === 'tr') {
            checkbox.checked = true;
            enLabel.classList.remove('active');
            trLabel.classList.add('active');
        }
    }
});