function findArr(arr) {
    let map1 = new Map()
    arr.map((value) => {
        if (map1.has(value)) {
            map1.set(value, map1.get(value) + 1)
        } else {
            map1.set(value, 1)
        }
    })

    let length = parseInt(arr.length / 2)

    let result = 0
    map1.forEach((value, key) => {
        console.log(value)
        if (value > length) {
            result = key
        }
    })
    return result
}

let arr = [1, 2, 3, 3, 3, 4, 5, 3, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
console.log(findArr(arr))