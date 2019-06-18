<template>
  <div class="home">
    <div class="container">
      <h1>Category: {{ category.name }}</h1>
    
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Expense Name</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        
        <tbody>
          <tr v-for="expense in category.expenses">
            <td>{{ expense.name }}</td>
            <td>{{ expense.amount }}</td>
          </tr>
        </tbody>
      </table>
      


      <div class="container">
        <div class="row">

          <div class="col-md">
            <div class="card text-center" style="width: 12rem;">
              <div class="table-success">
                <div class="card-body">
                  <h3 class="card-title">Budget</h3>
                  <p class="card-text">{{ category.category_budget }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md">
            <div class="card text-center" style="width: 12rem;">
              <div class="table-danger">
                <div class="card-body">
                  <h3 class="card-title">Total Spent</h3>
                  <p class="card-text">{{ category.category_spent }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md">
            <div class="card text-center" style="width: 12rem;">
              <div class="table-info">
                <div class="card-body">
                  <h3 class="card-title">Remaining</h3>
                  <p class="card-text">{{ category.category_budget - category.category_spent }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md">
            <div class="card text-center" style="width: 12rem;">
              <div class="table-warning">
                <div class="card-body">
                  <h3 class="card-title">Percentage</h3>
                  <p class="card-text">{{ category.category_spent / category.category_budget * 100 }}%</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      category: {}
    };
  },
  created: function() {
    axios.get("/api/categories/" + this.$route.params.id ).then(response => {
      this.category = response.data;
    });
  },
  methods: {}
};
</script>