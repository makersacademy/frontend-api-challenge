import React from 'react';
import { NavLink } from 'react-router-dom';

import Classes from './NavItem.module.css';

const NavItem = props => {
  return (
    <li className={Classes.NavItem} data-test='component-nav-item'>
        <NavLink 
          to={props.link} 
          exact 
          className={Classes.NavLink}
          activeClassName={Classes.active}>{props.children}</NavLink>
    </li>
  );
}

export default NavItem;
