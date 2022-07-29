module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Carts', [{
      userId: 1,
      drugId: 2,
      free: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      drugId: 2,
      free: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 2,
      drugId: 3,
      free: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      drugId: 4,
      free: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      drugId: 2,
      free: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 2,
      drugId: 2,
      free: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      drugId: 2,
      free: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Carts');
  },
};
