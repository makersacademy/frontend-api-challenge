import React from 'react';
import Classes from './PeepBox.module.css';

class PeepBox extends React.Component {
    render() {
        return (
            <div className={Classes.PeepBox} data-test='component-peep-box'>
                <textarea data-test='text-area' placeholder='Say something'></textarea>
            </div>
        );
    }
}

export default PeepBox;
