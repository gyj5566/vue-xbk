import alertMessage from "../components/alertmessage.vue"
export default {
    install(Vue) {
        Vue.component("Header",()=>import("../components/header.vue"))
        Vue.component("Item", () => import("../components/item.vue"))
        Vue.component("User", () => import("../components/user.vue"))
        Vue.component("Piece", () => import("../components/piece.vue"))
        Vue.component("Footer", () => import("../components/footer.vue"))
        let AlertClass=Vue.extend(alertMessage);
        let AlertComponent = new AlertClass()
        AlertComponent.$mount()
        document.body.appendChild(AlertComponent.$el)
        Vue.prototype.$alerta=(text)=>{
            AlertComponent.show(text)
        }
    }
}