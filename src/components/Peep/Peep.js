import React from 'react';
import Classes from './Peep.module.css';

class Peep extends React.Component {
    render() {
        const options = { 
            weekday: "long", year: "numeric", month: "short", 
            day: "numeric", hour: "2-digit", minute: "2-digit"
        };

        const peepDate = new Date(this.props.time).toLocaleString('en-us', options)
        const luvs = this.props.luvs === 1 ? 'Luv' : 'Luvs';

        return (
            <div className={Classes.Peep} data-test='component-peep'>
                <div>
                    <div className={Classes.Header}>
                        <img 
                            src={this.props.image} 
                            alt='a chitter user' 
                            data-test='user-image'
                            height='20px' />
                        <div className={Classes.Handle} data-test='user-handle'>@{this.props.handle}</div>
                    </div>
                    <div className={Classes.PeepBody} data-test='peep-body'>{this.props.body}</div>
                    <div className={Classes.Footer}>
                        <div className={Classes.FooterLeft}><div data-test='peeped-on'>Peeped on {peepDate}</div></div>
                        <div className={Classes.FooterRight}><div data-test='number-of-luvs'>{this.props.luvs} {luvs}</div></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Peep;
