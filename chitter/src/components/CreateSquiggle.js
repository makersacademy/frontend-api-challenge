import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'



class CreateSquiggle extends React.Component {

  state = {
    squiggle: "",
    user_id: sessionStorage.getItem('user_id'),
    session_key: sessionStorage.getItem('session_key')
  }

  handleChange = event => {
    this.setState({squiggle: event.target.value})
  }

  handleSubmit = event => {
      event.preventDefault()

      axios.post(
        'https://chitter-backend-api.herokuapp.com/peeps',
        {"peep": {"user_id":this.state.user_id, "body":this.state.squiggle}},
        {headers:{
          "Authorization": `Token token=${this.state.session_key}`,
          "Content-Type": "application/json"
        }}
      )
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
  }



  render () {
    return (
      <Paper>
        <form onSubmit={this.handleSubmit}>
          <Grid container
            spacing={1}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <TextField
               id="outlined-multiline-flexible"
               label="Write your squiggle here"
               multiline
               rowsMax="4"
               margin="normal"
               variant="outlined"
               style={{margin: "20px auto"}}
               onChange = {this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
            </Grid>
          </Grid>
      </form>
      </Paper>
    )

  }
}

export default CreateSquiggle;
