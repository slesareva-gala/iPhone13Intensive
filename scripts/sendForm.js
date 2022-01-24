const sendForm = () => {
    // кнопка "купить с доставкой"
    const btmOpenModal = document.querySelector('.card-details__button_delivery')
    // название текущего товара
    const cardDetailsTitle = document.querySelector('.card-details__title')
    // форма оформления доставки
    const modal = document.querySelector('.modal')
    // заголовок формы оформления доставки
    const modalTitle = modal.querySelector('.modal__title')
    // кнопка закрытия формы
    const btmModalClose = modal.querySelector('.modal__close')
    // содержание формы
    const modalForm = modal.querySelector('form')

    // открытие формы
    btmOpenModal.addEventListener('click', () => {
        modal.style.display = 'flex'
        modalTitle.textContent = cardDetailsTitle.textContent
    })
    // закрытие формы
    btmModalClose.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    // отправка формы
    modalForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const labels = modal.querySelectorAll('.modal__label')

        // сохраняем введенные данные в объект     
        const sendMessage = {}
        labels.forEach(label => {
            const span = label.querySelector('span')
            const input = label.querySelector('input')

            sendMessage[span.textContent] = input.value
        })
        // и отправляем
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendMessage),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(() => {
                // после отправки, закроем форму
                modal.style.display = 'none'
                // и очистим
                modalTitle.textContent = ''
                labels.forEach(label => {
                    label.querySelector('input').value = ''
                })


            });
    })
}
sendForm()