<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'peeps' }">See Peeps</router-link> |
      <router-link :to="{ name: 'users' }">Sign up</router-link> |
      <router-link :to="{ name: 'sessions' }">Sign in</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
