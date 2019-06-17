<template>
  <div class="container">
    <h1>New Expense</h1>
    <div>
      Name: <input type="text" v-model="newExpenseName">
      Amount: <input type="text" v-model="newExpenseAmount">
      Comment: <input type="text" v-model="newExpenseComment">
      

      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <ul>
            <li v-for="category in categories">
              {{ user.category }}
            </li>
          </ul>
        </div>
      </div>

            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>



      Category: <input type="text" v-model="newExpenseCategory">
      




      <button v-on:click="createExpense()">Create Expense</button>
    </div>
    <h1>All Expenses</h1>
    <div v-for="expense in expenses">
      <h2>{{ expense.name }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      expenses: [],
      categories: [],
      currentExpense: {},
      newExpenseName: "",
      newExpenseAmount: "",
      newExpenseComment: "",
      newExpenseCategory: ""
    };
  },
  created: function() {
    axios.get("/api/expenses").then(response => {
      this.expenses = response.data;
    });
  // },
    axios.get("/api/categories").then(response => {
      this.categories = response.data;
    });
  },

  methods: {
    createExpense: function() {
      var params = {
        Name: this.newExpenseName,
        Amount: this.newExpenseAmount,
        Comment: this.newExpenseComment,
        Category: this.newExpenseCategory
      };
      axios.post("/api/expenses", params).then(response => {
        this.newExpenseName= "";
        this.newExpenseAmount = "";
        this.newExpenseComment = "";
        this.newExpenseCategory = "";
      });
    }

  }
};
</script>