import React from 'react';
import Classes from './Peep.module.css';

class Peep extends React.Component {
    render() {
        return (
            <div className={Classes.Peep} data-test='component-peep'></div>
        );
    }
}

export default Peep;
