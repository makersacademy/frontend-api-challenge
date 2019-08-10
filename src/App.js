import React from 'react';
import './App.css';
import fetch from 'node-fetch';
import { CSSTransitionGroup } from 'react-transition-group';
import Menu from './Menu'


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
    console.log('test')
    this.setState({user: childData})
    console.log(this.state.user)
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

class Peeps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: []
    };
    this.callbackFunction = this.callbackFunction.bind(this)
  }

  componentDidMount() {
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
      .then(res => res.json())
      .then(json => this.setState({hits: json}))
  }

  callbackFunction() {
    this.setState({hits: []})
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
      .then(res => res.json())
      .then(json => this.setState({hits: json}))
      .then(json => console.log('change?'))
      .then(json => console.log(this.state.hits))
  }

  render() {
    console.log(this.state.hits)
    return (
      <div className='Peep_List'>
        <PostNewPeep parentCallback = {this.callbackFunction} user ={this.props.user} />
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.state.hits.map(function(peep, index){
            return <Peep data={peep} key={index} />;
          })}
        </CSSTransitionGroup>
      </div>
    )
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
        <div className="PeepDate">{date.getDate()}/{date.getMonth()}/{date.getYear()}</div>
        <div className='PeepLikes'>Likes: {this.Peep.likes.length}</div>
      </div>
    )
  }
}

class PostNewPeep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      style: {background: '#d0f1f7', marginBottom: '30px'}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    fetch("https://chitter-backend-api.herokuapp.com/peeps", {
      method: 'POST',
      headers: {'Content-Type': 'application/json', "Authorization": "Token token=" + this.props.user.session_key },
      body: JSON.stringify({"peep": {"user_id":this.props.user.user_id, "body":this.state.value}}),
    }).then(res => this.props.parentCallback())
      .then(res => this.setState({value: ''}))
      event.preventDefault();
  }

  render() {
    return (
      <div className = 'Peep' style = {this.state.style}>
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
