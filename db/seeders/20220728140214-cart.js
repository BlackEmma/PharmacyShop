module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Carts', [{
      userId: 1,
      drugId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      drugId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 2,
      drugId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      drugId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      drugId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 2,
      drugId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      drugId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Carts');
  },
};