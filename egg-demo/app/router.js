'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  const apiRouter = router.namespace('/api');
  apiRouter.get('/tt', controller.users.test);
  router.get('/users/get', controller.users.index);
  router.get('/users/getSession', controller.users.getSession);
  router.get('/users/page', controller.users.searchPage);
  router.get('/test', controller.users.test);
  router.get('/insert', controller.users.create1);
  router.get('/setRedis', controller.users.opRedis);

  router.resources('/users/add', '/users', controller.users.create);
  router.resources('/users/add', '/umi_users', controller.umi);

};
