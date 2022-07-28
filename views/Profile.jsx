const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({ userId, user }) {
  return (
    <Layout userId={userId}>
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://okeygeek.ru/wp-content/uploads/2016/07/images.png" className="card-img-top" alt="Фото профиля" />
        <div className="card-body">
          <p className="card-text">
            Имя:
            {user.name}
          </p>
          <p className="card-text">
            Почта:
            {user.email}
          </p>
          <p className="card-text">
            Дата рождения:
            {user.birthday}
          </p>
          <p className="card-text">
            Город:
            {user.city ? user.city : 'Город не указан'}
          </p>
          <p className="card-text">
            Телефон:
            {user.phone ? user.phone : 'Телефон не указан'}
          </p>
          <a href="/profile/:id/edit" className="btn btn-primary">Изменить профиль</a>
        </div>
      </div>
    </Layout>
  );
};
