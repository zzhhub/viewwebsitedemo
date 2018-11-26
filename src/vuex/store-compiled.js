import vue from 'vue';
import vuex from 'vuex';
vue.use(vuex);

var state = {
    count: 1
};

var mutations = {
    add: function add(state, n) {
        state.count += n;
    },
    reduce: function reduce(state) {
        state.count--;
    }
};

var getters = {
    count: function count() {
        return state.count += 10;
    }
};

var actions = {
    addAction: function addAction(context) {
        context.commit("add", 10);
        setTimeout(function () {
            context.commit("reduce");
        }, 3000);
    },
    reduceAction: function reduceAction(commit) {
        commit("reduce");
    }
};

export default new vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
});

//# sourceMappingURL=store-compiled.js.map