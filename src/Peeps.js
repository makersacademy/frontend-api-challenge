import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class Peeps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peeps: [],
    };
    this.callbackFunction = this.callbackFunction.bind(this)
  }

  componentDidMount() {
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
      .then(res => res.json())
      .then(json => this.setState({peeps: json}))
  }

  callbackFunction(response) {
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
      .then(res => res.json())
      .then(json => this.setState({peeps: json}))
    return response
  }

  render() {
    if (this.props.list === 0) {
      return (
        <div className='Peep_List'>
          <PostNewPeep parentCallback = {this.callbackFunction} user ={this.props.user} />
          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {this.state.peeps.map(function(peep, index){
              return <Peep parentCallback = {this.callbackFunction} user={this.props.user} peep={peep} key={peep.id} />;
            }, this)}
          </CSSTransitionGroup>
        </div>
      )
    } else {
      return (
        <div className='Peep_List'>
          <PostNewPeep parentCallback = {this.callbackFunction} user ={this.props.user} />
          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {this.state.peeps.map(function(peep, index){
              if (peep.user.id === this.props.user.user_id) {
                return <Peep parentCallback = {this.callbackFunction} user={this.props.user} peep={peep} key={peep.id} />;
              } return ''
            }, this)}
          </CSSTransitionGroup>
        </div>
      )
    }
  }
}

class Peep extends React.Component {
  constructor(props) {
    super(props);

    this.Peep = this.props.peep
    this.handleLike = this.handleLike.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.likedStyle = this.likedStyle.bind(this);
    this.liked = this.liked.bind(this);
    this.state = {
      likes: this.Peep.likes.length,
      deleted: false,
      liked: false,
      user: this.props.user
    };
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.user !== prevProps.user) {
      this.setState({user: this.props.user})
    }
  }

  handleLike(event) {
    console.log('test')
    console.log(this.liked())
    if (this.liked()){
      fetch("https://chitter-backend-api.herokuapp.com/peeps/" + this.props.peep.id + "/likes/" + this.props.user.user_id, {
        method: 'DELETE',
        headers: {"Authorization": "Token token=" + this.props.user.session_key }})
        .then(response => {
          if (!response.ok) {
              throw new Error("You haven't liked this Peep!")
          } else {
            return response
          }
        })
        .then(response => this.props.parentCallback(response))
        .then(response => this.setState({likes: this.Peep.likes.length -= 1 }))
        .then(response => console.log(this.state))
        .catch(err => alert(err))
    } else {
      fetch("https://chitter-backend-api.herokuapp.com/peeps/" + this.props.peep.id + "/likes/" + this.props.user.user_id, {
        method: 'PUT',
        headers: {"Authorization": "Token token=" + this.props.user.session_key }})
        .then(response => {
          if (!response.ok) {
              throw new Error("You can't like this peep")
          } else {
            return response
          }
        })
        .then(response => this.props.parentCallback(response))
        .then(response => this.setState({likes: this.Peep.likes.length += 1 }))
        .then(response => console.log(this.state))
        .catch(err => alert(err))
    }
  }

  handleDelete(event) {
    event.preventDefault();
    fetch("https://chitter-backend-api.herokuapp.com/peeps/" + this.props.peep.id, {
      method: 'DELETE',
      headers: {"Authorization": "Token token=" + this.props.user.session_key }})
      .then(function(response) {
        if (!response.ok) {
            throw new Error("This peep isn't yours to delete!")
        } else {
          return response
        }
      }, this).then(response => this.setState({deleted: true}))
      .then(json => this.props.parentCallback())
      .catch(err => alert(err))
  }

  liked() {
    if (this.props.peep.likes.filter(e => e.user.id === this.state.user.user_id).length > 0) {
      return true
    } else return false
  }

  likedStyle() {
    console.log(this.liked())
    if (this.liked()){
      return (<div className="PeepLikesTrue" onClick={this.handleLike}>Likes: {this.state.likes}</div>)
    } else {
      return (<div className="PeepLikes" onClick={this.handleLike}>Likes: {this.state.likes}</div>)
    }
  }

  render() {
    var date = new Date(this.Peep.created_at);
    return (
      <div className = 'Peep'>
        <p className = 'PeepHeader'>{this.Peep.user.handle}</p>
        <p>{this.Peep.body}</p>
        <div className="PeepDate">{date.getDate()}/{date.getMonth()}/{date.getYear()}</div>
        {this.likedStyle()}
        <div className='DeletePeep' onClick={this.handleDelete}>Delete</div>
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
        <form className = 'textbox' onSubmit={this.handleSubmit}>
          <label>
            <textarea cols='45'rows='6'value={this.state.value} onChange={this.handleChange} />
          </label>
          <input className='Post_Peep' type="submit" value="Post Peep" />
        </form>
      </div>
    );
  }
}

export default Peeps;
