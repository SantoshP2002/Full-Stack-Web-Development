import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/contact">Contact</Link>
        </nav>
    </div>
  )
}

export default Navbar