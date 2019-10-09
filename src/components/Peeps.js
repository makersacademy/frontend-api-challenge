import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../styles/App.css';
import PostNewPeep from './PostNewPeep'
import Peep from './Peep'

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

export default Peeps;
