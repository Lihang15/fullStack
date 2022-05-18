import {create} from 'dva-core-ts'
import models from '../models/index'
import createLoading from 'dva-loading-ts'

// 1.创建实例
const app = create()
// 2.加载model对象
models.forEach(model=>{
    app.model(model)
})
// 3.启动dva
app.use(createLoading())
app.start()
// 4.导出dva数据
export default app._store