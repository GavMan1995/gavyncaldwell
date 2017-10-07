import React , { Component } from 'react'

export default class HomePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      siteUrl: 'http://hello',
      emailSent: false
    }
  }


  render () {
    let emailer = null

    if (this.state.emailSent === false) {
      emailer = (
        <form
          onSubmit={() => this.email.bind(this)}
          className='c-contact-form'
          action='https://formcarry.com/s/r1xlEfU3b'
          method='POST'
          accept-charset='UTF-8'>
          <input type='email' placeholder='enter email address' name='email' />
          <textarea defaultValue='Contact Me!' name='message' />
          <button type='submit'>Send</button>
        </form>
      )
    } else {
      emailer = (
        <div className='c-email-img-container'>
          <img alt='' src='https://res.cloudinary.com/gavmanweb/image/upload/v1490468248/hook-1727484_iqppwy.svg' />
          <h2>Message Recieved!</h2>
        </div>
      )
    }

    return (
      <div className='c-page'>
        <section className='c-hero'>
          <div className='c-hero__content-container'>
            <img alt='' src='https://res.cloudinary.com/gavmanweb/image/upload/v1492525925/GavynFullTop_vvkgjf.svg'/>
            <h3>
              Front End Web Developer committed to helping you make an amazing
              experience for your users, and have an amazing one
              yourself. <a href='#contact'>Contact Me</a>
            </h3>
          </div>
          <span className='c-scrolldown'>Scroll Down &#8595;</span>
          <span className='c-overlay' />
        </section>

        <section className='o-section'>
          <main className='o-section__main-content'>
            <h1 className='o-section__header'>Responsive Design</h1>
            <p>
              In todays world
              <a href='http://tcrn.ch/2mHKS9Y' target='_blank' rel='noopener noreferrer'> 51.3% </a>
              of everyone that visits your website will do so on their phones.
              Lets make sure that when they visit yours, it's a great experience!
              read
              <a href='http://bit.ly/2nW6j81' target='_blanck' without rel='noopener noreferrer'>  here </a>
              to learn more.
            </p>

            <h2 className='c-search-form-header'>
              Search here for your website and see if it's mobile friendly
            </h2>
            <form className='c-search-form' onSubmit={this.searchSite.bind(this)}>
              <input
                defaultValue='http://'
                type='text'
                placeholder='Enter Your Website URL'
                ref='siteSearch'/>
              <button type='submit'>Search</button>
            </form>
          </main>

          <aside className='o-section__aside-content o-section__aside-content--right-align'>
            <div className='c-phone-view'>
              <iframe title='mobile-view' src={this.state.siteUrl}></iframe>
            </div>
          </aside>
        </section>

        <section className='o-section o-section--homepage-bg'>
          <aside className='o-section__aside-content o-section__aside-content--vertical-center'>
            <div className='c-img-container c-img-container--hide-on-mobile'>
              <img alt='' src='https://res.cloudinary.com/gavmanweb/image/upload/v1490392405/responsive-2044932_1920_j3yiey.png' />
            </div>
          </aside>

          <main className='o-section__main-content'>
            <h1 className='o-section__header'>Great UX</h1>
            <p>
              UX means User Experience, and it is EXTREMELY important! Great
              UX will help your users get done what they need to
              get done, find what they're looking for and over all have an
              enjoyable experience. Lets give your users just that.
              read <a href='http://bit.ly/2nW6j81' target='_blanck'> here </a>
              to learn more.
            </p>
          </main>
          <span className='c-overlay' />
        </section>

        <section className='o-section' id='contact'>
          <main className='o-section__main-content'>
            <h1 className='o-section__header'>Contact Me!</h1>
            <p>
              Wether you need a website from scratch or you need to fix your website
              I can help. Contact me, tell me everything I need to know and
              I'll contact you asap so we can start making your website AWESOME.
            </p>
          </main>

          <aside className='o-section__aside-content o-section__aside-content--lg'>
            {emailer}
          </aside>
        </section>
      </div>
    )
  }

  email(event) {
    event.preventDefault()
    this.setState({emailSent: true})
  }

  searchSite(event) {
    event.preventDefault()

    let url = this.refs.siteSearch.value
    this.setState({siteUrl: url})
  }
}
