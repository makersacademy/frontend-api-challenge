import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';



class CreateSquiggle extends React.Component {

  state = {
    squiggle: "",

  }

  handleChange = event => {
    this.setState({squiggle: event.target.value})
  }

  handleSubmit = event => {
      event.preventDefault()
      this.props.createSquiggle(this.state.squiggle)
      this.setState({squiggle: ""})
  }



  render () {
    return (
      <Paper style={{margin: "30px 0", padding:"20px 0px"}}>
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
               fullWidth
               rows="2"
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

CreateSquiggle.propTypes = {
  createSquiggle: PropTypes.func.isRequired
}

export default CreateSquiggle;
