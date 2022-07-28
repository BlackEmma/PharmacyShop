module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Drugs', [{
      picture: 'img/aspirin.jpeg',
      title: 'Аспирин',
      description: 'Лекарства для снятия боли и температуры',
      currentPrice: 150,
      priceOff: 109.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      picture: 'img/analgin.jpg',
      title: 'Анальгин',
      description: 'Обезболивающие средства',
      currentPrice: 70,
      priceOff: 55.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      picture: 'img/acc.jpg',
      title: 'АЦЦ',
      description: 'Препараты для разжижения мокроты',
      currentPrice: 350,
      priceOff: 279.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      picture: 'img/arbidol.jpeg',
      title: 'Арбидол',
      description: 'Противовирусные средства',
      currentPrice: 290,
      priceOff: 209.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      picture: 'img/citramon.jpg',
      title: 'Цитрамон',
      description: 'Средства от боли и воспалений',
      currentPrice: 180,
      priceOff: 115.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      picture: 'img/jod.jpg',
      title: 'Йод',
      description: 'Дерматологические средства',
      currentPrice: 50,
      priceOff: 35.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },
  async down(queryInterface) {
    await queryInterface.bulkInsert('Drugs');
  },
};
