<template>
  <div class="title">
    <h1>Chitter</h1>
    <h2>{{$route.params.id}}</h2>
    <div class="peep">
        here
        {{$route.params.id}}
        <!-- <h2>{{peep.body}}</a></h2>
        <h4>{{peep.user.handle}}</h4> -->
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
  // name: 'Peep',
  // data: function(){
  //   return {
  //     peep: []
  //   }
  // },
  // created: function(){
  //   var self = this
  //   console.log('triggered1')
  //   self.getpeep()
  // },
  // methods: {
  //         getpeep() {
  //             var self = this
  //             console.log('triggered2')
  //             axios.get(BASE_URL + 'peeps/1')
  //             .then(function (response) {
  //               console.log(response)
  //               self.peeps = response.data;
  //             })
  //             .catch(function (error) {
  //               console.log(error);
  //             })
  //           }
  // }

}
</script>

<style>
img {
  max-width: 50vw;
}
</style>