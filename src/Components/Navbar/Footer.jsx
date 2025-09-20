import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footerContainer">
          <div className="footerBrand">
            <h2>MySite</h2>
            <p>Building better web experiences.</p>
          </div>

          <div className="footerLinks">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
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

export default Footer
