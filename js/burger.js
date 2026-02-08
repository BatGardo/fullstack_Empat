// Burger menu
function initBurgerMenu() {
    const btn = document.getElementById('burger-btn');
    const menu = document.getElementById('burger-menu');
    if (!btn || !menu) return;

    // Open/close by button
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('active');
    });

    // Close by redirect
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => menu.classList.remove('active'));
    });

    // Close by click on page
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });

    // Close saver on burger
    menu.addEventListener('click', (e) => e.stopPropagation());
}

// After initializing
document.addEventListener('DOMContentLoaded', initBurgerMenu);
