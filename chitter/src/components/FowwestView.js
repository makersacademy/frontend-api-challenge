import React from 'react'
import PropTypes from 'prop-types'
import CreateSquiggle from './CreateSquiggle'
import Squiggles from './Squiggles'

class FowwestView extends React.Component {

  
  render () {

    return (
    <div>
    <CreateSquiggle />
    <Squiggles />
    </div>
    )

  }
}

export default FowwestView;
