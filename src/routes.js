import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dash from './components/Dash'

export default (
  <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/register' component={Register} />
    <Route path='/dashboard' component={Dash} />
  </Switch>
)