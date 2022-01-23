// плавный аккордеон
const accordeon = () => {
    // ссылки на клавиши аккордеона
    const chItems = document.querySelectorAll('.characteristics__item')

    // игра на аккордеоне
    const chPlay = (chIndex = -1) => {

        chItems.forEach((item, index) => {
            // кнопка клавиши
            const chButton = item.querySelector('.characteristics__title')
            // содержимое клавиши
            const chContent = item.querySelector('.characteristics__description')
            // закрытие всех раскрытых содержимых, кроме выбранного
            if (index !== chIndex) {
                chButton.classList.remove('active')
                chContent.classList.remove('open')
                chContent.style.height = ''

            } else { // для выбранного
                if (chButton.classList.contains('active')) {
                    // закрываем раскрытое                
                    chContent.style.height = ''
                } else {
                    // раскрываем содержимое по нажатию                
                    // для списка  для срабатывания свойства transition из css 
                    // нужно точно указать высоту высоту раскрытого блока
                    // chContent.scrollHeight 
                    // для идентификации "открытого" состояния маркируем классом .open
                    chContent.style.height = chContent.scrollHeight + 'px'
                }
                chButton.classList.toggle('active')
                chContent.classList.toggle('open')
            }
        })
    }
    // закрываем все при первом открытии страницы
    chPlay()

    // подключение событий выбора 
    chItems.forEach((item, index) => {
        // кнопка клавиши
        const chButton = item.querySelector('.characteristics__title')
        // содержимое клавиши
        const chContent = item.querySelector('.characteristics__description')

        // подключаем события по нажатию
        chButton.addEventListener('click', () => {
            // отработка текущего и закрытие всех прочих открытых
            chPlay(index)
        })
    })

}
accordeon()