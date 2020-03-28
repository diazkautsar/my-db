'use strict';
module.exports = (sequelize, DataTypes) => {
  class Category extends sequelize.Sequelize.Model {
    static associate (models) {
      Category.hasMany(models.ListProduct)
    }
  }

  Category.init({
    name: {
      type: DataTypes.STRING
    }
  }, {
    sequelize
  })

  return Category;
};