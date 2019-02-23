<template>
    <div id="login">
        <h1>Sign up</h1>
        <input type="text" name="handle" v-model="session.handle" placeholder="Handle" />
        <input type="password" name="password" v-model="session.password" placeholder="Password" />
        <button type="button" v-on:click="signin()">Sign In</button>
    </div>
</template>


<script>
import axios from 'axios'
import router from '../router'

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
              axios.post('https://chitter-backend-api.herokuapp.com//sessions', {
                session: {
                  handle: this.session.handle,
                  password: this.session.password
                }
            })
            .then(function (response) {
              console.log(response)
              if (response.statusText === 'Created') {
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