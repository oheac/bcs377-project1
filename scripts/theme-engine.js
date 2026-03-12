function loadTheme() {
    const theme = localStorage.getItem('theme') || getThemePreference();
    console.log(`Loaded theme: ${theme}`);
    document.documentElement.setAttribute('data-theme', theme);
    document.getElementById('theme-dropdown').value = theme;
}

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    console.log(`Set theme: ${theme}`);
    document.documentElement.setAttribute('data-theme', theme);
}

function getThemePreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
});
