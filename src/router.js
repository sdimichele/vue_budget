import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ExpensesIndex from './views/ExpensesIndex.vue';
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/',name: 'home', component: ExpensesIndex},
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/expenses", name: 'expenses-index', component: ExpensesIndex}
  ]
})