import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg bg-red">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Luis Antonio Aguilar Hernandez xd</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link active" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Pasatiempo'>Hobbies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Formacion'>Formacion Academica</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar




