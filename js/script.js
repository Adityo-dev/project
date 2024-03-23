function toggleMenu() {
    var menu = document.getElementById("navItems");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.hamburger, .hamburger *')) {
        var dropdowns = document.getElementsByClassName("menu-items");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "flex") {
                openDropdown.style.display = "none";
            }
        }
    }
}