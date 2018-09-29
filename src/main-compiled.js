import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import axios from 'axios';
import 'iview/dist/styles/iview.css';
import '../my-theme/index.less';

Vue.use(VueRouter);
Vue.use(iView);
Vue.prototype.$http = axios;

// 路由配置
var RouterConfig = {
    mode: 'history',
    routes: Routers
};
var router = new VueRouter(RouterConfig);

router.beforeEach(function (to, from, next) {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(function (to, from, next) {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

var vm = new Vue({
    el: '#app',
    router: router,
    render: function render(h) {
        return h(App);
    }
});

//# sourceMappingURL=main-compiled.js.map