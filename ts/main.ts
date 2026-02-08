// Function to load partials on site
function loadPart(id: string, file: string, callback?: () => void): void {
    const container = document.getElementById(id);
    if (!container) return;

    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            return response.text();
        })
        .then(html => {
            container.innerHTML = html;
            if (callback) callback();
        })
        .catch(err => console.error(err));
}

// Burder function
function initBurgerMenu(): void {
    const btn = document.getElementById('burger-btn');
    const menu = document.getElementById('burger-menu');
    if (!btn || !menu) return;

    // Open/close
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('active');
    });

    // Close by regirect
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => menu.classList.remove('active'));
    });

    // Close by click on site
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target as Node) && menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });

    // Save click on burger
    menu.addEventListener('click', (e) => e.stopPropagation());
}

// Initialize partials
document.addEventListener('DOMContentLoaded', () => {
    loadPart('header', '../partials/header.html', initBurgerMenu);
    loadPart('footer', '../partials/footer.html');
});
