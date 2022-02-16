'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User1 = app.model.define('users_c', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING
  }, {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    paranoid: true,
    engine: 'InnoDB',
  });
  User1.associate = () => {
  User1.hasOne(app.model.Role,{ foreignKey: 'user_id', sourceKey: 'id'});
   
  };
  return User1;
};