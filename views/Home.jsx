const React = require('react');
const Layout = require('./Layout');
const Item = require('./Item');

module.exports = function Home({ arrDrugs, user }) {
  return (
    <Layout>
      {user ? (
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Аптека</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href={`/profile/${user.id}`}>Личный кабинет</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Выход</a>
                </li>
              </ul>
              <button type="button" className="btn btn-primary position-relative">
                <a href="/cart">Корзина</a>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  99+
                </span>
              </button>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Аптека</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/reg">Регистрация</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/log">Вход</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
      <section className="itemWeek">
        <h1>Товары недели</h1>
        {arrDrugs.map((el) => <Item drug={el} />)}
      </section>

      <section className="itemList">
        <h1>Лекарства в наличии</h1>
        {arrDrugs.map((el) => <Item drug={el} />)}
      </section>

    </Layout>
  );
};
