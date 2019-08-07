import React from 'react';
import './App.css';
import fetch from 'node-fetch';


function App() {
  // fetch('https://chitter-backend-api.herokuapp.com/users', {
  //   method: 'POST',
  //   headers: {'Content-Type': 'application/json'},
  //   body: JSON.stringify({"user": {"handle":"chuckles", "password":"mypassword"}})})
  //   .then(
  fetch('https://chitter-backend-api.herokuapp.com/sessions', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"session": {"handle":"chuckles", "password":"mypassword"}})})
    .then(res => res.json())
    .then(json => console.log(json))
  return(<div>
    <Menu />
    <Peeps />
  </div>)
}

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: []
    };
  }

  ul (index){
  	console.log('click!' + index)

  	var underlines = document.querySelectorAll(".underline");

  	for (var i = 0; i < underlines.length; i++) {
  		underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
  	}
  }

  render() {
    return (
      <nav className="retro">
        <div className="underline"></div>
        <div className="underline"></div>
        <div className="underline"></div>
        <div className="menu_button" onClick={this.ul.bind(this, 0)}>Home</div>
        <div className="menu_button" onClick={this.ul.bind(this, 1)}>Videos</div>
        <div className="menu_button" onClick={this.ul.bind(this, 2)}>Playlists</div>
        <div className="menu_button" onClick={this.ul.bind(this, 3)}>Community</div>
        <div className="menu_button" onClick={this.ul.bind(this, 4)}>Channels</div>
        <div className="menu_button" onClick={this.ul.bind(this, 5)}>About</div>
      </nav>
    )
  }
}

class Peeps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: []
    };
  }

  componentDidMount() {
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
      .then(res => res.json())
      .then(json => this.setState({hits: json}))
  }

  render() {
    return (
      <div>
      {this.state.hits.map(function(peep, index){
        return <Peep data={peep} key={peep.id} />;
      })}
      </div>)
  }
}

class Peep extends React.Component {
  constructor(props) {
    super(props);

    this.Peep = props.data
  }

  render() {
    return (
      <div className = 'Peep'><header className = 'PeepHeader'>
        <p>{this.Peep.user.handle}</p></header>
        <p>{this.Peep.body}</p>
        <div className='PeepLikes'>Likes: {this.Peep.likes.length}</div>
      </div>
    )
  }
}

export default App;
