// Инициализация бургер-меню
function initBurgerMenu() {
    const btn = document.getElementById('burger-btn');
    const menu = document.getElementById('burger-menu');
    if (!btn || !menu) return;

    // Клик по кнопке — открыть/закрыть меню
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('active');
    });

    // Клик по ссылке в меню — закрыть меню
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => menu.classList.remove('active'));
    });

    // Клик вне меню — закрыть меню
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });

    // Клик по самому меню не закрывает его
    menu.addEventListener('click', (e) => e.stopPropagation());
}

// Запускаем после загрузки страницы
document.addEventListener('DOMContentLoaded', initBurgerMenu);
