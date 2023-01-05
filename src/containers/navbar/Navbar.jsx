import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai' 
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='app__nav'>
      <div className='app__nav--logo'></div>
      <div className='app__nav--links'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Web designs</a></li>
          <li><a href="#">Mobile designs</a></li>
          <li><a href="#">Illustrations</a></li>
        </ul>
      </div>
      <div className='app__nav--login'>
        <div className="app__nav--login--search">
        <AiOutlineSearch
           />
        <input 
          type="text"
          id='search'
          placeholder='Search'
          aria-label="search"
          />
        </div>
          <button className='app__nav--login--button'><p className='p__font'>Sign up</p></button>
          <button className='app__nav--login--button'><p className='p__font'>Sign in</p></button>
      </div>

    </nav>
  )
}

export default Navbar