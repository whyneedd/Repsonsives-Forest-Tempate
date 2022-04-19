const navy = document.querySelector(".nav-bar");
const humbger = document.querySelector(".humbger");

humbger.onclick = function () {
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

