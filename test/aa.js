function aa(str) {
    if(str&&Array.isArray(str)&&str.length>0){
        console.log('if')
    }else{
        console.log('else')
    }
}

aa(['123'])