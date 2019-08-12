import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../styles/App.css';
import PostNewPeep from './PostNewPeep'

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

export default Peep;
