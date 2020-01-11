import React from 'react';
import Classes from './UserOption.module.css';

class UserOption extends React.Component {
  state = {
    active: false,
  }

  handleClick = () => {
    this.setState({ active: true });
  }

  render() {
    let form = null;

    if (this.state.active) form = 'Enter your handle';

    return (
      <div data-test='component-user-option'>
        <button data-test='sign-in-button' onClick={this.handleClick}>Sign In</button>
        {form}
      </div>
    );
  }
}

export default UserOption;
