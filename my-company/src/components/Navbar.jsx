import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#282c34', color: 'white' , display: 'flex', gap: '8px', justifyContent: 'space-between'} }>
      <h1>My Company</h1>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
        <li><Link to={'/services'}>Services</Link></li>

      </ul>
      <button style={{ marginLeft: 'auto', padding: '0.5rem 1rem', backgroundColor: '#61dafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Login
      </button>
    </nav>
  )
}

export default Navbar;