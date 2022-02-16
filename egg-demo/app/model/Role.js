'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Role = app.model.define('roles', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id:INTEGER,
    role_name:STRING,
    
  }, {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    paranoid: true,
    engine: 'InnoDB',
  });
  
  Role.associate = () => {
    Role.belongsTo(app.model.User, { foreignKey: 'user_id', sourceKey: 'id'});
    Role.belongsTo(app.model.User1, { foreignKey: 'user_id', sourceKey: 'id'});
  };
  return Role;
};