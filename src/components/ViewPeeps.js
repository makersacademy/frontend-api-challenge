import React from 'react';
class ViewPeeps extends React.Component {

  componentDidMount() {
   this.getPeeps();
  }

  getPeeps(){
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(results => results.json())
    .then(results => console.log(results));
  }

  render() {
      return null;
    }
  }
  export default ViewPeeps;


