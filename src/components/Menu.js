import React, { useState, useEffect } from "react";
import './Menu.css'

const Menu = ( { onSetOption, session } ) => {

  const [option, setOption] = useState('Feed')
  

  useEffect(() => {
    onSetOption(option)
  }, [option, onSetOption])

  return (
    <div className="ui fluid three item menu">
      <div className={`item login ${option === 'LogIn' ? 'active' : ''}`} onClick={() => {setOption('LogIn')}}>
        <div><i className="user circle icon large"></i></div>
        <div>{session ? session.handle : 'Log In' }</div>
      </div>
      <div className={`item feed ${option === 'Feed' ? 'active' : ''}`} onClick={() => {setOption('Feed')}}>
        <div><i className="earlybirds icon large"></i></div>
        <div>Live Feed</div>
      </div>
      <div className={`item peep ${option === 'Peep' ? 'active' : ''}`} onClick={() => {setOption('Peep')}}>
        <div><i className="edit icon large"></i></div>
        <div>Peep</div>
      </div>
    </div>
  )
}

export default Menu