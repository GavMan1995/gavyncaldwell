import React, { Component } from 'react'

export default class GavynCaldwell extends Component {
  render () {
    return (
      <div className='c-page'>
        <section className='o-section o-section--gradient o-section--center'>
          <div className='c-img-container c-img-container--about-me'>
            <img src='https://res.cloudinary.com/gavmanweb/image/upload/v1491349329/gavyn_caldwell_alt_riqaio.jpg'/>
          </div>
          <h2 className='c-about-me-title'>Gavyn Caldwell</h2>
          <p>Husband, Artist, Pro Yo-Yoer and Web Developer</p>

          <div className='c-about-me-links'>
            <a
              href='https://github.com/GavMan1995'
              target='_blank'
              className='fa fa-github-square' />
            <a
              href='https://www.linkedin.com/in/gavman1995/'
              target='_blank'
              className='fa fa-linkedin-square' />
          </div>
        </section>

        <section className='o-section o-section--white'>
          <h1>About me</h1>
          <p>

          </p>
          <div className='c-card'>
            under construction
          </div>
        </section>
      </div>
    )
  }
}
