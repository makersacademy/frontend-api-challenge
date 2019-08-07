import React, { Component } from 'react';

class Peeps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return <h3>this.state.data</h3>
  }
}

export default Peeps;
