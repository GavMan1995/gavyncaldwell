import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './styles.scss'
// import Footer from './components/footer'
import Header from './components/header'
import HomePage from './pages/home'
import HireMePage from './pages/hire-me'
import MessageReceived from './pages/message-received'

export default class App extends Component {
  render () {
    return (
      <div className='o-container'>
        <Router>
          <div className='o-page'>
            <Header />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/hire' component={HireMePage} />
              <Route path='/message-received' component={MessageReceived} />
            </Switch>
          </div>
        </Router>

        <span />
      </div>
    )
  }
}
