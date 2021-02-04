function strToint(val) {
    if (Number(val) + '' === "NaN") {
        return "不符合"
    }
    let result = 0
    let arr = val.split("")
    for (let i = 0; i < arr.length; i++) {
        result = result * 10 + (arr[i] - '0')
    }
    return result

}

console.log(strToint("1111"))