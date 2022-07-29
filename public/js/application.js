// отлавливаем контейнер (в котором все-все лекарства на странице)
const container = document.querySelector('.container');
// отлавливаем счетчик на корзине
const cartSpanCount = document.querySelector('#span-count');

// навесили слушатель событий на контейнер
container.addEventListener('click', async (event) => {
  // если клик произошел по кнопке...
  if (event.target.classList.contains('buy')) {
    // ...то отменяем стандартное поведение...
    event.preventDefault();
    // ...и достаём id лекарства, по кнопке которого кликнули
    const { id } = event.target;

    // кидаем фетч на нашу корневую (домашнюю страницу) и в боди посылаем id лекарства
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify({
        drugId: id,
      }),
    });

    // проверяем наш ответ на наличие редиректа (т.е. если пользователь не залогинен)
    if (response.redirected) {
      const loginHtml = await response.text();
      // распаковываем наш ответ (в случае редиректа нам прилетает html-страница для логина)
      document.body.innerHTML = loginHtml;
      // и заменяем всё тело документа на прилетевшую страничку
    } else {
      // если пользователь залогинен
      // то нам в ответ прилетает json с объектом, из которого достаем значение счетчика
      const { count } = await response.json();
      // достаем имеющийся сейчас счетчик корзины и преобразовываем его к числу
      let cartCount = Number(cartSpanCount.textContent);
      // прибавляем к счетчику из корзины наш прилетевший от сервера счетчик
      cartCount += count;
      // заменяем значение счетчика на корзине
      cartSpanCount.innerText = cartCount;
    }
  }
});
