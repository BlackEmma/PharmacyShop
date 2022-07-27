module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Drugs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      picture: {
        type: Sequelize.TEXT,
      },
      title: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      currentPrice: {
        type: Sequelize.INTEGER,
      },
      priceOff: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Drugs');
  },
};
