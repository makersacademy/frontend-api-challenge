<template>
  <div class="title">
    <h1>Chitter</h1>
    <input type="text" name="newpeep" v-model="newPeep" placeholder="Peep away..." />
    <button type="button" v-on:click="newpeep()">Peep!</button>
    <div class="peeps">
      <div class="peep" v-for="peep in peeps">
        <h2><a v-bind:href="'/peeps/'+ peep.id">{{peep.body}}</a></h2>
        <h2>{{peep.user.handle}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

const BASE_URL = 'https://chitter-backend-api.herokuapp.com/'

export default {
  name: 'Peeps',
  data: function(){
    return {
      peeps: [],
      newPeep: ''
    }
  },
  created: function(){
    var self = this;

    axios.get(BASE_URL + 'peeps')
    .then(function (response) {
      self.peeps = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  methods: {
    newpeep() {
              axios.defaults.headers.common = {'Authorization': `Token token=${localStorage.getItem('session_key')}`}
              axios.post(BASE_URL + 'peeps', {
                peep: {
                  user_id: parseInt(localStorage.getItem('user_id')),
                  body: this.newPeep
                }
            })
            .then(function (response) {
              console.log(response)
              if (response.statusText === 'Created') {
                vm.$forceUpdate()
              } else {
                console.log('Unauthorized')
              }

            })
            .catch(function (error) {
              console.log(error)
            })
                }
            }
}
</script>

<style>
img {
  max-width: 50vw;
}
</style>