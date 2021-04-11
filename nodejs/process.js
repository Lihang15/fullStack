var arg1 ,arg2

// process.argv.forEach(function(val, index, array) {
//     console.log(index + ': ' + val);
//  });
let args = process.argv.splice(2)
console.log(args)
args.forEach((value)=>{
console.log(value)
})
