import React from 'react'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import axios from 'axios'

class Like extends React.Component {

  state = {
    isLiked:false,
    likes: this.props.squiggle.likes,
    user_id: sessionStorage.getItem('user_id'),
    session_key: sessionStorage.getItem('session_key'),
    user_object:null,
  }

  componentDidMount() {
    this.findUser()
  }

  findUser = () => {
    this.state.likes.forEach((like)=> {

      if(like.user.id.toString(10) === this.state.user_id){
        this.setState({isLiked:true})
        this.setState({user_object:like})
      }
    })

  }

  handleClick = event => {
    this.state.isLiked = !this.state.isLiked
    this.props.toggleLike(this.state.isLiked)
    if(this.state.isLiked === true) {
      this.addLike()
    } else {
      this.deleteLike()
    }
  }

  addLike = () => {
    axios.put(
      `https://chitter-backend-api.herokuapp.com/peeps/${this.props.squiggle.id}/likes/${this.state.user_id}`,
      null,
      {headers:{
        "Authorization": `Token token=${this.state.session_key}`,
      }}
    )
    .then(res => {
      console.log(res)
      console.log(res.data)
      this.setState({ likes: [...this.state.likes, res.data]})
      this.setState({ user_object: res.data})
    })
  }

  deleteLike = () => {
    axios.delete(
      `https://chitter-backend-api.herokuapp.com/peeps/${this.props.squiggle.id}/likes/${this.state.user_id}`,
      {headers:{
        "Authorization": `Token token=${this.state.session_key}`,
      }}
    )
    .then(res => {
      const array = [...this.state.likes]
      const index = array.indexOf(this.state.user_object)
      if (index !== -1) {
        array.splice(index,1)
        this.setState({likes: array})
      }
    })
  }


  render () {

    return (
      <>

        <Typography variant="subtitle1" color="primary">
          Liked by {this.state.likes.map((like)=>(

              <span key={like.user.id}>🌰{like.user.handle} </span>

          ))}

        </Typography>
        <FormControlLabel
          control={
            <Switch checked={this.state.isLiked} onClick={this.handleClick}/>
          }
          label="Like this squiggle"
        />
      </>
    )

  }
}

Like.propTypes = {
  toggleLike: PropTypes.func.isRequired
}

export default Like ;
