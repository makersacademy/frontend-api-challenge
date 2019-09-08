import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class PostPeeps extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      peeps: [],
      user_id: sessionStorage.getItem('user_id'),
      session_key: sessionStorage.getItem('session_key'),
      body: ''
    }   
    console.log(this.state.user_id)
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
   
    const url = 'https://chitter-backend-api.herokuapp.com/peeps'
    let data = {"peep": {"user_id":this.state.user_id, "body":this.state.body}}
    console.log(this.state.body)
    console.log(data)
    axios.post(url, data, {headers: {  "Authorization": `Token token=${this.state.session_key}`, "Content-Type": "application/json"}}
      ).then(res => {
        console.log(res)
        console.log(res.data)
        console.log(this.state.body)
        this.setState({ body: ''})
      })
 
  }
 
  render() {
    const {body} = this.state
      return(
        <div>
        <form className="post-form" onSubmit={this.submitHandler}>
          <textarea rows="4" cols="50" type="text" name="body" value={body} onChange={this.changeHandler}/>
          <Button variant="primary" type="submit">Post Peep</Button>
        </form>
       </div>
      );
    }
  }
  export default PostPeeps;


