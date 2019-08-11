import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import Squiggle from './Squiggle'


class Squiggles extends React.Component {

  toggleLike = (likeStatus) => {
    this.props.toggleLike(likeStatus)
  }

  render () {
    const squiggles = this.props.squiggles
    return (
      <Grid container spacing={4}>
        {squiggles.map((squiggle)=>(

          <Squiggle key={squiggle.id} squiggle={squiggle} toggleLike={this.toggleLike}/>

        ))}
      </Grid>

    )

  }
}

Squiggles.propTypes = {
  toggleLike: PropTypes.func.isRequired
}

export default Squiggles;
