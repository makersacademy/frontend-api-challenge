import React from 'react'
import Peep from './Peep'

export const Feed = (props) => (
    <div>
      <h1>Feed</h1>
      <ul>
        {props.peeps.map((peep, index) => <Peep key={index} peep={peep}/>)}
      </ul>
    </div>
  )

export default Feed
