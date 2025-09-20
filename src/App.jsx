import './App.css';
import Home from './Components/Home/Home.jsx';
import NavBar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Navbar/Footer.jsx';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
