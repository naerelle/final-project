document
    .querySelector(".fa-bars")
    .addEventListener("click", function () {
        document.querySelector(".hamburger-menu").classList.add("menu-open");
    });

document.querySelector(".fa-times").addEventListener("click", function () {
    document.querySelector(".hamburger-menu").classList.remove("menu-open");
});
