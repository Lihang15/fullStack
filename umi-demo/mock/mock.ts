

export default{
    'get /ds/list':function(req,res){
        const data = [
            {
              key: '1',
              id:1,
              name: '王立航',
              age: 18,
              address: '上海市',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              id:2,
              name: '李四',
              age: 42,
              address: '北京市',
              tags: ['loser'],
            },
            {
              key: '3',
              id:3,
              name: '张三',
              age: 32,
              address: '苏州市',
              tags: ['cool', 'teacher'],
            },
          ];
        res.json({
            data:data
        })
    }
}