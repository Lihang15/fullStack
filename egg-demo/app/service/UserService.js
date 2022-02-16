// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const ctx = this.ctx;
    const query = { limit: ctx.query.limit, offset: ctx.query.offset };
    let body= await ctx.model.User.findAll(query);
    return body+uid+"tsetService"
  }
}

module.exports = UserService;