import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import LoginPage from '../components/LoginPage'
import HomePage from '../components/HomePage'
import RegistrationPage from '../components/RegistrationPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/homepage" exact component={HomePage} />
        <Route path="/users/new" exact component={RegistrationPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
