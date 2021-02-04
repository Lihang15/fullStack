function series(arr) {
    let a = []
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]
            a.push(sum)
        }
    }
    let max = a[0]
    for (let i = 0; i < a.length; i++) {
        if (max < a[i]) {
            max = a[i]
        }

    }
    console.log(a)
    return max
}
console.log(series([1, 3, 4]))