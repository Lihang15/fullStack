
function a(){
    console.log("xaxaxa")
}
function people(){
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
}

module.exports =people
