const scrollFunc = () => { // инкапсулируем...
    // доступ к первому ребенку с тегом a первого родителя с классом .header-menu__item
    // const link = document.querySelector('.header-menu__item a')
    // доступ к списку узлов (nodelist) первых детей с тегом a родителей с классом .header-menu__item
    // - ссылки пунктов меню
    const links = document.querySelectorAll('.header-menu__item a, .card-details__link-characteristics')
    /* вариант №2 (объединение/добавление nodelist)
      const linkCharacteristics = document.querySelector('.card-details__link-characteristics')
      const newArray = [...links, linkCharacteristics]
      и далее, вместо links обрабатываем newArray
     */

    // подключение полифила плавного скролла
    // https://www.npmjs.com/package/seamless-scroll-polyfill
    seamless.polyfill();

    links.forEach((element) => {
        element.addEventListener('click', (event) => {
            // отключить действия по умолчанию по клику мыши (переход по ссылке)
            event.preventDefault()

            // id элемента, на который нужно перейти по нажатию пункта меню
            const id = element.getAttribute('href').slice(1)
            // ссылка на элемент с заданным id
            const section = document.getElementById(id)
            if (section) {  // для имеющих секцию
                // устанавливаем плавный переход
                // section.scrollIntoView({   // на Safari не работает
                // ... а это должно работать везде (кроссбраузерный)
                seamless.elementScrollIntoView(section, {
                    behavior: 'smooth',
                    block: 'start'
                })
            } else {
                seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }
        })
    })
}
scrollFunc()