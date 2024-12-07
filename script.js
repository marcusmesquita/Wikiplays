const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os itens que têm submenus
    const submenuToggles = document.querySelectorAll('.has-submenu > .nav-link-jogos');

    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault(); // Evita o comportamento padrão do link
            const parent = toggle.parentElement; // Pega o item pai do submenu
            const submenu = parent.querySelector('.nav-submenu');

            // Fecha todos os outros submenus antes de abrir/fechar o atual
            document.querySelectorAll('.nav-submenu').forEach(otherMenu => {
                if (otherMenu !== submenu) {
                    otherMenu.style.display = 'none';
                }
            });

            // Alterna a visibilidade do submenu atual
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
        });
    });
});
