import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import images from '../components/images'

export default function HomePage() {
  return (
    <div className='c-page'>
      <section className='o-section o-section--gradient o-section--center'>
        {/* <div className='c-img-container c-img-container--about-me'>
          <img alt='loading' src='https://res.cloudinary.com/gavmanweb/image/upload/v1491349329/portfolio/gavyn_caldwell_alt_riqaio.jpg' />
        </div> */}
        <p className='c-about-me-title'>
          Husband, Siberian Husky Dad, Yo-Yoer and Front-end Web Developer
            </p>

        {/* <a 
            className='c-btn-gradient' 
            href='http://res.cloudinary.com/gavmanweb/image/upload/v1509581043/Resume_izs6bs.pdf' 
            download>
            <p className='c-btn-gradient__text'>Download My Resume</p>
          </a> */}

        <div className='c-about-me-links'>
          <a
            href='https://github.com/GavMan1995'
            target='_blank'
            rel="noopener noreferrer">
            <span className='fa fa-github-square' />
          </a>

          <a
            href='https://www.linkedin.com/in/gavman1995/'
            target='_blank'
            rel="noopener noreferrer">
            <span className='fa fa-linkedin-square' />
          </a>

          <a
            href='https://codepen.io/gavman1995/'
            target='_blank'
            rel="noopener noreferrer">
            <span className='fa fa-codepen' />
          </a>
        </div>
      </section>

      <section className='o-section o-section--white'>
        <main className='o-section__main-content'>
          <h1 className='o-section__header'>About Me</h1>
          <p className='c-about-me-copy'>
            I am a Front End Web Developer with a passion for building excellent,
            beautiful, and responsive websites. I code amazing websites using ReactJS,
            HTML, CSS and I am currently growing my NodeJS skills.
            I love learning and am constantly taking new online courses with an emphasis
            on learning JavaScript. I love learning to code, writing code and being able
            to use my creativity while making amazing websites.
            My professional experience includes working closely with Designers and Back End
            developers, to deliver new enterprise apps, as well as a new line of revenue
            for "Nav Inc" using HTML5, CSS3 and JavaScript (React).
            Outside of coding, I love to go on adventures with my wife and siberian husky!
          </p>
        </main>

        <aside className='o-section__aside-content'>
          <Carousel
            autoPlay
            dynamicHeight
            infiniteLoop
            interval={5000}
            transitionTime={800}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            stopOnHover={false}>
            {images.map((image, i) => <div key={i}><img src={image} alt='' /></div>)}
          </Carousel>
        </aside>
      </section>

      <section className='o-section'>
        <aside className='o-section__aside-content o-section__aside-content--center o-section__aside-content--last-on-mobile'>
          <div className='c-img-container c-img-container--react'>
            <img src='https://res.cloudinary.com/gavmanweb/image/upload/v1512019872/portfolio/react_qcumv6.svg' alt='' />
          </div>
        </aside>

        <main className='o-section__main-content'>
          <h1 className='o-section__header'>Why React?</h1>
          <p className='c-about-me-copy'>
            React is a JavaScript library made by Facebook, reactjs.org specifies react as
            "A declarative, efficient, and flexible JavaScript library for building user
            interfaces." In my words, React is THE BEST JavaScript framework/library to build the
            front end of a website or static websites in general. React makes it very easy to make
            user interfaces that are interactive, flexible, and user friendly. React makes it easy
            to hook up API's, CMS's, Backends etc, and display the data on your website. React
            allows single page apps, which means routing is insanely fast. In general React makes
            writing JavaScript a breeze.
          </p>
        </main>
      </section>

      <section className='o-section o-section--white'>
        <main className='o-section__main-content'>
          <h1 className='o-section__header'>No HTML/CSS frameworks</h1>
          <p className='c-about-me-copy'>
            I write my own HTML and CSS (SCSS). I do this because it allows for better customization
            over using a framework like bootstrap. Not only that, front end frameworks like
            bootstrap are HUGE, which causes the load time of your website to go up drastically,
            and make it harder for your mobile users to enjoy your website.
            Using custom CSS for each website means that your website will be unique, it will
            load faster than any other website out their using a front end framework, and it means
            that I can go beyond the limits of those frameworks and do anything.
          </p>
        </main>

        <aside className='o-section__aside-content o-section__aside-content--center'>
          <div className='c-img-container c-img-container--html-css'>
            <img src='https://res.cloudinary.com/gavmanweb/image/upload/v1512020333/portfolio/html_leenj1.png' alt='' />
          </div>

          <div className='c-img-container c-img-container--html-css'>
            <img src='https://res.cloudinary.com/gavmanweb/image/upload/v1512020337/portfolio/css_hydemc.png' alt='' />
          </div>
        </aside>
      </section>

      <section className='c-projects'>
        <a
          href='https://belcher.herokuapp.com/'
          rel='noopener noreferrer'
          target='_blank'
          className='c-projects__project'>
          <img
            alt='Belcher'
            src='https://res.cloudinary.com/gavmanweb/image/upload/v1507338216/portfolio/Screen_Shot_2017-10-06_at_8.50.43_AM_zwowak.png' />
          <div className='c-project__about'>
            <h1>Belcher</h1>
            <h3>Capstone project at DevPoint Labs, essentially tinder for food.</h3>
          </div>
        </a>

        <a
          href='https://www.nav.com'
          rel='noopener noreferrer'
          target='_blank'
          className='c-projects__project'>
          <img
            alt='Nav Inc'
            src='https://res.cloudinary.com/gavmanweb/image/upload/v1507338736/portfolio/Screen_Shot_2017-10-06_at_7_otwlww.png' />
          <div className='c-project__about'>
            <h1>Nav Inc</h1>
            <h3>1 year 6 months full time job, Fintech app for small businesses.</h3>
          </div>
        </a>

        <a
          href='https://github.com/GavMan1995/nasgul'
          rel='noopener noreferrer'
          target='_blank'
          className='c-projects__project'>
          <img
            alt='Nasgul'
            src='https://res.cloudinary.com/gavmanweb/image/upload/v1507338316/portfolio/Screen_Shot_2017-10-06_at_7.04.55_PM_zuv0mu.png' />
          <div className='c-project__about'>
            <h1>Nasgul</h1>
            <h3>Script used to find unused css and delete it.</h3>
          </div>
        </a>

        <div className='c-projects__project-placeholder' />
        <div className='c-projects__project-placeholder' />
        <div className='c-projects__project-placeholder' />
      </section >
    </div >
  )
}
