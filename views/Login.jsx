const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <form action="/log" method="post">
        <fieldset disabled>
          <legend>Вход</legend>
          <div className="mb-3">
            <input placeholder="Ваша почта" name="email" type="email" id="disabledTextInput" className="form-control" />
          </div>
          <div className="mb-3">
            <input placeholder="Придумайте пароль" name="password" type="password" id="disabledTextInput" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Войти</button>
        </fieldset>
      </form>
    </Layout>
  );
};
