function loadPart(id, file, callback) {
    const container = document.getElementById(id);
    if (!container)
        return;
    fetch(file)
        .then(response => {
        if (!response.ok)
            throw new Error(`Failed to load ${file}`);
        return response.text();
    })
        .then(html => {
        container.innerHTML = html;
        if (callback)
            callback();
    })
        .catch(err => console.error(err));
}
function initBurgerMenu() {
    const btn = document.getElementById('burger-btn');
    const menu = document.getElementById('burger-menu');
    if (!btn || !menu)
        return;
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('active');
    });
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => menu.classList.remove('active'));
    });
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
    menu.addEventListener('click', (e) => e.stopPropagation());
}
document.addEventListener('DOMContentLoaded', () => {
    loadPart('header', 'partials/header.html', initBurgerMenu);
    loadPart('footer', 'partials/footer.html');
});
export {};
