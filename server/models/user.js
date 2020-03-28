'use strict';
const { hashPassword } = require('../helpers/password')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate (models) {
      User.hasMany(models.ListProduct)
    }
  }

  User.init({
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2],
            msg: 'minimum length of username is 2'
          },
          notNull: {
            args: true,
            msg: 'username cannot be empty'
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            args: true,
            msg: 'invalid email format'
          },
          notNull: {
            args: true,
            msg: 'email cannot be empty'
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [8],
            msg: 'minimum length of password 8 character'
          },
          notNull: {
            args: true,
            msg: 'password cannot be empty'
          }
        }
      }
    }, {
      sequelize,
      hooks: {
        beforeCreate: (user, options) => {
          user.password = hashPassword(user.password)
        }
      }
    })

  return User;
};