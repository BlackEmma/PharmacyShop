const React = require('react');
const Layout = require('./Layout');

module.exports = function CartList({ arrDrugs, userId }) {
  return (
    <Layout userId={userId}>
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
