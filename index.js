let menuIsOpen = false;

const registerNavbarMenuEvents = () => {
    const navbarMenuButton = document.getElementById("navbar-menu-button");
    navbarMenuButton.addEventListener("click", () => {
        menuIsOpen = !menuIsOpen;
        const menu = document.getElementById("navbar-menu");
        if (menuIsOpen) {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    registerNavbarMenuEvents();
})

