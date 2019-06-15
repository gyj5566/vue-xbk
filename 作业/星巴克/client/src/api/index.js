import request from "../utils/request"
export default {
    getDetail: (list_type,options) => request.get(`/api/apply/${list_type}`, options),
    info: () => request.get("/api/user/info"),
    getHistory: (applicationNumber) => request.get("/api/task/history", {
        applicationNumber
    }),
    login: (phone,password) => request.post("/api/login", {
        phone,
        password
    }),
    register: (phone,authCode) => request.post("/api/register", {
        phone,
        password: authCode
    }),
    getList: (type,status) => request.get("/api/task/list", {
        page: 1,
        pageSize: 10,
        type,
        status,
        create_at: 0
    }),
    commitFile:(file)=>request.post("/api/upload",file)
}