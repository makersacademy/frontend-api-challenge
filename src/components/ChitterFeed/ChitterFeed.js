import React from 'react';
import axios from '../../axios-chitter';
import Classes from './ChitterFeed.module.css';
import Peep from '../Peep/Peep';

class ChitterFeed extends React.Component {
    state = {
        peepData: [],
    }

    componentDidMount() {
        axios.get('/peeps')
        .then(response => {
            console.log(response.data)
            this.setState({ peepData: response.data });
        })
    }

    renderPeeps = () => {
        const peepData = [ ...this.state.peepData ];

        return peepData.map((peep, i) => {
            return (
                <Peep 
                    key={`id_${i}`}
                    data-test='component-peep'
                    image={'../../../images/default-icon.png'}
                    body={peep.body}
                    time={peep.created_at}
                    handle={peep.user.handle}
                    luvs={peep.likes.length}
                />
            );
        });
    }

    render() {
        const peeps = this.renderPeeps();

        return (
            <div className={Classes.ChitterFeed} data-test='component-chitter-feed'>
                {peeps}
            </div>
        )
    }
}

export default ChitterFeed;
