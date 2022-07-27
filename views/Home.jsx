const React = require('react');
const Layout = require('./Layout');
const { Item } = require('./Item');

module.exports = function Home({ arrDrugs }) {
  return (
    <Layout>

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
