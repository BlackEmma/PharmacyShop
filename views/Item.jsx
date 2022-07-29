const React = require('react');

module.exports = function Item({ drug, userId }) {
  return (
    <section>
      {userId ? (
        <div className="card" style={{ width: '18rem' }}>
          <img src={`${drug.picture}`} className="card-img-top" alt="Здесь должна быть фоторафия лекарства" />
          <div className="card-body">
            <h5 className="card-title">{drug.title}</h5>
            <p className="card-text">{drug.description}</p>
            <p className="card-text">Цена: {drug.currentPrice} руб.</p>
            <p className="card-text">Цена по карте: {drug.priceOff} руб.</p>
            <a href="#" className="btn btn-primary">Купить</a>
          </div>
        </div>
      ) : (
        <div className="card" style={{ width: '18rem' }}>
          <img src={`${drug.picture}`} className="card-img-top" alt="Здесь должна быть фоторафия лекарства" />
          <div className="card-body">
            <h5 className="card-title">{drug.title}</h5>
            <p className="card-text">{drug.description}</p>
            <p className="card-text">Цена: {drug.currentPrice} руб.</p>
            <p className="card-text">Цена по карте: {drug.priceOff} руб.</p>
            <a href="/log" className="btn btn-primary">Купить</a>
          </div>
        </div>
      )}
    </section>
  );
};
