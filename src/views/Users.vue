<template>
    <div id="login">
        <h1>Sign up</h1>
        <input type="text" name="handle" v-model="input.handle" placeholder="Handle" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="signup()">Sign Up</button>
    </div>
</template>


<script>
import axios from 'axios'

    export default {
        name: 'Users',
        data() {
            return {
                input: {
                    handle:   "",
                    password: ""
                }
            }
        },
        methods: {
            signup() {
              axios.post('https://chitter-backend-api.herokuapp.com//users', {
                user: {
                  handle: this.input.handle,
                  password: this.input.password
                }
            })
            .then(function (response) {
              console.log(response)
              if response.statusText == 'created'
                
            })
            .catch(function (error) {
              console.log(error)
            })
                }
            }
        }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>