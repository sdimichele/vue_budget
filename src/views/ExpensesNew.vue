<template>
  <div class="container">
    <h1>New Expense</h1>
    <div>
      Name: <input type="text" v-model="newExpenseName">
      Amount: <input type="text" v-model="newExpenseAmount">
      Comment: <input type="text" v-model="newExpenseComment">
      Cattegory: <input type="text" v-model="category.id">
      
<!-- 
      <div v-for="post in posts">
        <img class="index-posts-img" v-bind:src="post.image" v-bind:alt="post.title">
        <h2><router-link v-bind:to="'/posts/' + post.id">{{post.title}}</router-link></h2>
    </div> -->

      <button v-on:click="createExpense()">Create Expense</button>
    </div>
    <h1>All Expenses</h1>
    <div v-for="expense in expenses">
      <h4>{{ expense.name }}</h4>
      <h4> {{expense.category_name}} </h4>
      <h4> {{expense.amount}}</h4>
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
    axios.get("/api/expenses").then(response => {
      this.expenses = response.data;
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