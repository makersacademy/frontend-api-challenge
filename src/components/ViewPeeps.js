import React from 'react';
import PeepSingle from './Peeps';

class ViewPeeps extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      peeps: [],
    }   
  }
  componentDidMount() {
    const url = 'https://chitter-backend-api.herokuapp.com/peeps'
    fetch(url)
    .then((response) => {
      return response.json();
    })
    // .then(response => console.log(response))
    .then((data) => {
      this.setState({
        peeps: data
      })

    })
    .catch((error) => console.log(error));
    // this.getPeeps();
  }

  // getPeeps(){
  //   fetch('https://chitter-backend-api.herokuapp.com/peeps')
  //   .then(results => results.json())
  //   .then(results => console.log(results));
  // }

  renderItems() {
    return this.state.peeps.map((item) => (
      <PeepSingle key={item.id} item={item} />
    ));
  }
  render() {
      return(
        <div className="row">
          {this.renderItems()}
       </div>
      );
    }
  }
  export default ViewPeeps;


