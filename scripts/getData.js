// запрос данных через fetch c jsonplaceholder.typicode.com
const getData = () => {
    const data = fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            if (response.ok) return response.json()
            else throw new Error('Данные были получены с ошибкой ')
        })
        .then(data => {
            // выполняется при успешном скачивании
            console.log(data)
        })
        .catch((error) => {
            // выполняется при ошибке
            console.error(error.message)
        })
        .finally(() => {
            // выполняется всегда
            console.log('finally')
        })
}
getData()