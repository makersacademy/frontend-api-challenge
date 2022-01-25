import React, { useState } from "react";
import './Peep.css'
import chitter from "../apis/chitter";

const Peep = ({ redirect }) => {

  const [peep, setPeep] = useState('')
  const [placeholder, setPlaceholder] = useState('What\'s happening?')
 
  const onFormSubmit = async (event) => {

    event.preventDefault();
    const emptyPeepMessage = ['Peeping should be fun, not empty. (write something)', 'If you don\'t peep, you won\'t know. (write something)', 'A rubbish peep is better than no peep at all. (write something)']
    const noUserMessage = ['Log In to start peeping. (Sign In)', 'Don\'t peep alone, join the community of peepers today (Sign In)', 'Only a registered peeper can peep. (Sign In)']
    const rand = Math.floor(Math.random()*3)

    if (!peep) {
      setPlaceholder(emptyPeepMessage[rand])
    } else if (!localStorage.getItem('user')) {
      setPeep('')
      setPlaceholder(noUserMessage[rand])
    } else { 
      try {
        const { user_id, session_key } = JSON.parse(localStorage.getItem('user'))
        const res = await chitter.post('/peeps', {
          "peep": {
            "user_id": user_id, 
            "body": peep
          } 
        }, {
          "headers": {
            "Authorization": `Token token=${session_key}`
          }
        })
        console.log(res)
        redirect(true)
      } catch (e) {
        setPeep('')
        setPlaceholder('Sorry, something went wrong on our end :(')
        console.log(e)
      }
    } 

  }

  return (
    <form onSubmit={onFormSubmit} className="ui form new-peep">
      <div className="field">
        <textarea value={peep} onChange={e => setPeep(e.target.value)} placeholder={placeholder}></textarea>
      </div>
      <button><i className="plus circle icon massive blue"></i></button>
    </form>
  )
}

export default Peep;