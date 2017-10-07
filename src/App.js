import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './styles.scss'
import Header from './components/header'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import MessageReceived from './pages/message-received'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div className='o-page'>
          <Header />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/message-received' component={MessageReceived} />
        </div>
      </Router>
    )
  }
}
