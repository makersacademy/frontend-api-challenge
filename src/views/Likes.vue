<template>
  <div class="likes">
    <h1>This is my likes</h1>
    {{ peep_id }}
    {{ user_id }}
    {{ like_array }}
  </div>
</template>




<script>
import axios from 'axios'
import router from '../router'

// const BASE_URL = 'https://chitter-backend-api.herokuapp.com/'
const BASE_URL = 'http://localhost:3000/'

export default {
  name: 'Likes',
  data: function(){
    return {
      peep_id: this.$route.params.peep_id,
      user_id: parseInt(localStorage.getItem('user_id')),
      like_array: this.$route.params.likes
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
            }
  }

}
</script>