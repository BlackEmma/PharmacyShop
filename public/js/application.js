//тут будет ко
const container = document.querySelector(".container");

container.addEventListener("click", async (event) => {
  if (event.target.classList.contains("buy")) {
    event.preventDefault();
    const id = event.target.id;
    console.log({ id });
    let formData = new FormData(); // имитируем форму
    formData.append("drugId", id.value);// заполняем псевдо-форму данными

    // const response = await fetch("/", {
    //   method: 'POST',
    //   headers: {
    //     'Content type': 'Application/json'
    // },
    //   body: JSON.stringify({
    //     drugId: id.value,
    //   }),
    // });
    const options = { method: "POST", formData };//создаем данные для fetch 
    const response = await fetch("/", options);// отправляем запрос с псевдо-формой fetch

    if (response.redirected) {
      const loginHtml = await response.text();
      document.body.innerHTML = loginHtml;
      return;
    }
    return;
  }
});
