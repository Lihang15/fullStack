//数组转成层结构['a','b','c'] value=123  返回{a:{b:{c:123}}}

const f = (arr, value)=> {
        let result = {}
        arr.reduce((prev, cur, index)=> {
            if (index == arr.length - 1) {
                prev[cur] = value
                return prev[cur]
            }
            prev[cur] = {}
            return prev[cur]
        }, result)
        console.log(result)
    }
    
    f(['a', 'b', 'c'], '123')


    // let obj = {

    // }
    // obj['a'] = {}

    // obj['a']['b'] = {}
    // console.log(obj)