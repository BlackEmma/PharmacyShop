const React = require('react');
const Layout = require('./Layout');
const Item = require('./Item');

module.exports = function Home({ arrDrugs, count, userId }) {
  return (
    <Layout userId={userId} count={count}>
      <div className="container">
        <section className="itemWeek">
          <h1>Товары недели</h1>
          {arrDrugs.map((el) => <Item key={el.id} drug={el} userId={userId} />)}
        </section>
        <section className="itemList">
          <h1>Лекарства в наличии</h1>
          {arrDrugs.map((el) => <Item key={el.id} drug={el} userId={userId} />)}
        </section>
      </div>
    </Layout>
  );
};
