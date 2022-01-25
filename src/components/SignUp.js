import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import chitter from "../apis/chitter";

const SignUp = ({ setShowSignIn, setAlert }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [matchingPasswords, setMatchingPasswords] = useState(true)
  const [signedUp, setSignedUp] = useState(false)


  useEffect(() => {
    password !== confirmation ? setMatchingPasswords(false) : setMatchingPasswords(true)
  }, [password, confirmation])

  useEffect(() => {
    if (signedUp) {
      setAlert('registration')
      console.log('fixing to do an alert')
      setTimeout(() => {
        setAlert(false)
      }, 6000)
      setSignedUp(false)
    }
    
  }, [signedUp, setAlert])

  const onFormSubmit = async (event) => {
    event.preventDefault()
    try {
      if(username && password && matchingPasswords) {
        const response = await chitter.post("/users", {
          "user": {
            "handle": username,
            "password": password,
          }
        })
        if (response) {
          setSignedUp(true)
          setShowSignIn(true)
        }
        
      }
    } catch(e) {
      console.log(e)
    }
  }

  return (
  <form className="ui form signup" onSubmit={onFormSubmit}>
    <h1>Sign Up</h1>
    <div className="field">
      <label>Username</label>
      <input type="text" value={username} name="username" placeholder="Username" onChange={e => setUsername(e.target.value)} required/>
    </div>
    <div className="field">
      <label>Password</label>
      <input type="password" value={password} name="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>
    </div>
    <div className="field">
      <label>Confirm Password</label>
      <input type="password" value={confirmation} name="password-confirmation" placeholder="Confirm Password" onChange={e => setConfirmation(e.target.value)} required/>
    </div>
    {!matchingPasswords ? <div className="ui red message">Passwords do no match!</div> : ''}
    <div >
      Already have an account? <a href="#" onClick={() => setShowSignIn(true)}>Sign In.</a>
    </div>
    <br />
    <button className="ui button blue" type="submit">Create Account</button>
  </form>
)

}

export default SignUp