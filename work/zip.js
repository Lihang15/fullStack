const fs = require('fs');
// const a = fs.createWriteStream();
// console.log(a);
const JSZip = require('jszip');
var zip = new JSZip();
zip.file("Hello.txt", "Hello World\n");
var img = zip.folder("images");
img.file("smile.png", fs.readFileSync('./home-1.png'), {base64: true});
zip.generateAsync({type:"nodebuffer"})
.then(function(content) {
    // see FileSaver.js
    require("fs").writeFile("hello.zip", content, function(err){/*...*/});
});