import About from "../About/About.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Your Next Booking Experience</h1>
          <p>Professional services, seamless scheduling, and a user-friendly interface—all in one place.</p>
          <button className="hero-btn">Book Now</button>
        </div>
      </section>
      <Services/>
      <About/>
      <Contact/>
    </>
  )
}

export default Home
