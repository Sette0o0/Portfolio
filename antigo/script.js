function ajustarPaddingMain() {
    const navbar = document.querySelector("#navbar");
    const main = document.querySelector("body > main.container");
    const html = document.documentElement;

    const alturaNavbar = navbar.offsetHeight;

    // Aplica o padding no <main>
    main.style.paddingTop = `${alturaNavbar}px`;

    // Aplica o scroll-padding-top no <html> (para rolagem suave funcionar corretamente)
    html.style.scrollPaddingTop = `${alturaNavbar}px`;
}

window.addEventListener("DOMContentLoaded", ajustarPaddingMain);
window.addEventListener("resize", ajustarPaddingMain);
