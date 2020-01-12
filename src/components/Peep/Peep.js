import React from 'react';
import Classes from './Peep.module.css';
import axios from '../../axios-chitter';

class Peep extends React.Component {
    state = {
        isLuvd: false,
    }

    toggleLuv = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isLuvd: !prevState.isLuvd }));
    }


    render() {
        const options = { 
            weekday: "short", year: "numeric", month: "short", 
            day: "numeric", hour: "2-digit", minute: "2-digit"
        };

        const peepDate = new Date(this.props.time).toLocaleString('en-us', options)
        const luvs = this.props.luvs === 1 ? 'Luv' : 'Luvs';
        const blueLuvHeart = '../../../images/blu-luv-heart.png';
        const pinkLuvHeart = '../../../images/pink-luv-heart.png';
        let image = <img 
            src={blueLuvHeart} 
            height='13px' 
            alt='a luv icon'
            data-test='luv-icon' />
        
        if (this.state.isLuvd) image = <img 
            src={pinkLuvHeart} 
            height='13px' 
            alt='a luv icon'
            data-test='luv-icon' />

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
                        <div className={Classes.FooterRight}>
                            <div onClick={this.toggleLuv} data-test='number-of-luvs'>{this.props.luvs} {luvs}</div>
                            <a href='/#' onClick={(e) => this.toggleLuv(e)}>{image}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Peep;
