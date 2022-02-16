'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Course = app.model.define('courses', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    course_name:STRING,
    course_type:STRING,
    
  }, {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    paranoid: true,
    engine: 'InnoDB',
  });
  
  Course.associate = () => {
  };
  return Course;
};