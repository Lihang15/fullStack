import {req,reqPut} from '../util/request'
import {message} from 'antd'

export function getRemoteList(params){
   const response = req('/api/umi_users',{method:'get',params})
    return response

}

export async function editUser({values,id}){
    const response = await reqPut(`/api/umi_users/${id}`,{method:'put',data:values})
    if(parseInt(response.code)!==200){
        message.error("修改失败");
        
     }
    return response
}