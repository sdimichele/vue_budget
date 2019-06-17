<template>
  <div class="container">
    <h1>New Expense</h1>

     <ul>
      <li v-for="error in errors">
        {{ error }}
      </li>
    </ul>
    <div>
      Name: <input type="text" v-model="newExpenseName">
      Amount: <input type="text" v-model="newExpenseAmount">
      Comment: <input type="text" v-model="newExpenseComment"> 

  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
    </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div v-for="category in user.categories">
          <a v-on:click="newExpenseCategoryId = category.id" class="dropdown-item" href="#">{{category.name}}</a>
        </div>
      </div>

  </div>

      <button v-on:click="createExpense()">Create Expense</button>
    </div>


  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      expenses: [],
      currentExpense: {},
      user: {},
      newExpenseName: "",
      newExpenseAmount: "",
      newExpenseComment: "",
      newExpenseCategoryId: "",
      errors: []
    };
  },
  created: function() {
    axios.get("/api/expenses").then(response => {
      this.expenses = response.data;

    axios.get("/api/users").then(response => {
      this.user = response.data;
    });
  },
  methods: {

    createExpense: function() {
      var params = {
        name: this.newExpenseName,
        amount: this.newExpenseAmount,
        comment: this.newExpenseComment,
        category_id: this.newExpenseCategoryId
      };
      axios.post("/api/expenses", params).then(response => {
        this.$router.push("/");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>