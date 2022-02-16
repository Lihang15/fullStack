'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx,app} = this;
    const time = app.currentTime()
    ctx.body = 'hi, egg'+app.config.testEnv.currentEnv
  }
}

module.exports = HomeController;
