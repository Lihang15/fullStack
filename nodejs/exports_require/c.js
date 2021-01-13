function obj(){
    this.set = function(){
        console.log("set")
    }
    this.get = function(){
        console.log("get")
    }
}
module.exports = obj