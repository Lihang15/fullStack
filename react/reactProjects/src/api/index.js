import requests from '../utils/requests'
//通过代理服务器发请求 将服务转发到localhost：8000上 在proxy：localhost：8000
export const login = (username,password)=>requests('/react_login',{username:username,password:password},"GET")