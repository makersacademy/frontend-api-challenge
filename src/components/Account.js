import React from "react";
import './Account.css'

const Account = ({ session, setSession }) => {

  const signOut = () => {
    localStorage.removeItem('user')
    setSession(false)
  }

  return (
    <div className="profile">
      <div className="ui card">
        <div className="image">
          <img src={session.avatar} alt='my beautiful pic'/>
        </div>
        <div className="content">
          <a href="#" className="header">{session.handle}</a>
          <div className="meta">
            <span className="date">Joined in 2019</span>
          </div>
          <div className="description">
            <div>Art Director - Los Angeles</div>
            <div>UCLA '15</div>
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="user icon"></i>
            22 Friends
          </a>
        </div>
        <div className="signout extra content">
          <a className="blue" href="#" onClick={signOut}>Sign Out</a>
        </div>
    </div>
  </div>
  )
}

export default Account