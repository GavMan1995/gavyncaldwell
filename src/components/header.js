import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='c-header'>
      <Link className='c-header__logo' to='/'>
        <img 
          className='c-logo' 
          alt='loading' 
          src='https://res.cloudinary.com/gavmanweb/image/upload/v1492525031/GavynFullWhite_ezsood.svg' />
        <img 
          className='c-logo c-logo--mobile' 
          alt='loading' 
          src='https://res.cloudinary.com/gavmanweb/image/upload/v1510601618/CuriousCode_Icon_ykmpl8.svg' />
      </Link>

      <div className='c-header__nav'>
        <Link to='/'>Home</Link>
        <Link to='/hire'>Hire Me</Link>
      </div>
    </div>
  )
}
