const React = require('react');
const Layout = require('./Layout');

module.exports = function CartList({ arrDrugs }) {
  return (
    <Layout>
      <table className="table">
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
              <td>{drug.priceOff}</td>
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
                (acc, drug) => acc + drug.priceOff,
                0,
              )}`}

            </th>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};
