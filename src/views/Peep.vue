<template>
  <div class="title">
    <h1>Chitter</h1>
    <div class="peep">
        <h2>{{peep.body}}</h2>
        <h4>Created: {{peep.created_at}}</h4>
        <h4>User: {{peep.user.handle}}</h4>
        <h4<a @click="likePeep(peep)">Likes: {{this.likes}}</a></h4>
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
  name: 'Peep',
  data: function(){
    return {
      peep: [],
      id: 0
    }
  },
  computed: {
    likes: function () {
      return this.likes = this.peep.likes.length
    }
  },
  created: function(){
    var self = this
    this.id = this.$route.params.id
    self.getpeep()
  },
  methods: {
          getpeep() {
              var self = this
              console.log(this)
              axios.get(BASE_URL + 'peeps/' +this.id)
              .then(function (response) {
                console.log(response)
                self.peep = response.data;
              })
              .catch(function (error) {
                console.log(error);
              })
            },
          likePeep(peep) {
              var self = this
              axios.defaults.headers.common = {'Authorization': `Token token=${localStorage.getItem('session_key')}`}
              axios.put(BASE_URL + 'peeps/' + peep.id + '/likes/' + localStorage.getItem('user_id'))
            .then(function (response) {
              console.log('liking')
              self.getpeep()
            })
            .catch(function (error) {
              axios.defaults.headers.common = {'Authorization': `Token token=${localStorage.getItem('session_key')}`}
              axios.delete(BASE_URL + 'peeps/' + peep.id + '/likes/' + localStorage.getItem('user_id'))
              console.log('unliking')
              console.log(peep.id)
              console.log(error)
              self.getpeep()
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