const tabsFunc = () => {  // инкапсулируем...
    // ссылки табуляторов
    const tabs = document.querySelectorAll('.card-detail__change')
    // ссылка на заголовок товара (смартфон)
    const tabsTitle = document.querySelector('.card-details__title')
    // ссылка на цену товара (смартфон)
    const tabsPrice = document.querySelector('.card-details__price')
    // ссылка на фото товара (смартфон)
    const tabsImage = document.querySelector('.card__image_item')
    //  ccылка на title вкладки браузера 
    const titlePage = document.querySelector('title')

    // параметры моделей смартфона
    const tabsOption = [
        {
            name: "Graphite",
            namePage: "iPhone 13 Pro Графитовый",
            memory: '128',
            price: 60000,
            image: 'img/iPhone-graphite.webp'
        },
        {
            name: "Silver",
            namePage: "iPhone 13 Pro Серебристый",
            memory: '256',
            price: 65000,
            image: 'img/iPhone-silver.webp'
        },
        {
            name: "Sierra Blue",
            namePage: "iPhone 13 Pro Небесно-голубой",
            memory: '512',
            price: 70000,
            image: 'img/iPhone-sierra_blue.webp'
        }
    ]

    // смена контента
    const changeContent = (index) => {
        // меняем описание товара
        const cur = tabsOption[index]
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${cur.memory}GB ${cur.name}`
        tabsPrice.textContent = `${cur.price}₽`
        // меняем заголовок страницы
        titlePage.textContent = cur.namePage
        // меняем фото товара
        tabsImage.setAttribute('src', cur.image)
    }
    // переключатель табов
    const changeActiveTabs = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            // снимаем подсветку со всех
            tab.classList.remove('active')
            // устанавливаем подсветку на кликнутом
            if (index == indexClickedTab) {
                tab.classList.add('active')
            }
        })
        // меняем контент в соответствии с выбором
        changeContent(indexClickedTab)
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeActiveTabs(index)
        })
    })

    // установка первоначального выбора модели (№ 0 при загрузке страницы)
    changeContent(0)
}
tabsFunc()