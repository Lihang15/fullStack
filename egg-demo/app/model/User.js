'use strict';

const UserService = require("../service/UserService");

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: {type:STRING(30),get(){
      const rawValue = this.getDataValue('name')
      return rawValue?rawValue.toUpperCase():null
    }},
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  }, {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    paranoid: true,
    engine: 'InnoDB',
      hooks: {
        beforeValidate: (user, options) => {
          if(user.age===18){
            return Promise.reject(new Error("18 no"));
          }
        },
        // afterValidate: (user, options) => {
        //   user.age = 1001;
        // }
      },
  });
  User.associate = () => {
  User.hasMany(app.model.Role,{ foreignKey: 'user_id', sourceKey: 'id'});
  User.belongsToMany(app.model.Course,{through:app.model.UC,sourceKey:'id',sourceKey:'id'})
  };
  return User;
};