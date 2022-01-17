/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1638422601943_7660';

  // add your middleware config here
  config.middleware = ['counter'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'egg-t',
    username:'root',
    password:'wanglihang123456'
  };
 
  // config.redis = {
  //   client: {
  //     port: 6379,
  //     host: '127.0.0.1',
  //     password: '123456',
  //     db: 1,
  //   },
  //   agent: true,
  // };
  config.testEnv={
    currentEnv:'default'
};
config.security={
  csrf : {
    enable: false,
  }
}
  return {
    ...config,
    ...userConfig,
  };
};
