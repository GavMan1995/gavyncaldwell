import React from 'react'
import { Link } from 'react-router-dom'

export default function MessageReceived() {
  return (
    <div className='c-page c-page--received'>
      <div className='c-received'>
        <h1>
          Thank you for contacting me, I will get back to
          you as soon as I can. I hope you have an amazing day!
        </h1>

        <Link className='c-btn c-btn--outline-white' to='/'>
          Go Back
        </Link>
      </div>
    </div>
  )
}