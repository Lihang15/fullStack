//两个排序数组 合并成一个排序数组
function arrSort(arr1, arr2) {
    var [i,j] = [0,0];
    let newArr = [];
    while(i < arr1.length || j <arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++
        } else if (arr1[i] > arr2[j]) {
            newArr.push(arr2[j])
            j++
        } else {
            if(arr1[i]) newArr.push(arr1[i]);
            if(arr2[j]) newArr.push(arr2[j]);
            i++;
            j++
        }
    }
    return newArr
}

let arrs = arrSort([2,4,6,7], [1,2,3,5,8,9,10,33,44,49]);

console.log(arrs);


const arr = [1,2,3,4,0,0,0]
const arr1 = [4,5,6]
// 将arr1合并到arr 并排序
const f = (arr,m,arr1,n)=>{
    for(let i=0; i<n; i++){
        arr[m+i] = arr1[i]
    }
    arr.sort((a,b)=>a-b)
    return arr
}

console.log(f(arr,4,arr1,3));