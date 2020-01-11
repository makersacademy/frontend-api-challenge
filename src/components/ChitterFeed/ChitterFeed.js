import React from 'react';
import axios from '../../axios-chitter';
import Classes from './ChitterFeed.module.css';

class ChitterFeed extends React.Component {
    state = {
        peepData: [],
    }

    componentDidMount() {
        axios.get('/peeps')
        .then(response => {
            this.setState({ peepData: response.data });
        })
    }

    renderPeeps = () => {
        const peepData = [ ...this.state.peepData ];

        return peepData.map((peep, i) => {
            return (
                <div key={`id_${i}`} data-test='component-peep'>Peep</div>
            );
        });
    }

    render() {
        const peeps = this.renderPeeps();

        return (
            <div data-test='component-chitter-feed'>
                {peeps}
            </div>
        )
    }
}

export default ChitterFeed;
