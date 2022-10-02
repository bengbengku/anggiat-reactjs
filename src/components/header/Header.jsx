import React from 'react'
import { Link } from 'react-router-dom'
import FootprintIcon from '../../icons/FootprintIcon'
import './style.css'
import { FaGithub } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <div className='header_wrapper'>
        <Link to='/' className='header_logo'>
          <FootprintIcon />
          <span>Anggiat Napitupulu</span>
        </Link>
        <Link to='/' className='header_link_a'>
          Biografi
        </Link>
        <Link to='/' className='header_link_a'>
          Contact
        </Link>
      </div>
      <a
        href='https://github.com/bengbengku'
        target='_blank'
        className='header_source'
        rel='noopener noreferrer'
      >
        <FaGithub />
        <span>Source</span>
      </a>
    </header>
  )
}

export default Header
