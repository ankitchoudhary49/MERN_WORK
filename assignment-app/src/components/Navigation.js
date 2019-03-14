import React from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom';

const Navigate = (props) => {
    return (
      <nav className='nav-wrapper blue darken-4'>
      <a href='/' className='brand-logo left'> Personal Info </a>
      <ul className='right'>
      <li> <Link to='/'> Personal Info </Link> </li>
      <li> <Link to='/home'> Home </Link></li>
      <li> <Link to='/about'> About </Link> </li>
      </ul>
      </nav>
    )
}

export default withRouter(Navigate);
