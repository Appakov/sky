document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.group__content-btn');
    const windows = document.querySelectorAll('.group__window');

    // По умолчанию активируем первый таб и его контент
    tabs[0].classList.add('active');
    windows[0].classList.add('active');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Если таб уже активен, то ничего не делаем
            if (tab.classList.contains('active')) return;

            // Убираем класс active у всех табов и окон
            tabs.forEach(t => t.classList.remove('active'));
            windows.forEach(w => w.classList.remove('active'));

            // Добавляем класс active только к выбранному табу и его окну контента
            tab.classList.add('active');
            windows[index].classList.add('active');
        });
    });
});
