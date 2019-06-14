<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Hello</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home</router-link> 
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/signup">Signup</router-link>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" to="/login">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/logout">Logout</router-link>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" to="/expenses/new">New Expense</router-link>
      </li>
      
    </ul>
  </div>
</nav>
    <router-view/>
  </div>
</template>

<style>

</style>



