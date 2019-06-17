<template>
  <div class="home">
    <div class="container">
      <h1>{{ user.name }}'s Expense Categories</h1>
    
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Category ID</th>
            <th scope="col">Name</th>
            <th scope="col">Budget</th>
            <th scope="col">Amount Spent</th>
            <th scope="col">Percentage</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="category in user.categories">
            <th scope="row">{{ category.id }}</th>
            <td>{{ category.name }}</td>
            <td>{{ category.category_budget }}</td>
            <td>{{ category.category_spent }}</td>
            <td>{{ category.percentage }}</td>
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
      user: { 
              categories: []
            },
      expenses: []
    };
  },
  created: function() {
    axios.get("/api/users").then(response => {
      this.user = response.data;
    });
  },
  methods: {}
};
</script>