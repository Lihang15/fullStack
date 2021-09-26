var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");
//获取20位随机字符串 szdp-nonce
let randomStr =()=>{
    let array =["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let arrlength = array.length
    let str =""
    let count=0
    let item
    while(arrlength){
        //保证均匀分布
        item = Math.floor(Math.random()*arrlength--)
        str+=array.splice(item,1)[0]
        if(count==19){
            break
        }
        count++
    }
    return str
}

//获取当前时间时间戳  szdp-timestamp
let getTimeStamp=()=>{
    return new Date().getTime()
}

//get post(content-type为``application/x-www-form-urlencoded``或``multipart/form-data``的POST请求)进行拼接 param
let getParamToShaStr=(params)=>{
    if(!params){
        return
    }
    let arr =[]
    for(let i in params){
       arr.push(i)
    }
    arr.sort()
    let str = ""
    arr.forEach((value,index)=>{
        if(index==arr.length-1){
            str+=value+"="+params[value]+"}"
            return
        }
        str+=value+"="+params[value]+"&"
    })
   let result = "param={"+str
   return result
}

//psot json 请求  param
let postParamToShaStr=(params)=>{
    if(!params){
        return
    }
    let result ="param="+JSON.stringify(params)
    return result
}

let signTmp=(param,szdpTimestamp,szdpNonce)=>{
    return "param="+param+"szdp-timestamp="+szdpTimestamp+"szdp-nonce"+szdpNonce
}


function SHA(str,userid="null"){
    console.log(userid.toString())
    return CryptoJS.HmacSHA256(str, userid.toString()).toString();
    
}
let timee = getTimeStamp()

let data = {a1:3,a2:1,
    a3:"aaa"}
console.log(postParamToShaStr(data))
// console.log(randomStr().length)
getParamToShaStr({a3:3,
    a2:1,a1:"xx"})
 console.log(SHA("xaxaxaxaxas",1)) 

 function a(xx={}){
      if(!xx){
          console.log(x)
      }
 }
 a()

 const postMultipartFormToShaStr = (params)=>{
    if(!params){
      return 'param={}'
    }
    const tmp=[]
    params.forEach((v,k) =>{
      if(typeof v == "string"){
        tmp.push(k+'='+v)
      }
    })
    tmp.sort()
    console.log(tmp)
    const result = 'param={'+tmp.join('&')+'}'
    return result
    //  console.log("multipart1:"+typeof params.get('file'))
    //  console.log("multipart2:"+typeof params.get('file_md5'))
  }
  
  let xxx =new Map([["a","wanglihang"],["c","18"],["file",{}]])

  postMultipartFormToShaStr(xxx)

  console.log(jwt.decode('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMDE5NjUxIiwiaWQiOjEwMTk2NTEsImluZGV4Ijo3LCJleHAiOjE2MjkwODQ1MjV9.BzqfBPDZUzBeBDTRDgqPyloX_RK9IV4xtSf7QICTEeu_Z8Mtk0fz7iC-f_647lOlFrIfj8P9h-exHI8RVHBjag').id)
   console.log(postParamToShaStr=({"username":1000})
   ) 