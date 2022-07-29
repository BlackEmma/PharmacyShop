const React = require('react');
const Layout = require('./Layout');
const Item = require('./Item');
const FreeItem = require('./FreeItem');

module.exports = function Home({ arrDrugs, count, userId }) {
  return (
    <Layout userId={userId} count={count}>
      <div className="container">
      <h3>Товары недели</h3>
        <section className="itemWeek">
          
          {arrDrugs.slice(0, 3).map((el) => <FreeItem key={el.id} drug={el} />)}
        </section>


        <h3>Все лекарства</h3>
        <section className="itemList">
          {arrDrugs.map((el) => <Item key={el.id} drug={el} />)}
        </section>
      </div>
    </Layout>
  );
};
