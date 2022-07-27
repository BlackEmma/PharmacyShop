const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Drug extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Cart }) {
      Drug.belongsToMany(User, ({ foreignKey: 'drugId', through: Cart, otherKey: 'userId' }));
    }
  }
  Drug.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    picture: {
      type: DataTypes.TEXT,
    },
    title: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    currentPrice: {
      type: DataTypes.INTEGER,
    },
    priceOff: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Drug',
    tableName: 'Drugs',
  });
  return Drug;
};
