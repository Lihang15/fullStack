// Including the crypto and fs modules 
var crypto = require('crypto'); 
// var fs = require('fs'); 
  
// Reading the Public Key 
// pubK = fs.readFileSync('pub.key').toString(); 
  
// Passing the text to be encrypted using private key 
// var buf = Buffer.from('wanglihang', 'utf8'); 
  
// Encrypting the text 
// let pubK = '-----BEGIN PUBLIC KEY-----'
// secretData = crypto.publicEncrypt(pubK, buf); 
  
// Printing the encrypted text 
// console.log(secretData); 
  
// Reading the Private key 
// privK = fs.readFileSync('priv.key').toString(); 
  
// Decrypting the text using public key 
// origData = crypto.privateDecrypt(privK, secretData); 
// console.log(); 
  
// Printing the original content 
// console.log(origData);

function decryptString (ciphertext, privateKey) { 
  
    // privateDecrypt() method with its parameters 
  
    // publicEncrypt() method with its parameters 
    const decrypted = crypto.privateDecrypt( 
        privateKey, Buffer.from(ciphertext, "base64")); 
   
     return decrypted.toString("utf8"); 
   
} 

function encryptString (plaintext, publicKey) { 
    
  
    // publicEncrypt() method with its parameters 
    const encrypted = crypto.publicEncrypt( 
        publicKey, Buffer.from(plaintext)); 
  
    return encrypted.toString("base64"); 
}

let abc = encryptString('wanglihang',`-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAOkGJ9CjzaEdytY45EL4oUVmHsFuc3kn
+SXzwi6kYHH7oPe5ywzhkGaH36v2+Rj4B7QZc5UtH36l7jmHjGgez5kCAwEAAQ==
-----END PUBLIC KEY-----
`)
console.log(abc)
console.log(decryptString(abc,
`-----BEGIN RSA PRIVATE KEY-----
MIIBOwIBAAJBAOkGJ9CjzaEdytY45EL4oUVmHsFuc3kn+SXzwi6kYHH7oPe5ywzh
kGaH36v2+Rj4B7QZc5UtH36l7jmHjGgez5kCAwEAAQJARj23xLmLo3Rijx6JF/Lw
UgYNYUtU/YFiJeGLeBnOhKy8wmdQaQc5PhhIY6ARka1uW+S46ZGCcuk9hB2CYWsS
8QIhAPTGYe5YcNKLu/jw4hL4kpFp7pZXAC8jhBpmIDmLam0NAiEA87XRyxo5HoKD
xEL//nQSKaxkx4UvGk+aVpZ/RylMQb0CIQC7VuZ3FGttSZNZiYuN93++GbSIjhfO
/EDML6O0RzbyNQIgFDYA5wIOuJwER3Ny/Wws0W3tkapW5KyzVPj4JzOiklUCIQCN
Xz+hY265Qkxvc1O9/Jnz6r8Fhn0cKnV6K1MARd1MGQ==
-----END RSA PRIVATE KEY-----`))