<template>
  <div class="title">
    <h1>Chitter</h1>
    <div class="peeps">
      <div class="peep" v-for="peep in peeps">
        <h2>{{peep.body}}</h2>
        <h2>{{peep.user.handle}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Peeps',
  data: function(){
    return {
      peeps: []
    }
  },
  created: function(){
    var self = this;

    axios.get('https://chitter-backend-api.herokuapp.com/peeps')
    .then(function (response) {
      self.peeps = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
</script>

<style>
img {
  max-width: 50vw;
}
</style>