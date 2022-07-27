module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Baga',
      email: 'Baga@mail.ru',
      password: '231dds1243hrj234hjh3jrhj34rj',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Lexa',
      email: 'Lexa@mail.ru',
      password: '43ft433ed233reft344egr12r34rj',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Dagestan',
      email: 'Dagestan@mail.ru',
      password: 'rre32344f21efgy35yhtgf2rgfg2rj',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down(queryInterface) {
    await queryInterface.bulkInsert('Users');
  },
};
