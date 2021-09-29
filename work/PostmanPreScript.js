//1.如果需要传token的接口，请把token的x-user-id 写到头上
let userid="null"
if(pm.request.getHeaders()["x-user-id"]){
    userid= pm.request.getHeaders()["x-user-id"]
}
// if(pm.request.getHeaders()["access-token"]){
//     userid= pm.request.getHeaders()["access-token"]
// }

console.log("X-userid：："+userid)
const randomStr = () => {
  const array = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let arrlength = array.length
  let str = ''
  let count = 0
  let item
  while (arrlength) {
    //保证均匀分布
    item = Math.floor(Math.random() * arrlength--)
    str += array.splice(item, 1)[0]
    if (count == 19) {
      break
    }
    count++
  }
  return str
}
const getTimeStamp = () => {
  return new Date().getTime()
}
//get param
const getParamToShaStr = (params) => {
  if (!params) {
    return 'param={}'
  }

  const tmp = Object.keys(params)
    .sort()
    .map((value) => {
      return value + '=' + params[value]
    })
  const result = 'param={' + tmp.join('&') + '}'
  // console.log('get param:', result)
  return result
}
//post(content-type为``application/x-www-form-urlencoded``或``multipart/form-data``的POST请求)进行拼接 param
const postMultipartFormToShaStr = (params) => {
  //当前params 是map比如 new Map([["a","wanglihang"],["c","18"],["file",{}]]) 需过滤掉文件 并排序
  if (!params) {
    return 'param={}'
  }
  const tmp = []
  params.forEach((v, k) => {
    if (typeof v == 'string') {
      tmp.push(k + '=' + v)
    }
  })
  tmp.sort()
  const result = 'param={' + tmp.join('&') + '}'
  return result
}
//psot json 请求  param
const postParamToShaStr = (params) => {
  if (!params) {
    return 'param={}'
  }
  const result = 'param=' + params
  // console.log('post param:', result)
  return result
}

//签名字符串
const signTmp = (param, szdpTimestamp, szdpNonce) => {
  // console.log("signTmp:"+ param + '&szdp-timestamp=' + szdpTimestamp + '&szdp-nonce=' + szdpNonce)
  return param + '&szdp-timestamp=' + szdpTimestamp + '&szdp-nonce=' + szdpNonce
}
//加密后的签名字符串
function SHA(str, userid = null) {
 const result= CryptoJS.HmacSHA256(str,userid).toString()
  return result
}
function addHeader(timeStamp,randomstr,result){
    pm.request.addHeader("szdp-timestamp:"+timeStamp)
    pm.request.addHeader("szdp-nonce:"+randomstr)
    pm.request.addHeader("szdp-sign-type:"+"0")
    pm.request.addHeader("szdp-sign:"+result)
}
if(pm.request.method=="GET"){
    let a = pm.request.url.query.toObject()
    let randomstr = randomStr()
    let timeStamp =  getTimeStamp()
    let getparam = getParamToShaStr(a)
    console.log("getParam::"+getparam)
    let signtmp = signTmp(getparam,timeStamp,randomstr)
    console.log("signtmp::"+signtmp)
     let result = SHA(signtmp,userid)
     addHeader(timeStamp,randomstr,result)
    console.log("签名:"+result)
}
// console.log(pm.request.getHeaders())
if(pm.request.method=="POST"){
    if(pm.request.getHeaders()['Content-Type']=="application/json"){
        let a = pm.request.body.raw
        let randomstr = randomStr()
        let timeStamp =  getTimeStamp()
        let getparam = postParamToShaStr(a)
        console.log("PostJsonParam::"+getparam)
        let signtmp = signTmp(getparam,timeStamp,randomstr)
        console.log("signtmp::"+signtmp)
        let result = SHA(signtmp,userid)
        addHeader(timeStamp,randomstr,result)
        console.log("签名:"+result)
    }
    
    if(pm.request.getHeaders()['Content-Type']=="multipart/form-data"){
        let obj={}
        let a = pm.request.body.formdata.all().forEach((v)=>{
           if(v.type!="file"){
               obj[v.key]=v.value
           }
        })
        let randomstr = randomStr()
        let timeStamp =  getTimeStamp()
        let getparam = getParamToShaStr(obj)
        console.log("FormDataParam::"+getparam)
        let signtmp = signTmp(getparam,timeStamp,randomstr)
        console.log("signtmp::"+signtmp)
        let result = SHA(signtmp,userid)
        addHeader(timeStamp,randomstr,result)
        console.log("签名:"+result)
    }
    if(pm.request.getHeaders()['Content-Type']=="application/x-www-form-urlencoded"){
        //todo
    }
}