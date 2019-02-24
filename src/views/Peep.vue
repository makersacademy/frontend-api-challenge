<template>
  <div class="title">
    <h1>Chitter</h1>
    <div class="peep">
        <h2>Peep:    {{peep.body}}</a></h2>
        <h4>Created: {{peep.created_at}}</h4>
        <h4>User: {{peep.user.handle}}</h4>
        <h4>Likes: {{this.likes}}</h4>
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
      likes: 0,
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
    this.id = this.$route.params.userId
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
            }
  }

}
</script>

<style>
img {
  max-width: 50vw;
}
</style>