import React from 'react'
import PropTypes from 'prop-types'
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

class Delete extends React.Component {


  render () {

    if(this.props.isMine) {

      return (
        <Fab
          style={{margin:"10px 0px 0px 30px"}}
          size="small"
          aria-label="delete"
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

export default Delete;
