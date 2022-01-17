'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
// };
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.routerPlus = {
  enable:true,
  package:'egg-router-plus'
};
exports.redis = {
  enable: true,
  package: 'egg-redis',
}