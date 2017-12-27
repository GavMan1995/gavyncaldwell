import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  constructor() {
    super()

    this.state = {
      menuOpen: false
    }
  }

  render() {
    return (
      <div className='c-header' >
        <Link className='c-header__logo' to='/'>
          <img className='c-logo' alt='loading' src='https://res.cloudinary.com/gavmanweb/image/upload/v1492525031/portfolio/GavynFullWhite_ezsood.svg' />
        </Link>

        <div
          onClick={this.openMenu.bind(this)}
          className={`c-header__hamburger ${this.state.menuOpen ? 'is-open' : ''}`}>
          <span />
          <span />
          <span />
        </div>

        <div className={`c-header__menu ${this.state.menuOpen ? 'is-open' : ''}`}>
          <h1
            onClick={this.closeMenu.bind(this)}
            className='c-header-menu__close'>
            &#10005;
          </h1>

          <div
            onClick={this.closeMenu.bind(this)}
            style={window.location.hash === '/' ? { display: 'none' } : {}}
            className='c-header-menu__link'>
            <Link to='/'>Home</Link>
          </div>
          <div
            onClick={this.closeMenu.bind(this)}
            style={window.location.hash === '/hire' ? { display: 'none' } : {}}
            className='c-header-menu__link'>
            <Link to='/hire'>Hire Me</Link>
          </div>
          <div
            onClick={this.closeMenu.bind(this)}
            className='c-header-menu__link'>
            <a
              href='https://medium.com/@gavyncaldwell'
              target='_blank'
              rel='noopener noreferrer'>
              Blog
            </a>
          </div>
        </div>
      </div>
    )
  }

  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }
}