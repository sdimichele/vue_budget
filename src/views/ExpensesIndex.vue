<template>
  <div class="home">
    <div class="container">
      <h1>{{ user.name }}'s Expenses</h1>
    
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Budget</th>
            <th scope="col">Total Spent</th>
            <th scope="col">Percent of Total Budget</th>
          </tr>
        </thead>
        <tbody>
          <td>{{ user.budget }}</td>
          <td>{{ user.total_spent }}</td>
          <td>{{ user.percentage }}</td>
        </tbody>
      </table>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Total</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="expense in expenses">
            <th scope="row">{{ expense.id }}</th>
            <td>{{ expense.name }}</td>
            <td>{{ expense.category_name }}</td>
            <td>{{ expense.amount }}</td>
            <td>{{ expense.total }}</td>
          </tr>
        </tbody>
      </table>

    </div>


  </div>
</template>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: { budget: 0,
               categories: []
    },
      expenses: []
    };
  },
  created: function() {
    axios.get("/api/expenses").then(response => {
      this.expenses = response.data;
    });
    axios.get("/api/users").then(response => {
      this.user = response.data;
    });
  },
  methods: {}
};
</script>