import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ExpensesIndex from './views/ExpensesIndex.vue';
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
<<<<<<< HEAD
import Expenses from "./views/Expenses.vue";
import ExpensesNew from "./views/ExpensesNew.vue";
=======
import CategoriesShow from './views/CategoriesShow.vue';

>>>>>>> 82a2c63f41b3b52c48afed5df9fa69e79997d0a3



Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/',name: 'home', component: ExpensesIndex},
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/expenses/new", name: 'expenses-new', component: ExpensesNew},
    { path: "/expenses", name: 'expenses', component: Expenses}
    { path: "/categories/:id", name: 'categories-show', component: CategoriesShow}


  ]
})