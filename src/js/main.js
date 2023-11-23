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


    // scroll header


    const header = document.getElementById('header');
    let headerHeight;
    const menuOpen = document.getElementById('menu-open'),
        menuClose = document.getElementById('menu-close'),
        menu = document.getElementById('menu-mobile');
    function stickyHeaderModify() {
        headerHeight = header.clientHeight;
        if (window.scrollY >= 1) {
            header.classList.add('scroll');
        }
        else {
            header.classList.remove('scroll');
        }
    }
    window.addEventListener('scroll', stickyHeaderModify);


    function openMenu() {

        menu.classList.add('open');
    }
    function closeMenu() {
        menu.classList.remove('open');
    }

    menuOpen.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
})