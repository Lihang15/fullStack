function replaceStrSpace(str) {
    let arr = str.split('')
    let newarr = arr.map((value) => {
        if (value == ' ') {
            value = '20%'
        }
        return value
    })
    console.log(newarr)
    let newstr = newarr.join('')
    return newstr
}

function replaceStrSpace1(str) {
    let newstr = str.replace(/ /g, "20%")
    return newstr
}

var str = "aaa bbb c d"
console.log(str)
//console.log(replaceStrSpace(str))
console.log(replaceStrSpace1(str))