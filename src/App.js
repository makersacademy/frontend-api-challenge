import React from 'react';
import './App.css';
import fetch from 'node-fetch';


function App() {


    return (
      <div>
      <Chitter />
      </div>
    )


}

class Chitter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      user: []
    };
  }

  callbackFunction = (childData) => {
    this.setState({user: childData})
  }

  render() {
    return (
      <div>
      <Menu parentCallback = {this.callbackFunction} />
      <Peeps user={this.state.user}/>
      </div>
    )
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      user: []
    };
  }

  ul (index){
  	var underlines = document.querySelectorAll(".underline");
  	for (var i = 0; i < underlines.length; i++) {
  		underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
  	}
  }

  sendData = () => {
    this.props.parentCallback(this.state.user);
  }

  componentDidMount() {
    fetch("https://chitter-backend-api.herokuapp.com/sessions", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"session": {"handle":"chuckles", "password":"mypassword"}})})
    .then(res => res.json())
    .then(json => this.setState({user: json}))
  }

  render() {
    return (
      <nav className="retro">
        <div className="underline"></div>
        <div className="underline"></div>
        <div className="underline"></div>
        <div class="topnav">
          <div className="home_button" onClick={this.ul.bind(this, 0)}>Home</div>
          <div className="view_profile_button" onClick={this.ul.bind(this, 1)}>Your Peeps</div>
          <div class="topnav-right">
            <div className="log_in_button" onClick={this.sendData.bind(this)} >Log In</div>
            <div className="sign_up_button" >Sign Up</div>
            <div className="log_out_button" >Log Out</div>
          </div>
        </div>
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
      <div className='Peep_List'>
      <NewPeep user ={this.props.user} />
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
    var date = new Date(this.Peep.created_at);

    return (
      <div className = 'Peep'><header className = 'PeepHeader'>
        <p>{this.Peep.user.handle}</p></header>
        <p>{this.Peep.body}</p>
        <p>Posted: {date.getDate()}/{date.getMonth()}/{date.getYear()}</p>
        <div className='PeepLikes'>Likes: {this.Peep.likes.length}</div>
      </div>
    )
  }
}

class NewPeep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.props.user.user_id)
    console.log(this.state.value)
    console.log(this.props.user.session_key)
    fetch("https://chitter-backend-api.herokuapp.com/peeps", {
      method: 'POST',
      headers: {'Content-Type': 'application/json', "Authorization": "Token token=" + this.props.user.session_key },
      body: JSON.stringify({"peep": {"user_id":this.props.user.user_id, "body":this.state.value}}),
    }).then(res => console.log(res))
  }

  render() {
    return (
      <div className = 'Peep'>
        <header className = 'PeepHeader'>Post new peep
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input className='Post_Peep' type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
