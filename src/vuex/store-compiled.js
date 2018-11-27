import vue from 'vue';
import vuex from 'vuex';
vue.use(vuex);

var state = {
    count: 1,
    name: "nick"
};

var mutations = {
    add: function add(state, payload) {
        state.count += payload;
    },
    reduce: function reduce(state, payload) {
        state.count -= payload;
    },
    avrage: function avrage(state, payload) {
        state.count /= payload;
    }
};

var getters = {
    getcount: function getcount(state) {
        return state.name + " has " + state.count + " Apples ";
    }
};

var actions = {
    addAction: function addAction(context, value) {
        context.commit("add", value);
    },
    reduceAction: function reduceAction(context, value) {
        context.commit("reduce", value);
    }
};

export default new vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
});

//# sourceMappingURL=store-compiled.js.map