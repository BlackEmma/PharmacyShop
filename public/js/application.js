const form = document.querySelector('#formEdit');

form.addEventListener('submit', async (event) => {
  const {
    name, birthday, city, phone, action,
  } = event.target;

  const response = await fetch(action, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name.value,
      birthday: birthday.value,
      city: city.value,
      phone: phone.value,
    }),
  });
  const data = await response.text();
  console.log(data);
});
