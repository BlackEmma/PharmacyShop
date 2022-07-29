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
    }, {
      picture: 'img/spazmalgon.jpg',
      title: 'Спазмалгон',
      description: 'Препараты для лечения боли и спазмов',
      currentPrice: 269,
      priceOff: 229.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      picture: 'img/ketonal.jpg',
      title: 'Кетонал',
      description: 'Средства от боли и воспалений',
      currentPrice: 575,
      priceOff: 489.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      picture: 'img/met.jpg',
      title: 'Метфорвел',
      description: 'Препараты, повышающие чувствительность клеток к инсулину',
      currentPrice: 56,
      priceOff: 49.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      picture: 'img/gemoroi.jpg',
      title: 'Проктоседил мазь',
      description: 'Лекарства для избавления от геморроя',
      currentPrice: 445,
      priceOff: 401.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      picture: 'img/boyar.jpeg',
      title: 'Боярышник',
      description: 'Лекарство от душевных заболеваний',
      currentPrice: 123,
      priceOff: 103.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      picture: 'img/gex.jpeg',
      title: 'Гексорал табс',
      description: 'Препараты для лечения инфекций и воспалений лор-органов',
      currentPrice: 299,
      priceOff: 228.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      picture: 'img/friend.jpg',
      title: 'с друзьями ПОТУСИН',
      description: 'Препараты для тусовок с друзьями',
      currentPrice: 420,
      priceOff: 420.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      picture: 'img/antiister.jpg',
      title: 'АНТИИСТЕРИН',
      description: 'Препараты против истерики',
      currentPrice: 777,
      priceOff: 666.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      picture: 'img/army.jpg',
      title: 'от армии ОТКОСИН',
      description: 'Препараты для уклонистов',
      currentPrice: 1500,
      priceOff: 1488.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      picture: 'img/socks.jpg',
      title: 'носки НАХОДИН',
      description: 'Препараты для поиска носков',
      currentPrice: 5000,
      priceOff: 4200.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      picture: 'img/whale.jpg',
      title: 'жену к маме ОТПРАВИН',
      description: 'Препараты для любимой жены',
      currentPrice: 666,
      priceOff: 666.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },
  async down(queryInterface) {
    await queryInterface.bulkInsert('Drugs');
  },
};
