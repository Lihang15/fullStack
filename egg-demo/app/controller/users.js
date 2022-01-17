const Controller = require('egg').Controller;
const crypto = require('crypto');

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.session.username = "wanglihang"
    ctx.body = await ctx.service.userService.find(123)
  }
  async opRedis() {
    const { ctx, app } = this
    await app.redis.set('aa:bb:cc:dd','221222')
    ctx.body =  'redis success'
  }
  async searchPage() {
    const ctx = this.ctx;
    let {page_no,page_size}= ctx.query
    let query = {offset:(page_no-1)*page_size,limit:parseInt(page_size)}
    ctx.body = await ctx.model.User.findAll(query)
  }
  async getSession() {
    const ctx = this.ctx;
    
    ctx.body = ctx.session.username
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
  }
  async test(){
    const ctx = this.ctx
    // user = await ctx.model.User.findByPk(2)
    // const user = await ctx.model.User.findOne({where:{name:'wanglihang'}}) 
    // const [user]  = await ctx.model.User.findOrCreate(
    //   {
    //     where:{name:'小王'}
    //   }
    // )
    // const {count,rows}  = await ctx.model.User.findAndCountAll(
    //   {
    //     where:{
    //       name:'wanglihang'
    //     },
    //     offset:0,
    //     limit:2
    //   },
    // )
    // const [results,metadata] = await ctx.model.query("select * from users join roles on users.id = roles.user_id")
    // const Users= await ctx.model.query("select * from users where name like 'w%'",{
    //   model:ctx.model.User,
    //   mapToModel:true
    // })
  
    // const results = await ctx.model.User.findAll({
    //   include:[
    //     {
    //       model:ctx.model.Role,
    //       require:true,
    //     }
    //     ]
    //   })
    const results = await ctx.model.User.findAll({
      include:[
        {
          model:ctx.model.Course,
          require:true,
        }
        ]
      })
    ctx.status = 200
    ctx.body = results
  }
  async create() {
    const ctx = this.ctx;
    const { name, age } = ctx.request.body;
    const user = await ctx.model.User.create({ name, age });
    ctx.status = 201;
    ctx.body = user;
  }ß
  async create1() {
    const ctx = this.ctx;
    const user_password = crypto.createHash('SHA256').update('Rt123456!').digest('hex');
    // const user = await ctx.model.User.create({ name:'heihei',age: 18 });
    ctx.status = 201;
    ctx.body = user_password;
  }
  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const { name, age } = ctx.request.body;
    await user.update({ name, age });
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
}

module.exports = UserController;