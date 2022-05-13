import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/AppointmentPage/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='lg:max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='appointment' element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
