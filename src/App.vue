<template>
  <h1> Welcome To My kingdom</h1>
  <nav>
    <router-link to="/">Journal</router-link>
    <router-link to="/about">clavier</router-link>
    <router-link to="/contact">Contact</router-link>

  </nav>
  <router-view/>
</template>
<script>

export default{
  name:'APP',

}
</script>
<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
