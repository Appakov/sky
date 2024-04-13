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
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-learn-info");
    const modals = document.querySelectorAll(".popup");
    const popupClose = document.querySelectorAll('.popup__close-btn')

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            modals[index].classList.add('open')
        });
    });
    popupClose.forEach((btn, ind) => {
        btn.addEventListener('click', () => {
            modals[ind].classList.remove('open')
        })
    })
});
const testingCompleteBtn = document.querySelector('.testing-complete__btn')
const popupСompleteСloseBtn = document.querySelector('.popup-complete__close-btn')
const PopupComplete = document.querySelector('.popup-complete')

testingCompleteBtn.onclick = () => {
    PopupComplete.classList.add('open')
}
popupСompleteСloseBtn.onclick = () => {
    PopupComplete.classList.remove('open')
}
