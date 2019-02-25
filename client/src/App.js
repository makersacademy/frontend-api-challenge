import React, { Component } from 'react';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      isLoaded: false,
    }
  }

  componentDidMount(){

    fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(results => results.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        tweets: json,
      })
    });
  }

  render() {
    let { isLoaded, tweets } = this.state;
    
    if(!isLoaded) {
      return <div> LOADING... </div>
    }
    else {
      return (
        <div className="App"> Here Are The 50 Most Recent Tweets: 
          <ul> {tweets.map(tweet => (
            <li key={tweet.id}>
              {tweet.body}
            </li>
          ))};
            </ul>
        </div> 
      );
    }
  }
}

export default App;