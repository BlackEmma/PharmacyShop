const React = require('react');
const Layout = require('./Layout');

module.exports = function CartList({ arrDrugs, userId }) {
  return (
    <Layout userId={userId}>
      <section id="table">
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">Название</th>
              <th>{'   '}</th>
              <th>{'   '}</th>
              <th>{'   '}</th>
              <th>{'   '}</th>
              <th>{'   '}</th>
              <th>{'   '}</th>
              <th scope="col">Цена</th>
            </tr>
          </thead>
          <tbody>
            {arrDrugs.map((drug) => (
              <tr key={drug.id}>
                <td>{drug.title}</td>
                <td>{'   '}</td>
                <td>{'   '}</td>
                <td>{'   '}</td>
                <td>{'   '}</td>
                <td>{'   '}</td>
                <td>{'   '}</td>
                <td>{drug['Users.Cart.free'] ? 0 : drug.priceOff}</td>
              </tr>
            ))}
          </tbody>
          <tbody>
            <tr>
              <th>{'   '}</th>
              <th>{'   '}</th>
              <th>{'   '}</th>
              <th>{'   '}</th>
              <th>{'   '}</th>
              <th>{'   '}</th>
              <th>{'   '}</th>
              <th scope="col">
                {`Итого: ${arrDrugs.reduce(
                  (acc, drug) => acc + (drug['Users.Cart.free'] ? 0 : drug.priceOff),
                  0,
                )}`}

              </th>
            </tr>
          </tbody>
        </table>
      </section>
      <button id='postbtn' type="button" className="btn btn-secondary">Оформить заказ</button>
    </Layout>
  );
};
