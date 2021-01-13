export default{
    'get /ds/list':function(req,res){
        res.json({
            data:[1,2,3,4],
            maxNum:4
        })
    }
}