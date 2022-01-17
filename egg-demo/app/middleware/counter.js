module.exports=options=>{
    return async (ctx,next)=>{
        if(ctx.session.conuter){
            ctx.session.conuter++
        }else{
            ctx.session.conuter=1
        }
        await next();
    }
}