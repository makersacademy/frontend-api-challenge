import React, { useState } from "react";
import './Peep.css'
import chitter from "../apis/chitter";

const Peep = ({ redirect }) => {

  const [peep, setPeep] = useState('')
  const [placeholder, setPlaceholder] = useState('What\'s happening?')
 
  const onFormSubmit = async (event) => {

    event.preventDefault();
    const emptyPeepMessage = ['Share an edgy peep, not an empty peep.', 'If you don\'t peep, you won\'t know.', 'A bland peep is better than a blank peep.', 'No peep, no cry, just try.']
    const noUserMessage = ['Let\'s defend free peeps together.', 'Don\'t peep alone, join the community of peepers today', 'Only a registered peeper can peep.', 'Congratulations! You played yourself -__-']
    const emptyPeepInstruction = '(write something)'
    const noUserInstruction = '(Sign In)'
    const rand = Math.floor(Math.random()*4)

    if (!peep) {
      setPlaceholder(`${emptyPeepMessage[rand]} ${emptyPeepInstruction}`)
    } else if (!localStorage.getItem('user')) {
      setPeep('')
      setPlaceholder(`${noUserMessage[rand]} ${noUserInstruction}`)
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
        if (res) {
          console.log(res)
          redirect(true)
        }
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