import React, { useState, useEffect } from "react";
import Menu from './Menu'
import LogIn from  './LogIn'
import Feed from './Feed'
import Peep from './Peep'
import Alert from './Alert' 

const App = () => {

  const [option, setOption] = useState('Feed');
  const [session, setSession] = useState(false)
  const [alert, setAlert] = useState(false)
  const [redirect, setRedirect] = useState(false)


  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setSession(JSON.parse(user))
    }
  }, [])

  return (
    <div className="app"> 
      <div className="ui top-bar">
        <Menu onSetOption={setOption} session={session} redirect={redirect} setRedirect={setRedirect} />
      </div>
      <div className='ui container content-field'>
        {
        option === 'LogIn' ? <LogIn setSession={setSession} session={session} setAlert={setAlert} />  :
        option === 'Feed' ? <Feed /> :
        option === 'Peep' ? <Peep redirect={setRedirect}/>
        : ''
        }
      <Alert alert={alert} setAlert={setAlert} />  
      </div>
    </div>
  )
}

export default App

