const React = require('react');
const Layout = require('./Layout');

module.exports = function Home() {
  return (
    <Layout>

      <section className="itemWeek">
        <h1>Товары недели</h1>
        {arr.map()}
      </section>

      <section className="itemList">
        <h1>Лекарства в наличии</h1>
        {arr.map()}
      </section>

    </Layout>
  );
};
