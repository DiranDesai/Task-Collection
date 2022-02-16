const menuBtn = document.querySelector("#menu-btn");
const sideBar = document.querySelector("#sidebar");
const main = document.querySelector("#main");



menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sideBar.classList.toggle("sidebar-active");
    main.classList.toggle("main-active");
});