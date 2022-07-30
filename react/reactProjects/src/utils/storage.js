export default {
    setToken(token){
        localStorage.setItem('access-token',token)
    },
    getToken(){
      return localStorage.getItem('access-token')
    },
    deleteToken(){
        localStorage.removeItem('access-token')
    }
    
}