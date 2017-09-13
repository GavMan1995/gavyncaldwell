import React, { Component } from 'react'
import Header from './components/header'
import HomePage from './pages/home'

export default class App extends Component {
  render () {
    return (
      <div className='o-page'>
        <Header />
        <HomePage />
        {this.props.children}
      </div>
    )
  }
}
