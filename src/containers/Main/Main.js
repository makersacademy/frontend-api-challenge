import React from 'react';
import Classes from './Main.module.css';

class Main extends React.Component {
    render() {
        let profileWidget = null;
        if (this.props.isProfile) profileWidget = <div data-test='component-profile-widget'></div>
        
        return (
            <div data-test='component-main'>
                {profileWidget}
                <div data-test='component-chitter-feed'></div>
            </div>
        )
    }
}

export default Main;
