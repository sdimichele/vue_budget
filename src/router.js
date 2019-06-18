import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ExpensesIndex from './views/ExpensesIndex.vue';
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import CategoriesIndex from './views/CategoriesIndex.vue';
import ExpensesNew from "./views/ExpensesNew.vue";
import CategoriesShow from './views/CategoriesShow.vue';





Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/',name: 'home', component: ExpensesIndex},
    { path: "/expenses", name: 'expenses-index', component: ExpensesIndex},
    { path: "/expenses/new", name: 'expenses-new', component: ExpensesNew},
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/categories", name: 'categories-index', component: CategoriesIndex},
    { path: "/categories/:id", name: 'categories-show', component: CategoriesShow}
  ]
})