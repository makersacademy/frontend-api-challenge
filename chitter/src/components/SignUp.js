import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'

class SignUp extends React.Component {

  state = {
    handle: "",
    password: "",
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/squiggles' />
    }
  }

  handleHandleChange = event => {
    this.setState({handle: event.target.value})
  }

  handlePasswordChange = event => {
    this.setState({password: event.target.value})
  }

  handleSubmit = event => {
      event.preventDefault()

      axios.post(
        'https://chitter-backend-api.herokuapp.com/users',
        {"user": {"handle":this.state.handle, "password":this.state.password}}
      )
      .then(res => {

        axios.post(
          'https://chitter-backend-api.herokuapp.com/sessions',
          {"session": {"handle":this.state.handle, "password":this.state.password}}
        )
        .then(res => {
          sessionStorage.setItem('user_id', res.data.user_id)
          sessionStorage.setItem('session_key', res.data.session_key)
          this.setRedirect()
        })



      })
  }




  render () {
    return (
      <>
      {this.renderRedirect()}
      <Paper style={{margin:"30px", padding:"30px"}}>
        <Typography
          style={{padding: "0.5em 0"}}
          component="h1"
          variant="h5">
          Join the Fowwest
        </Typography>
        <form onSubmit={this.handleSubmit} noValidate>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Secret Squiggle Alias"
                name="email"
                autoComplete="email"
                onChange = {this.handleHandleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange = {this.handlePasswordChange}
              />
            </Grid>

          </Grid>
          <Button
            style={{margin: "1.5em 0"}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"

          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
      </>
    )
  }
}

export default SignUp;
