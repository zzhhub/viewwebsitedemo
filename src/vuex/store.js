import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

const state = {
    count:1,
    name:"nick"
}

const mutations = {
    add(state,payload){
        state.count+=payload
    },
    reduce(state,payload){
        state.count-=payload
    },
    avrage(state,payload){
        state.count/=payload
    }
}

const getters = {
    getcount:(state)=>{
        return state.name+" has "+state.count +" Apples "
    }
}

const actions = {
    addAction:(context,value)=>{
        context.commit("add",value)
    },
    reduceAction(context,value){
        context.commit("reduce",value)
    }
}

export default new vuex.Store({
    state,
    mutations,
    getters,
    actions
})
