// import React, { Component } from "react";

// export class Tweet extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tweets: [],
//       isLoaded: false,
//     };
//   }

//   componentDidMount(){
//     fetch('https://chitter-backend-api.herokuapp.com/peeps')
//     .then(results => {
//       return results.json();
//     }).then(json => {
//       this.setState({
//         isLoaded: true,
//         tweets: json,
//       })
//     });
//   }

//   render() {
//     let { isLoaded, items } = this.state;
    
//     if(!isLoaded) {
//       return <div> LOADING... </div>
//     }
//     else {

//     }
    
//     return (<div> Here Are The 50 Most Recent Tweets: <div /> );
//   }
// }

// export default Tweet;
