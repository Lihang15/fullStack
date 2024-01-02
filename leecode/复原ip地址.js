var restoreIpAddresses = function(s) {
    const res = [];
    
    const backtrack = (start, path) => {
        if (path.length === 4 && start === s.length) {
            // 已经构建了一个符合的ip地址 存结果 
            res.push(path.join('.'));
            return;
        }
        // 循环尝试每个IP地址段，
       // 如果满足条件，将当前段加入 path 数组中
        for (let i = 1; i <= 3; i++) {
            if (start + i <= s.length) {
                const segment = s.slice(start, start + i);
                if (parseInt(segment) <= 255 && (segment.length === 1 || segment[0] !== '0')) {
                    //不符合回溯继续找
                    backtrack(start + i, path.concat(segment));
                }
            }
        }
    };
    
    backtrack(0, []);
    return res;
};

let str = '25525511135'
const result = restoreIpAddresses(str)

console.log(result);