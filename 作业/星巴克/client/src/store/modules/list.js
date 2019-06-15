import api from "../../api/"
const state = {
    list:[]
}

const getters = {

}

const mutations = {
    setData(state,res){
        state.list=res
    }
}

const actions = {
    getData({commit},obj) {
        let { status, type } = obj
        api.getList(type,status).then(res => {
            commit("setData",res.data)
        })
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}