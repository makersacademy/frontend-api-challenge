import React from 'react';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group';
import Menu from './Menu'
import Peeps from './Peeps'


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
      user: false,
      list: 0
    };
    this.logOut = this.logOut.bind(this)
  }

  callbackFunction = (user) => {
    this.setState({user: user},() => console.log(this.state.user))
  }

  changeList = (index) => {
    this.setState({list: index})
  }

  logOut = () => {
    this.setState({user: false})
  }

  render() {
    return (
      <div>
        <Menu user={this.state.user} logOut={this.logOut}parentCallback = {this.callbackFunction} changeList={this.changeList}/>
        <Peeps list={this.state.list} user={this.state.user}/>
      </div>
    )
  }
}

export default App;
