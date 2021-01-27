function twoArrayFind(array, target) {
    let flag = false
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j])
            if (array[i][j] == target) {
                flag = true
            }
        }
    }
    array[0][0] = 20
    target = 100
    return flag
}

let array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
]
let target = 8

console.log(twoArrayFind(array, target))
console.log(array, target)