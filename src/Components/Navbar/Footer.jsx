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
            <img src="/src/assets/github.png" style={{ width: "40px", height: "40px" }} alt="" />
            <img src="/src/assets/linkedIn.svg" style={{ width: "40px", height: "40px" }} alt="" />
            <img src="/src/assets/whatsapp.png" style={{ width: "40px", height: "40px" }} alt="" />
            {/* <div className="contact-socials">
            <a href="#"><img src="/src/assets/github.png" style={{ width: "100px" }} alt="" /></a>
            <a href="#"><img src="/src/assets/linkedIn.svg" style={{ width: "70px",height:"70px"  }} alt="" /></a>
            <a href="#"><img src="/src/assets/whatsapp.png" style={{ width: "70px",height:"70px" }} alt="" /></a>
          </div> */}
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
