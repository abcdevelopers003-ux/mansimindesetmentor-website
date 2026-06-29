
function toggleMenu() {
    document.getElementById("nav").classList.toggle("show");
}

/* Menu auto close after click */

document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav").classList.remove("show");
    });
});
