import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">My lOGO</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink> */}
          <NavLink className={({isActive})=> isActive ? "text-info nav-link": "nav-link"} aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={({isActive})=> isActive ? "text-info nav-link": "nav-link"} aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={({isActive})=> isActive ? "text-info nav-link": "nav-link"} aria-current="page" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={({isActive})=> isActive ? "text-info nav-link": "nav-link"} aria-current="page" to="/quotes">Quotes</NavLink>
        </li>
       
     
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Header