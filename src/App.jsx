import './App.css';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const services = [
    {
      id: 1,
      title: 'Consultation',
      description: 'Book expert advice tailored to your needs.',
      img: '/src/assets/solution.svg',
    },
    {
      id: 2,
      title: 'Therapy Sessions',
      description: 'Professional support for mental wellness.',
      img: '/src/assets/message.svg',
    },
    {
      id: 3,
      title: 'Career Coaching',
      description: 'Guidance to help you reach your goals.',
      img: 'src/assets/educate.svg',
    },
  ];
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
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Your Next Booking Experience</h1>
          <p>Professional services, seamless scheduling, and a user-friendly interface—all in one place.</p>
          <button className="hero-btn">Book Now</button>
        </div>
      </section>
      {/* //////////////////// */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <img style={{ width: "120px" }} src={service.img} alt="" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="contact">
        <div className="contact-content">
          <h2>Ready to Get Started?</h2>
          <p>Reach out to us or book your first consultation today.</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div className="contact-socials">
            <a href="#"><img src="/src/assets/github.png" style={{ width: "100px" }} alt="" /></a>
            <a href="#"><img src="/src/assets/linkedIn.svg" style={{ width: "100px" }} alt="" /></a>
            <a href="#"><img src="/src/assets/whatsapp.png" style={{ width: "100px" }} alt="" /></a>
          </div>
        </div>
      </section>
      {/* <section className="jobFormSection">
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
       */}
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
