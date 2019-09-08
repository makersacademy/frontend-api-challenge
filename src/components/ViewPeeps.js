import React from 'react';
import PeepSingle from './PeepSingle';
import PostPeeps from './PostPeeps';
import '../App.css';

class ViewPeeps extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      peeps: []
    }   
  }
  componentDidMount() {
    const url = 'https://chitter-backend-api.herokuapp.com/peeps'
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        peeps: data
      })
    })
    .catch((error) => console.log(error));
  }

  renderItems() {
    return this.state.peeps.map((item) => (
      <PeepSingle key={item.id} item={item} />
    ));
  }
  render() {
      return(
        <div>
          <div className="links">
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
            </div>
            <PostPeeps/>
           
           <div className="row">
          {this.renderItems()}
          </div>
        </div>
       
      );
    }
  }
  export default ViewPeeps;


