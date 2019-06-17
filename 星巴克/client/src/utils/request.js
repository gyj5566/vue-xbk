import axios from "axios"
import router from "../router/"
let request = axios.create({
    baseURL:"http://169.254.126.111:3000"
})
request.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {
            ...config.headers,
            token: window.localStorage.getItem("token")
        }
    }
}, (error) => {
    return Promise.reject(error);
})
request.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    return Promise.reject(error).catch(e => {
        let response = e.response
        let status=response.status
        if(status>=400){
            switch (status) {
                case 401:
                    router.push("/login")
                    break;
                default:
                    break;
            }
        }
        return response.data
    })
})



export default {
    get(url,params){
        return request.get(url,{
            params
        })
    },
    post(url,query){
        return request.post(url,query)
    }
}