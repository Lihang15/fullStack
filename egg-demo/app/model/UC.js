'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const UC = app.model.define('u_c', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id:INTEGER,
    course_id:INTEGER,
    
  }, {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    paranoid: true,
    engine: 'InnoDB',
  });
  
  UC.associate = () => {
  };
  return UC;
};