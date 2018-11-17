import React from 'react'
import Feed from './Feed'
import PeepForm from './PeepForm'

export class HomePage extends React.Component {

  render() {
    return (
      <div className="container">
        <h1>Chitter</h1>
        <PeepForm />
        <Feed />
      </div>

    )
  }
}


export default HomePage
