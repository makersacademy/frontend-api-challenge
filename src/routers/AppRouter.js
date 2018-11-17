import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import HomePage from '../components/HomePage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
