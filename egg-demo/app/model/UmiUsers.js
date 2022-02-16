'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Umi = app.model.define('umi_users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    age: INTEGER,
    address: STRING,

  }, {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    paranoid: true,
    engine: 'InnoDB',
  });


  return Umi;
};
