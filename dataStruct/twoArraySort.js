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