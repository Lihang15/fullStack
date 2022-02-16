import request from 'umi-request';

export async function req(url,params){
    const response = await request.get(url,params)
    return response

}

export async function reqPut(url,params){
    const response = await request.put(url,params)
    return response

}