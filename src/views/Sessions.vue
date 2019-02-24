<template>
    <div id="login">
        <h1>Sign in</h1>
        <input type="text" name="handle" v-model="session.handle" placeholder="Handle" />
        <input type="password" name="password" v-model="session.password" placeholder="Password" />
        <button type="button" v-on:click="signin()">Sign In</button>
        <h2><router-link :to="{ name: 'users' }">Already have an account? Sign in</router-link></h2>
    </div>
</template>


<script>
import axios from 'axios'
import router from '../router'

// const BASE_URL = 'https://chitter-backend-api.herokuapp.com/'
const BASE_URL = 'http://localhost:3000/'

    export default {
        name: 'Sessions',
        data() {
            return {
                session: {
                    handle:   "",
                    password: ""
                }
            }
        },
        methods: {
            signin() {
              axios.post(BASE_URL + 'sessions', {
                session: {
                  handle: this.session.handle,
                  password: this.session.password
                }
            })
            .then(function (response) {
              console.log(response)
              localStorage.setItem('session_key',response.data.session_key)
              localStorage.setItem('user_id', response.data.user_id)
              if (response.statusText === 'Created') {
                console.log(this)
                localStorage.setItem('user_name', this.session.handle)
                router.push('/')
              } else {
                console.log('Login failed')
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