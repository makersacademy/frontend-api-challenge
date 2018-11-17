import React from 'react'
import { connect } from 'react-redux'
import Peep from './Peep'

export const Feed = (props) => {
  let insert;
  
  console.log(props.peeps)
  if (props.peeps === undefined || props.peeps.length == 0) {
    insert = <p>No peeps yet!</p>
  } else {
    insert = props.peeps.map((peep, index) => <Peep key={index} peep={peep}/>)
  }
  return (
    <div>
      <h1>Feed</h1>
      <ul>
        {insert}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    peeps: state.peeps
  }
}

export default connect(mapStateToProps)(Feed)
