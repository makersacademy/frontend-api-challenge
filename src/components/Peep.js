import React from 'react'

export const Peep = (props) => (
  <li>
    <p>#{props.peep.user.handle} @ {props.peep.created_at}</p>
    <p>{props.peep.body}</p>
    <p>likes: {props.peep.likes.length}</p>
  </li>
)

export default Peep
