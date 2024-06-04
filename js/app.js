const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

// Если меняются системные настройки, меняем тему
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme === "dark") {
            btnDarkMode.classList.add("dark-mode-btn--active");
            document.body.classList.add("dark");
            localStorage.setItem("darkMode", "dark");
        } else {
            btnDarkMode.classList.remove("dark-mode-btn--active");
            document.body.classList.remove("dark");
            localStorage.setItem("darkMode", "light");
        }
    });

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};

// 2. Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

// Если меняются системные настройки, меняем тему
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme === "dark") {
            btnDarkMode.classList.add("dark-mode-btn--active");
            document.body.classList.add("dark");
            localStorage.setItem("darkMode", "dark");
        } else {
            btnDarkMode.classList.remove("dark-mode-btn--active");
            document.body.classList.remove("dark");
            localStorage.setItem("darkMode", "light");
        }
    });

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};

//Модальнок окно для бургера
const burger = document.querySelector('.burger')
const modal = document.querySelector('#my-modal')
const closeModal = document.querySelector('#close-my-modal-btn')
const render = document.querySelector('#my-modal .modal__box')

burger.addEventListener('click', () => {
    modal.classList.add('open')
})
closeModal.addEventListener('click', () => {
    modal.classList.remove('open')
})
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("open")
    }
});
render.addEventListener('click', e => {
    e._isClickWithInModal = true;
})
modal.addEventListener('click', e => {
    if (e._isClickWithInModal) return;
    e.currentTarget.classList.remove('open');
})

//courses
document.addEventListener('DOMContentLoaded', () => {
    const allCourses = document.querySelectorAll('.courses-card');
    const btnProgramming = document.querySelector('.courses-btn-programming');
    const btnLanguages = document.querySelector('.courses-btn-languages');
    const btnCompLiteracy = document.querySelector('.courses-btn-computer-grammer');

    btnProgramming.addEventListener('click', () => filterCourses('programming'));
    btnLanguages.addEventListener('click', () => filterCourses('language'));
    btnCompLiteracy.addEventListener('click', () => filterCourses('comp-literacy'));

    function filterCourses(category) {
        allCourses.forEach(card => {
            if (card.classList.contains(category)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
document.querySelectorAll('.courses-link').forEach(button => {
    button.addEventListener('click', function () {
        const contactType = this.getAttribute('data-contact');
        if (contactType === 'whatsapp') {
            const phoneNumber = this.getAttribute('data-phone');
            window.location.href = `https://wa.me/${phoneNumber}`;
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const resultBtn = document.querySelector('.testing__link-result');
    const assignedBtn = document.querySelector('.testing__link-assigned');
    const resultContent = document.querySelector('.testing__cards-result');
    const assignedContent = document.querySelector('.testing__cards-naz');

    // Set initial active tab
    resultBtn.classList.add('active');
    resultContent.classList.add('active');

    // Event listener for result button
    resultBtn.addEventListener('click', function () {
        resultBtn.classList.add('active');
        assignedBtn.classList.remove('active');
        resultContent.classList.add('active');
        assignedContent.classList.remove('active');
    });

    // Event listener for assigned button
    assignedBtn.addEventListener('click', function () {
        assignedBtn.classList.add('active');
        resultBtn.classList.remove('active');
        assignedContent.classList.add('active');
        resultContent.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const btnsStart = document.querySelectorAll('.testing__card-overlay');
    
    const modal = document.querySelector('.modal-start');

    // Функция для отображения модального окна
    function openModal() {
        modal.style.opacity = 1;
        modal.style.visibility = 'visible';
    }

    // Функция для скрытия модального окна
    function closeModal() {
        modal.style.opacity = 0;
        modal.style.visibility = 'hidden';
    }

    // Добавление обработчика событий ко всем карточкам
    btnsStart.forEach(card => {
        card.addEventListener('click', openModal);
    });

    // Добавление возможности закрыть модальное окно по клику вне его содержимого
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Добавление возможности закрыть модальное окно по клику вне его содержимого
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });
});
