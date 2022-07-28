const React = require('react');

module.exports = function Layout({ children, userId }) {
  return (
    <html lang="en">
      <head>
        {console.log(userId)}
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" />
        <title>Аптека</title>
      </head>
      <body>
        {userId ? (
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Аптека</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" />
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href={`/profile/${userId}`}>Личный кабинет</a>
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
        {children}
      </body>
    </html>
  );
};
