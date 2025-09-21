import './App.css';
import Home from './Components/Home/Home.jsx';
import NavBar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Navbar/Footer.jsx';
import BookingForm from './Components/Booking/BookingForm.jsx';
import SuccessPage from './Components/Booking/SuccessPage/success.jsx';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import Services from '/src/Components/Services/Services.jsx';
import Contact from './Components/Home/Contact.jsx';
import About from './Components/About/About.jsx';
import ContactPage from './Components/Contact/ContactPage.jsx';
import ServicePage from './Components/Services/ServicesPage.jsx';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<SuccessPage/>}/>
          <Route path='/booking-form' element={<BookingForm/>}/>
          <Route path='/services' element={<ServicePage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/contact' element={<Contact/>}/> 
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
