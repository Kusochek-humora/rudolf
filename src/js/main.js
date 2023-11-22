'use strict';
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener("load", function () {
        // Скрыть прелоадер после полной загрузки страницы
        const preloader = document.getElementById("preloader"),
            progress = document.getElementById("progress");
        progress.addEventListener("animationend", function () {
            preloader.classList.add("fade-out");
            preloader.addEventListener("transitionend", function () {
                preloader.style.display = "none";

            });

        });
        document.body.classList.remove('preloader-activ');
    });;

})