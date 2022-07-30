// 包含n个action函数  真正的处理函数  通过connect 和reducer关联起来

export const setHeadrTitle =(headerTitle)=>({type:'set_header',data:headerTitle})