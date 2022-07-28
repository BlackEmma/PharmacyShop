const React = require('react');
const Layout = require('./Layout');

module.exports = function ProfileEdit({ userId}) {
  return (
    <Layout>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" placeholder="Введите Ваше имя" />
      </div>
      <div className="form-floating">
        <input type="date" className="form-control" />
      </div>
      <div className="form-floating">
        <input type="text" className="form-control" placeholder="Введите Ваш город" />
      </div>
      <div className="form-floating">
        <input type="text" className="form-control" placeholder="Введите Ваш телефон" />
      </div>
      <div>
      <a href="/profile/:id" className="btn btn-primary">Отправить данные</a>
      </div>
    </Layout>
  );
};
