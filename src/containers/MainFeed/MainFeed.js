import React from 'react';
import Classes from './MainFeed.module.css';

import NavBar from '../../components/NavBar/NavBar';
import Main from '../Main/Main';

class MainFeed extends React.Component {
    render() {
        return (
            <div className={Classes.MainFeed} data-test='component-main-feed'>
                <NavBar data-test='component-navbar'></NavBar>
                <Main data-test='component-main' />
                <div data-test='component-new-peep'></div>
            </div>
        );
    }
}

export default MainFeed;
