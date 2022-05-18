import axios from 'axios'
export default function requests(url,data={},type='GET'){
    if(type==='GET'){
        return axios.get(url,{params:data})
    }
    if(type==='POST'){
        return axios.post(url,data)
    }

}