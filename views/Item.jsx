const React = require('react');

module.exports = function Item() {
  return (
    <div className="card" style="width: 18rem;">
      <img src="..." className="card-img-top" alt="Здесь должна быть фоторафия лекарства" />
      <div className="card-body">
        <h5 className="card-title">Название лекарства</h5>
        <p className="card-text">Описание лекарства</p>
        <p className="card-text">Цена</p>
        <p className="card-text">Цена по карте</p>
        <a href="#" className="btn btn-primary">Купить</a>
      </div>
    </div>
  );
};
