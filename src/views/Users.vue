<template>
    <div id="login">
        <h1>Sign up</h1>
        <input type="text" name="handle" v-model="input.handle" placeholder="Handle" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="signup()">Sign Up</button>
        <h2><router-link :to="{ name: 'users' }">Don't have an account? Sign up</router-link></h2>

    </div>
</template>


<script>
import axios from 'axios'
import router from '../router'

const BASE_URL = 'https://chitter-backend-api.herokuapp.com/'
// const BASE_URL = 'http://localhost:3000/'

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
              axios.post(BASE_URL + '/users', {
                user: {
                  handle: this.input.handle,
                  password: this.input.password
                }
            })
            .then(function (response) {
              console.log(response)
              if (response.statusText === 'Created') {
                router.push('/sessions')
              } else {
                console.log('Duplicate handle')
              }

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