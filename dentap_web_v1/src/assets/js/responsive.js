function showSidebar() {
    const element = document.body;

    if (window.innerWidth <= 768) {
        element.classList.add("sidebar-gone");
    } else {
        element.classList.remove("sidebar-gone");
    }
}

showSidebar();

window.addEventListener("resize", showSidebar);

