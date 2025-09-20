import './App.css';
import Home from './Components/Home/Home.jsx';
import NavBar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Navbar/Footer.jsx';
import BookingForm from './Components/Booking/BookingForm.jsx';
import SuccessPage from './Components/Booking/SuccessPage/success.jsx';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<SuccessPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
