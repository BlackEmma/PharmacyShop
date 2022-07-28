const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ arrDrugs }) {
  return (
    <Layout>
      <table className="table">
        <thead>
          <tr>
            <th> </th>
            <th>  </th>
            <th scope="col">{`Итого:${arrDrugs.reduce((acc, drug) => acc + drug.priceOff)}`}</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th scope="col">Название</th>
            <th>  </th>
            <th scope="col">Цена</th>
          </tr>
        </thead>
        <tbody>
          {arrDrugs.map((drug) => (
            <tr>
              <td>{drug.title}</td>
              <td />
              <td>{drug.priceOff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};
