const React = require('react');
const Layout = require('./Layout');
const Item = require('./Item');
const FreeItem = require('./FreeItem');

module.exports = function Home({ arrDrugs, count, userId }) {
  return (
    <Layout userId={userId} count={count}>
      <div className="container">
        <section className="itemWeek">
          <h3>Товары недели</h3>
          {arrDrugs.map((el) => <FreeItem key={el.id} drug={el} />)}
        </section>
        <section className="itemList">
          <h3>Лекарства в наличии</h3>
          {arrDrugs.map((el) => <Item key={el.id} drug={el} />)}
        </section>
      </div>
    </Layout>
  );
};
