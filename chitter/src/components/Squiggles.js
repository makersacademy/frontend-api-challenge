import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import Squiggle from './Squiggle'


class Squiggles extends React.Component {

  toggleLike = (likeStatus) => {
    this.props.toggleLike(likeStatus)
  }

  deleteSquiggle = (id) => {
    this.props.deleteSquiggle(id)
  }

  render () {
    const squiggles = this.props.squiggles
    return (
      <Grid container spacing={4}>
        {squiggles.map((squiggle)=>(

          <Squiggle key={squiggle.id}
            squiggle={squiggle}
            toggleLike={this.toggleLike}
            deleteSquiggle={this.deleteSquiggle}/>

        ))}
      </Grid>

    )

  }
}

Squiggles.propTypes = {
  toggleLike: PropTypes.func.isRequired,
  deleteSquiggle: PropTypes.func.isRequired
}

export default Squiggles;
