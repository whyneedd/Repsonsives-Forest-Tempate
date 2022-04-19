const navy = document.querySelector(".nav-bar");
const humbger = document.querySelector(".humbger");
const humbger__menu = document.querySelector(".humbger__menu");


humbger.onclick = function () {
    humbger.classList.toggle("active");
    humbger__menu.classList.toggle("active");

}

humbger__menu.onclick = function () {
    humbger__menu.classList.toggle("active");
    humbger.classList.toggle("active");

}

window.onscroll = function () {
    var scrolY = window.scrollY;

    if (scrolY >= 100) {
        navy.classList.add("scroll-active");
    } else {
        navy.classList.remove("scroll-active");
    }
}

var loading;

function ShowPages() {
    loading = setTimeout(ShowLoad, 5000);

}

function ShowLoad() {
    document.querySelector(".loading1").style.display = "none";
    document.querySelector(".pages").style.display = "block";

}