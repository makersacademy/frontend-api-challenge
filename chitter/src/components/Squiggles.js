import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class Squiggles extends React.Component {

  state = {
		squiggles: []
	};

	componentDidMount() {
		axios
			.get('https://chitter-backend-api.herokuapp.com/peeps')
			.then((res) => this.setState({ squiggles: res.data }));
	}


  render () {
    const squiggles = this.state.squiggles
    return squiggles.map((squiggle)=>(
      <div key={squiggle.id}>{squiggle.body}</div>
    ))

  }
}

export default Squiggles;
