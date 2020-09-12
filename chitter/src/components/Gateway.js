import React, { Component} from 'react';
import logo from '../images/acorn.svg';
import Fab from '@material-ui/core/Fab';



class Gateway extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Squiggler
        </p>

        <Fab href="/login" variant="extended" aria-label="go" color="primary">
          Enter the Fowwest
        </Fab>

      </header>
    )
  }
}


export default Gateway;
