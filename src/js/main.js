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
    });

    const header = document.getElementById('header'),
        menuOpen = document.getElementById('menu-open'),
        menuClose = document.getElementById('menu-close'),
        menu = document.getElementById('menu-mobile');
    let headerHeight;
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

    const submitBtn = document.getElementById('submit');

    function submitForm() {
        const form = document.getElementById('form');
        const formData = new FormData(form);

        // Проверка наличия значений в обязательных полях
        const name = formData.get('name');
        const tel = formData.get('tel');
        const email = formData.get('email');
    
        // Массив полей, которые должны быть заполнены
        const requiredFields = ['name', 'tel', 'email'];
    
        // Проверка заполненности обязательных полей
        let isValid = true;
    
        requiredFields.forEach(fieldName => {
            const fieldValue = formData.get(fieldName);
            const inputElement = form.querySelector(`[name="${fieldName}"]`);
    
            if (!fieldValue) {
                isValid = false;
                inputElement.classList.add('invalid');
            } else {
                inputElement.classList.remove('invalid');
            }
        });
    
        if (!isValid) {
            alert('Пожалуйста, заполните все обязательные поля (Имя, Телефон, E-mail).');
            return;
        }
   
        showModal('Успех', 'Заявка успешно отправлена!');

        setTimeout(() => {
            hideModal();
        }, 2000);
        // setTimeout(() => {
        //     document.body.removeChild(document.querySelector('.modal'));
        // }, 5000);
        // fetch('mailer.php', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.success) {
        //         alert('Заявка успешно отправлена!');
        //         form.reset();
        //         showModal('Успех', 'Заявка успешно отправлена!');
        //     } else {
        //         // alert('Произошла ошибка. Пожалуйста, повторите попытку позже.');

        //         showModal('Ошибка', 'Произошла ошибка. Пожалуйста, повторите попытку позже.');
        //     }
        // })
        // .catch(error => {
        //     console.error('Ошибка:', error);
        // });
    }
    submitBtn.addEventListener('click', submitForm);


    function showModal(title, message) {
        // Создать элементы модального окна
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';

        const modal = document.createElement('div');
        modal.className = 'modal';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const modalTitle = document.createElement('h2');
        modalTitle.textContent = title;

        const modalMessage = document.createElement('p');
        modalMessage.textContent = message;

        // Добавить элементы модального окна в DOM
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(modalMessage);
        modal.appendChild(modalContent);

        // Добавить оверлей и модальное окно в DOM
        modalOverlay.appendChild(modal);
        document.body.appendChild(modalOverlay);

        // Активировать CSS-переходы через задержку
        setTimeout(() => {
            modalOverlay.classList.add('visible');
            modal.classList.add('visible');
        }, 50);
    }

    function hideModal() {
        // Добавить класс для инициирования анимации закрытия
        const modalOverlay = document.querySelector('.modal-overlay');
        const modal = modalOverlay.querySelector('.modal');

        modalOverlay.classList.remove('visible');
        modal.classList.remove('visible');

        // Удалить оверлей и модальное окно из DOM после завершения анимации
        setTimeout(() => {
            document.body.removeChild(modalOverlay);
        }, 300); // Время анимации в миллисекундах (здесь 300 мс)
    }
})