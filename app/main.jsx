'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'

import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import Projects from './components/Projects'
import firebase from 'APP/fire'

const App = ({children}) =>
  <div>
    <Navbar />
    <Home />
  </div>

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}> </Route>
    <Route exact path="/projects" component={Projects}> </Route>
    <Route path='*' component={NotFound}/>
  </Router>,
  document.getElementById('main')
)
