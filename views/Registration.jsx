const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <form action="/reg" method="post">
        <fieldset disabled>
          <legend>Регистрация</legend>
          <div className="mb-3">
            <input placeholder="Введите ваше имя" name="name" type="text" id="disabledTextInput" className="form-control" />
          </div>
          <div className="mb-3">
            <input placeholder="Ваша почта" name="email" type="email" id="disabledTextInput" className="form-control" />
          </div>
          <div className="mb-3">
            <input placeholder="Придумайте пароль" name="password" type="password" id="disabledTextInput" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Отправить</button>
        </fieldset>
      </form>
    </Layout>
  );
};
