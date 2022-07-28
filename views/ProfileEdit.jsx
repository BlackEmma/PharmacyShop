const React = require('react');
const Layout = require('./Layout');

module.exports = function ProfileEdit({ userId }) {
  return (
    <Layout userId={userId}>
      <form id="formEdit" action={`/profile/${userId}/edit`} method="put">
        <div className="mb-3">
          <input type="text" name="name" className="form-control" placeholder="Введите Ваше имя" id="disabledTextInput" />
        </div>
        <div className="mb-3">
          <input type="date" name="birthday" className="form-control" id="disabledTextInput" />
        </div>
        <div className="mb-3">
          <input type="text" name="city" className="form-control" placeholder="Введите Ваш город" id="disabledTextInput" />
        </div>
        <div className="mb-3">
          <input type="text" name="phone" className="form-control" placeholder="Введите Ваш телефон" id="disabledTextInput" />
        </div>
        <div className="mb-3">
          <button id={`${userId}`} className="btn btn-primary" type="submit">
            Отправить данные
          </button>
        </div>
      </form>
    </Layout>
  );
};
