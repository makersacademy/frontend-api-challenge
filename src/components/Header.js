import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink to="/homepage" className='nav-link' activeClassName="is-active" exact={true}> Chitter </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink to="/" className='nav-link' activeClassName="is-active" exact={true}> Login </NavLink>
      </li>
      <li className="nav-item active">
        <NavLink to="/users/new" className='nav-link' activeClassName="is-active" exact={true}> Register </NavLink>
      </li>
    </ul>
  </div>
</nav>
)

export default Header
