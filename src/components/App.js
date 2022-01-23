import React, { useState } from "react";
import Menu from './Menu'
import LogIn from  './LogIn'
import Feed from './Feed'
import Peep from './Peep'
import Alert from './Alert' 
import { useEffect } from "react/cjs/react.development";


const App = () => {

  const [option, setOption] = useState('Feed');
  const [session, setSession] = useState(false)
  const [alert, setAlert] = useState(false)

  localStorage.removeItem('user')
  localStorage.removeItem('user')

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setSession(user)
    }
  }, [])

  return (
    <div className="ui">
      <Menu onSetOption={setOption} session={session} />
      <div className='ui container'>
        {
        option === 'LogIn' ? <LogIn setSession={setSession} session={session} setAlert={setAlert} />  :
        option === 'Feed' ? <Feed /> :
        option === 'Peep' ? <Peep />
        : ''
        }
      </div>
      <Alert alert={alert}/>  
    </div>
  )
}

export default App