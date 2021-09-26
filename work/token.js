const {decode} = require('jsonwebtoken') 


const getUserIdByJwtToken = () => {
   let token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5OTk0NjM5OSIsImlkIjo5OTk0NjM5OSwibmlja25hbWUiOiJaLU9ORV83MTI2ODk3MDcxMSIsImluZGV4Ijo5Nzg1LCJwaW4iOjk5OTQ2Mzk5LCJleHAiOjE2MzAwNDU0MzJ9.E5G-RN6YctwjaopQG53fsFZgwypANYBXWW5ezIoOD3goFqo77xT_hjy2_bExaStSLlXzwc1VQhJmiwgaTkm8RA"
    const userid = decode(token).id
    console.log(userid)
  
  }


  getUserIdByJwtToken()