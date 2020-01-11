import React from 'react';
import Classes from './MainFeed.module.css';

import NavBar from '../../components/NavBar/NavBar';

class MainFeed extends React.Component {
  render() {
    return (
      <div className={Classes.MainFeed} data-test='component-main-feed'>
        <NavBar data-test='component-navbar'>
        
        </NavBar>
        <div data-test='component-main'></div>
        <div data-test='component-new-peep'></div>
      </div>
    );
  }
}

export default MainFeed;
