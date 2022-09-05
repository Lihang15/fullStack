

class mycache{
    constructor(){
        this.cache={};
    }
    add(cachename,value,default_time){
        this.cache[cachename]=value;
        let that = this
        if(default_time){
            setTimeout(function(){ 
                delete that.cache[cachename];
                },default_time)
        }
    }
    get(cachename){
      return this.cache[cachename];
    }
    delete(cachename){
        delete this.cache[cachename];
    }
}

exports.a = "123"


module.exports={
    mycache
}