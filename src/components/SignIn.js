import React, { useState } from "react";
import chitter from "../apis/chitter";

const SignIn = ({ setShowSignIn, setSession }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (username && password) {
        const response = await chitter.post("/sessions", {
          "session": {
            "handle": username,
            "password": password,
          }
        })
        const sessionResponse = response.data
        sessionResponse.handle = username
        sessionResponse.avatar = 'https://i.pravatar.cc/'
        localStorage.setItem('user', JSON.stringify(sessionResponse))
        setSession(JSON.parse(localStorage.getItem('user')))
       
      }
    } catch(e) {
      console.log(e)
    }
  }
  
  return (
    <form className="ui form signin" onSubmit={onFormSubmit}>
      <h1>Sign In</h1>
      <div className="field">
         <label htmlFor="sign-in-username" >Username</label>
         <input id="sign-in-username" type="text" value={username} name="username" placeholder="Username" onChange={e => setUsername(e.target.value)} />
       </div>
       <div className="field">
         <label htmlFor="sign-in-password">Password</label>
         <input id="sign-in-password" type="password" value={password} name="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
       </div>
       <div>
        No account yet? <a onClick={() => setShowSignIn(false)}>Sign Up.</a>
       </div> 
     <button className="ui button blue" type="submit">Sign In</button>
   </form>
   )

 }

export default SignIn