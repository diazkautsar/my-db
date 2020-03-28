'use strict';
module.exports = (sequelize, DataTypes) => {
  class ListProduct extends sequelize.Sequelize.Model {
    static associate (models) {
      ListProduct.belongsTo(models.User)
      ListProduct.belongsTo(models.Category)
    }
  }

  ListProduct.init({
    productName: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  })

  return ListProduct;
};