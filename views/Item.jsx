const React = require('react');

module.exports = function Item({ drug }) {
  return (

    <div className="card" style={{ width: '18rem' }}>
      <img src={`${drug.picture}`} className="card-img-top" alt="Здесь должна быть фоторафия лекарства" />
      <div className="card-body">
        <h5 className="card-title">{drug.title}</h5>
        <p className="card-text">{drug.description}</p>
        <p className="card-text">{drug.currentPrice}</p>
        <p className="card-text">{drug.priceOff}</p>
        <a href="#" className="btn btn-primary">Купить</a>
      </div>
    </div>
  );
};
