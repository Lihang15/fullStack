
var permutation = function(s){
    let ans = []
    // 按字母排序
    s = s.split('').sort((a,b)=>a-b).join('')
    // curr开始字符， store待匹配字符
    const dfs = (curr,store)=>{
        if(store.length===0){ 
            ans.push(curr)
            return
        }
        for(let i=0;i<store.length;i++){
            // 去除重复 比如 abbc a匹配bc 还会再匹配bc 不符合的继续回溯
            if(i>0&&store[i]===store[i-1]) continue
            // curr增加 store删除  store删没了 放入符合的结果
            dfs(curr+store[i],store.slice(0,i)+store.slice(i+1))
        }
    }
    dfs('',s)
    return ans;
}

let str = 'abbc'
permutation(str).forEach(item=>console.log(item))