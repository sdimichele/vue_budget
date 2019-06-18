<template>
  <div class="container">
    <h1>New Expense</h1>
     <ul>
      <li v-for="error in errors">
        {{ error }}
      </li>
    </ul>
    <form>
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" v-model="newExpenseName" placeholder="Name">
        </div>
        <div class="col">
          <input type="text" class="form-control" v-model="newExpenseAmount" placeholder="Amount">
        </div>
        <div class="col">
          <input type="text" class="form-control" v-model="newExpenseComment" placeholder="Comment">
        </div>
        <div class="col">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{buttonName}}
            </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div v-for="category in user.categories">
                  <a v-on:click="onCategoryClick(category.id, category.name)" class="dropdown-item" href="#">{{category.name}}</a>
                </div>
              </div>
          </div>
        </div>
        <div class="col">
          <button v-on:click="createExpense()">Create Expense</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
.row { margin: auto; max-width: 900px; }
h1 {text-align: center; }
</style>

<script>
  import axios from "axios";

  export default {
    data: function() {
      return {
        expenses: [],
        buttonName: "Category",
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
      });
      axios.get("/api/users").then(response => {
        this.user = response.data;
      });
    },
    methods: {

      onCategoryClick: function(id, name) {
        this.newExpenseCategoryId = id;
        this.buttonName = name;
      },

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