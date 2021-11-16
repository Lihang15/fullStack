//数组转成层结构['a','b','c'] value=123  返回{a:{b:{c:123}}}

const f = (arr, value)=> {
        var result = {}
        arr.reduce((prev, cur, index)=> {
            if (index == arr.length - 1) {
                prev[cur] = value
                return prev[cur]
            }
            prev[cur] = {}
            return prev[cur]
        }, {})
        console.log(JSON.stringify(result))
    }
    
    f(['a', 'b', 'c', 'd', 'e','f'], '123')