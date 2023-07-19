// Responsive menu-bar

let menu = document.getElementById('menu-icon');
let navList = document.getElementById("navlist");

menu.addEventListener("click", () => { 
    menu.classList.toggle("bx-x");
    navList.classList.toggle("open");
});
