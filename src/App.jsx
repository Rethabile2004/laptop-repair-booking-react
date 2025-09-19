import './App.css';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="navbar">
        <div className="navContainer">
          <h1 className="logo">MySite</h1>
          <nav className="navLinks" aria-label="Main navigation">
            <ul className={isOpen ? 'navMenu open' : 'navMenu'}>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
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
      <section className="jobFormSection">
      <div className="jobContainer">
        <h2>Job Application</h2>
        <p>Please fill out your details to apply for the position.</p>
        <form className="jobForm">
          <div className="jobRow">
            <label htmlFor="fullName">Full Name</label>
            <input id="fullName" type="text" placeholder="John Doe" />
          </div>
          <div className="jobRow">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="john@example.com" />
          </div>
          <div className="jobRow">
            <label htmlFor="position">Consultation reason</label>
            <select id="consiltation">
              <option value="">Select an option</option>
              <option value="frontend">Broken Screen</option>
              <option value="backend">Laptop won't turn on</option>
              <option value="fullstack">Upgrade RAM</option>
              <option value="frontend">Laptop does not emmit sound</option>
              <option value="backend">Laptop damaged by water/ drink</option>
              <option value="fullstack">Other</option>
            </select>
          </div>
          <div className="jobRow">
            <label htmlFor="laptopImage">Upload Images</label>
            <input id="laptopImage" type="file" />
          </div>
          <button className="jobSubmit">Apply Now</button>
        </form>
      </div>
    </section>
      
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerBrand">
          <h2>MySite</h2>
          <p>Building better web experiences.</p>
        </div>

        <div className="footerLinks">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footerSocial">
          <span>🔗</span>
          <span>📘</span>
          <span>🐦</span>
        </div>
      </div>

      <div className="footerBottom">
        <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default App
