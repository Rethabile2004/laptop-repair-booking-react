import '/src/Components/Home/Contact.css'

function Contact(){
    return (
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
          {/* <div className="contact-socials">
            <a href="#"><img src="/src/assets/github.png" style={{ width: "100px" }} alt="" /></a>
            <a href="#"><img src="/src/assets/linkedIn.svg" style={{ width: "100px" }} alt="" /></a>
            <a href="#"><img src="/src/assets/whatsapp.png" style={{ width: "100px" }} alt="" /></a>
          </div> */}
        </div>
      </section>
    )
}
export default Contact;