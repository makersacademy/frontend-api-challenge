import React from 'react';
import { NavLink } from 'react-router-dom';

import Classes from './NavItem.module.css';

const NavItem = props => {
  return (
    <li data-test='component-nav-item'>
        <NavLink to={props.link} exact activeClassName={Classes.active}>{props.children}</NavLink>
    </li>
  );
}

export default NavItem;
