var App = Vue.extend({});

var Home = Vue.extend({
    template : "#home-template"
});

var List = Vue.extend({
    template : "#list-template"
});


var router = new VueRouter();

router.map({
    '/': {
        component: Home
    },
    '/list': {
        component: List
    }
});

router.start(App, '#app');