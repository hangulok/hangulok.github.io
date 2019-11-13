import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link href="#">
  <a className="navbar-brand">오픈소스</a>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link href='/'>
          <a className="nav-link">Home</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href='/about'>
          <a className="nav-link">소개</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href='/todo'>
          <a className="nav-link">하는일</a>
        </Link>
      </li>
     </ul>  
     </div>  
  </nav>
)

export default Nav
