<template>
  <div class="home">
    <h1>All Expenses</h1>
    <div v-for="expense in expenses">
      <h2>{{ expense.name }}</h2>
      <p>{{ expense.amount }}</p>
      <p>{{ expense.category }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      expenses: []
    };
  },
  created: function() {
    axios.get("/api/expenses").then(response => {
      this.expenses = response.data;
    });
  },
  methods: {}
};
</script>