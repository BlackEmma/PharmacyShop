const React = require('react');
const Layout = require('./Layout');
const Item = require('./Item');

module.exports = function Home({ arrDrugs, userId }) {
  return (
    <Layout userId={userId}>
      <section className="itemWeek">
        <h1>Товары недели</h1>
        {arrDrugs.map((el) => <Item key={el.id} drug={el} userId={userId} />)}
      </section>

      <section className="itemList">
        <h1>Лекарства в наличии</h1>
        {arrDrugs.map((el) => <Item key={el.id} drug={el} userId={userId} />)}
      </section>
    </Layout>
  );
};
