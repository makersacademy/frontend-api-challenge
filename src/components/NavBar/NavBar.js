import React from 'react';
import NavItem from '../NavItem/NavItem';
import Classes from './NavBar.module.css';

class NavBar extends React.Component {
    render() {
        return (
            <nav className={Classes.NavBar} data-test='component-navbar'>
                <NavItem link={'/'} data-test='component-nav-item'>Main Feed</NavItem>
                <NavItem link={'/'} data-test='component-nav-item'>My Profile</NavItem>
            </nav>
        );
    }
}

export default NavBar;
