function openMenu() {
    document.getElementById("side-bar").classList.add("open");
    document.getElementById("menu-overlay").classList.add("active");
}

function closeMenu() {
    document.getElementById("side-bar").classList.remove("open");
    document.getElementById("menu-overlay").classList.remove("active");
}
