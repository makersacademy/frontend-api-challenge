import React from 'react';
import Classes from './UserOption.module.css';
import AuthForm from '../../components/AuthForm/AuthForm';

class UserOption extends React.Component {
    render() {
        const isSignUp = this.props.option === 'Sign Up'
        let form = null;

        if (this.props.active) form = <AuthForm color={this.props.color} isSignUp={isSignUp}/>;

        return (
            <div 
                className={[Classes.UserOption, Classes[this.props.color]].join(' ')}
                data-test='component-user-option'
                onClick={this.props.onClick}>
                <button 
                    className={[Classes.Button, Classes[this.props.color]].join(' ')}
                    data-test={isSignUp ? 'sign-up-button' : 'sign-in-button'}
                >{this.props.option}</button>
                {form}
            </div>
        );
    }
}

export default UserOption;
