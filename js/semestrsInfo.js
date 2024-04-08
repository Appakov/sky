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