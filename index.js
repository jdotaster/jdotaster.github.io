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

const registerScrollButtonEvents = () => {
    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            document.getElementById("scroll-icon").style.display = "none";
        } else {
            document.getElementById("scroll-icon").style.display = "block";
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    registerNavbarMenuEvents();
    registerScrollButtonEvents();
})

