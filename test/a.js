

function person(arg1,arg2){
    console.log(this.name)
    console.log(this)
    console.log(arg1,arg2)
 }

 var egg ={
    name:'王老师'
 }

 Function.prototype.newBind =function(obj,...arg){
    var that =this
    return function(){
        that.call(obj,...arg);
    }
 }
 person.newCall(egg,'xx','bb')




