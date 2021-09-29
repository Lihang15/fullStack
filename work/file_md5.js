const path = require('path');
const fs = require('fs');

const crypto = require('crypto');
const buffer = fs.readFileSync(path.join('C://Users//lihang//Desktop', '//resource//test.png'));
const hash = crypto.createHash('md5');
hash.update(buffer, 'utf8');
const md5 = hash.digest('hex');
console.log(md5)

let str ='1'
let str1 = '1'
console.log(str1===str)