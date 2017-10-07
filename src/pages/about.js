import React, { Component } from 'react'

export default class AboutPage extends Component {
  render () {
    return (
      <div className='c-page'>
        <section className='o-section o-section--gradient o-section--center'>
          <div className='c-img-container c-img-container--about-me'>
            <img alt='loading' src='https://res.cloudinary.com/gavmanweb/image/upload/v1491349329/gavyn_caldwell_alt_riqaio.jpg'/>
          </div>
          <h2 className='c-about-me-title'>Gavyn Caldwell</h2>
          <p>Husband, Siberian Husky Dad, Yo-Yoer and Web Developer</p>

          <div className='c-about-me-links'>
            <a
              href='https://github.com/GavMan1995'
              target='_blank'
              rel="noopener noreferrer">
              <span className='fa fa-github-square'/>
            </a>

            <a
              href='https://www.linkedin.com/in/gavman1995/'
              target='_blank'
              rel="noopener noreferrer">
              <span className='fa fa-linkedin-square'/>
            </a>
          </div>
        </section>

        <section className='o-section o-section--white o-section--no-bottom-padding'>
          <h1 className='o-section__header'>About me</h1>
          <p className='c-about-me-copy'>
            I have been professionally programming since may of 2016, and
            unprofessionally programming since, well, I can't remember. I went
            to the DevPoint Labs bootcamp Full Stack Development Course
            enjoying every second of it, and fell even more in love with programming.
            In my free time I enjoy yoyoing, playing with my husky puppy, taking
            care of my snakes and going on adventures with my beautiful wife.
            I also love taking online courses and always keeping my programming
            skills up to date, and am currently interested in leveling up my
            design skills.
          </p>
        </section>

        <section className='o-section o-section--white o-section--no-bottom-padding'>
          <h1 className='o-section__header'>Project Examples</h1>
          <a
            href='https://belcher.herokuapp.com/'
            rel='noopener noreferrer'
            target='_blank'
            className='c-card'>
            <h3>Belcher (DevPoint Labs Capstone)</h3>
            <img
              alt='Belcher'
              src='https://res.cloudinary.com/gavmanweb/image/upload/v1507338216/Screen_Shot_2017-10-06_at_8.50.43_AM_zwowak.png' />
          </a>

          <a
            href='https://www.nav.com'
            rel='noopener noreferrer'
            target='_blank'
            className='c-card'>
            <h3>Nav (Current Fulltime Job)</h3>
            <img
              alt='Nav Inc'
              src='https://res.cloudinary.com/gavmanweb/image/upload/v1507338736/Screen_Shot_2017-10-06_at_7_otwlww.png' />
          </a>

          <a
            href='https://github.com/GavMan1995/nasgul'
            rel='noopener noreferrer'
            target='_blank'
            className='c-card'>
            <h3>Nasgul (Unused CSS Finder)</h3>
            <img
              alt='Nasgul'
              src='https://res.cloudinary.com/gavmanweb/image/upload/v1507338316/Screen_Shot_2017-10-06_at_7.04.55_PM_zuv0mu.png' />
          </a>

          <div className='c-card-placeholder' />
          <div className='c-card-placeholder' />
          <div className='c-card-placeholder' />
        </section>
      </div>
    )
  }
}
