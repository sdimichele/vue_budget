<template>
  <div class="home">
    <div class="container">
      <h1>All Expenses</h1>
    
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="expense in expenses">
            <th scope="row">{{ expense.id }}</th>
            <td>{{ expense.name }}</td>
            <td>{{ expense.category_name }}</td>
            <td>{{ expense.amount }}</td>
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