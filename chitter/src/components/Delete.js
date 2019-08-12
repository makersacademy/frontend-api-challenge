import React from 'react'
import PropTypes from 'prop-types'
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

class Delete extends React.Component {

  handleClick = event => {
    this.props.deleteSquiggle()
  }


  render () {

    if(this.props.isMine) {

      return (
        <Fab
          style={{margin:"10px 0px 0px 30px"}}
          size="small"
          aria-label="delete"
          onClick={this.handleClick}
        >
          <DeleteIcon />
        </Fab>
      )

    } else {
      return (
        <>
        </>
      )
    }

  }
}

Delete.propTypes = {
  deleteSquiggle: PropTypes.func.isRequired
}

export default Delete;
