const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    if (menu.style.transform === "scaleY(1)") {
        menu.style.transform = "scaleY(0)";
    } else {
        menu.style.transform = "scaleY(1)";
    }
});