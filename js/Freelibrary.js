document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.querySelector('.library-select');
    const searchButton = document.getElementById('searchButton');
    const searchQueryInput = document.getElementById('searchQuery');
    const books = document.querySelectorAll('.library-book');
    const noResultsMessage = 'По вашему запросу ничего не найдено';

    let isFirstLoad = true; // Флаг для отслеживания первой загрузки страницы

    selectElement.addEventListener('change', function (e) {
        const category = e.target.value;

        books.forEach(book => {
            if (book.getAttribute('data-category') === category || category === "") {
                book.style.display = ''; // Показать книгу, если она соответствует категории
            } else {
                book.style.display = 'none'; // Скрыть книгу, если она не соответствует категории
            }
        });

        isFirstLoad = false; // После выбора категории флаг изменяется на false
    });

    searchButton.addEventListener('click', function () {
        const searchQuery = searchQueryInput.value.toLowerCase();
        let found = false;

        books.forEach(book => {
            const title = book.querySelector('.library-title').textContent.toLowerCase();
            if (title.includes(searchQuery) && searchQuery !== '') {
                book.style.display = ''; // Показать книгу, если найдено совпадение
                found = true;
            } else {
                book.style.display = 'none'; // Иначе скрыть книгу
            }
        });

        if (!found && searchQuery !== '') {
            alert(noResultsMessage); // Показать сообщение, если ничего не найдено
        }
    });

    // Если страница загружается или обновляется и пользователь еще не выбрал категорию,
    // отображаем книги по умолчанию
    window.addEventListener('load', function () {
        if (isFirstLoad) {
            books.forEach(book => {
                if (book.dataset.category === 'Anatomy') {
                    book.style.display = '';
                } else {
                    book.style.display = 'none';
                }
            });
        }
    });
});