import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate('');
  return (
    <>
      <header className="navbar">
        <div className="navContainer">
          <h1 className="logo">MySite</h1>
          <nav className="navLinks" aria-label="Main navigation">
            <ul className={isOpen ? 'navMenu open' : 'navMenu'}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li className='navBtn' onClick={() => navigate('/booking-form')}>Book Now</li>
            </ul>
            <button
              className="menuToggle"
              aria-expanded={isOpen}
              aria-controls="navMenu"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default NavBar
