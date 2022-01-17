'use strict';

const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UmiController extends Controller {
  async index() {
      const ctx = this.ctx;
      const app = this.app;
      const { Op, literal } = app.Sequelize;
      let { page_no, page_size, keyword } = ctx.query;
      page_no = page_no || 1;
      page_size = page_size || 5;
      const where = {};
      if (keyword) {
        where[Op.or] = [
          {
            name: { [Op.like]: `%${keyword}%` },
          },
        ];
  
      }
      const query = { where, offset: (page_no - 1) * page_size, limit: parseInt(page_size) };
      const { count, rows } = await ctx.model.UmiUsers.findAndCountAll(query);
  
      ctx.body = { data: { dataList: rows, count } };

   
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.UmiUsers.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { name, age } = ctx.request.body;
    const user = await ctx.model.UmiUsers.create({ name, age });
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    try{
      const user = await ctx.model.UmiUsers.findByPk(id);
      if (!user) {
        ctx.status = 404;
        return;
      }
  
      const { name, age, address } = ctx.request.body;
      await user.update({ name, age, address });
      ctx.body = { message:'success',code:200,data: user };
    }catch(e){
      ctx.body = { message:'fail',code:400};
      ctx.status = 400;
    }

  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.UmiUsers.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
}

module.exports = UmiController;
