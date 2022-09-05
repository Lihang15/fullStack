function compareVersion(version1,version2){
                     
    var arr1=version1.split('.');
    var arr2=version2.split('.');
    //将两个版本号拆成数字 
    var minL= Math.min(arr1.length,arr2.length);  
    var pos=0;        //当前比较位
    var diff=0;        //当前为位比较是否相等
    
    //逐个比较如果当前位相等则继续比较下一位
    while(pos<minL){
        diff=parseInt(arr1[pos])-parseInt(arr2[pos]);  
        if(diff!=0){  
          break;  
        } 
        pos++;                  
    }
    
    if (diff>0) {
        return 1
    }else if (diff==0) {
        return 0
    }else{
        return -1
    }
 }
 console.log(compareVersion('0.20.9','0.20.8'))
 