<template>
  <div class="title">
    <h1>Chitter</h1>
    <input type="text" name="newpeep" v-model="newPeep" placeholder="Peep away..." />
    <button type="button" v-on:click="newpeep()">Peep!</button>
    <div class="peeps">
      <div class="peep" v-for="peep in peeps">
        <h2><router-link :to="{ name: 'peep', params: { id: peep.id }}">{{peep.body}}</router-link></h2>
        <h4>{{peep.user.handle}}</h4>
        <h4><router-link :to="{ name: 'likes' }">{{peep.likes.length}}</router-link></h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

// const BASE_URL = 'https://chitter-backend-api.herokuapp.com/'
const BASE_URL = 'http://localhost:3000/'

export default {
  name: 'Peeps',
  data: function(){
    return {
      peeps: [],
      newPeep: ''
    }
  },
  created: function(){
    var self = this
    self.getpeeps()
  },
  methods: {
    newpeep() {
              var self = this
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
                console.log(self)
                self.getpeeps()
              } else {
                console.log('Unauthorized')
              }

            })
            .catch(function (error) {
              console.log(error)
            })
            // console.log(self)
            },

          getpeeps() {
              var self = this
              axios.get(BASE_URL + 'peeps')
              .then(function (response) {
                console.log(response)
                self.peeps = response.data;
              })
              .catch(function (error) {
                console.log(error);
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