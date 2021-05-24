// function strToint(val) {
//     if (Number(val) + '' === "NaN") {
//         return "不符合"
//     }
//     let result = 0
//     let arr = val.split("")
//     for (let i = 0; i < arr.length; i++) {
//         result = result * 10 + (arr[i] - '0')
//     }
//     return result

// }


// function strToInt(val) {
//     if (val[0] != '+' && val[0] != '-' && (val[0] <= '0' || val[0] >= '9')) {
//         return '不符合'
//     }
//     let index = 0;
//     let sum = 0;
//     let postive = true;
//     if (val[0] == '+') {
//         index++;
//     } else if (val[0] == '-') {
//         index++;
//         postive = false;
//     }
//     while (index < val.length) {
//         if (val[index] == '0') {
//             index++;
//         }
//     }
//     while (index < val.length) {
//         sum *= 10
//         if (val[index] >= '0' && val[index] <= '9') {
//             sum += val[index] - '0';
//             index++;
//         } else {
//             return '不符合'
//         }
//     }
//     return postive ? sum : -sum;
// }

// console.log(strToInt("-000001111"))



