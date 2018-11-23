import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

const state = {
    count:1
}

const mutations = {
    add(state,n){
        state.count+=n
    },
    reduce(state){
        state.count--
    }
}

const getters = {
    count:()=>{
        return state.count+=10
    }
}

const actions = {
    addAction:(context)=>{
        context.commit("add",10)
        setTimeout(()=>{
            context.commit("reduce")
        },3000)
    },
    reduceAction(commit){
        commit("reduce")
    }
}

export default new vuex.Store({
    state,
    mutations,
    getters,
    actions
})