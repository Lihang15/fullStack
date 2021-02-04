function series(arr) {
    let a = []
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i]
        a.push(sum)
        for (let j = i + 1; j < arr.length; j++) {
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
console.log(series([-1, 1, 2, -3, 3, 4]))