// запрос данных через fetch c jsonplaceholder.typicode.com
const getData = () => {
    // ссылка на перечень дополнительно предлагаемых товаров
    const list = document.querySelector('.cross-sell__list')
    // кнопка "показать ещё"
    const btm = document.querySelector('.cross-sell__add')

    // по сколько карточек выводить в группе
    let stack = 4
    // счетчик ввывода групп
    let count = 1

    // отрисовка данных на странице
    const render = (data) => {
        // очистили список предложений
        list.innerHTML = ''

        // построение карточек предложений из data
        data.forEach(item => {
            list.insertAdjacentHTML('beforeend', `
                <li >
                <article class="cross-sell__item">
                    <img class="cross-sell__image" src="./${item.photo}" alt="${item.id}">
                    <h3 class="cross-sell__title">${item.name}</h3>
                    <p class="cross-sell__price">${item.price}₽</p>
                    <button type="button" class="button button_buy cross-sell__button">Купить</button>
                </article>
                </ li>
            `)
        });
    }

    // ножницы данных
    const sliceArray = (data, index) => {
        return data.slice(0, index)
    }

    // обновление данных
    const changeData = (data) => {
        const newStack = stack * count

        // передаем на отрисовку порциями
        render(sliceArray(data, newStack))

        if (data.length > newStack) {
            count++
        } else {
            // убираем кнопку
            btm.style.display = 'none'
        }

    }

    // запрос данных с сервера:
    // const data = fetch('https://jsonplaceholder.typicode.com/todos')
    // запрос данных из локального файла (проблемотичен) - м/из облака
    const getGoods = () => {
        let pathJson = window.location.pathname
        if (pathJson == '/index.html') pathJson = '/'

        fetch(pathJson + 'cross-sell-dbase/dbase.json')
            .then(response => {
                if (response.ok) return response.json()
                else throw new Error('Данные были получены с ошибкой ')
            })
            .then(data => {
                // выполняется при успешном скачивании
                changeData(data)
            })
            .catch((error) => {
                // выполняется при ошибке
                console.error(error.message)
            })
        /* используется редко
        .finally(() => {
            // выполняется всегда
            console.log('finally')
        })
        */
    }

    btm.addEventListener('click', getGoods)

    getGoods()
}
getData()