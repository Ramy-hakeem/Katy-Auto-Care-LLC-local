import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import { useEffect, useState } from 'react';
import Home from './pages/shared/Home';
import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';
import Login from './pages/guest/Login';
import AddCar from './pages/client/AddCar';
import Register from './pages/guest/Register';
import ForgotPassword from './pages/guest/ForgotPassword';

function App() {
  const [localData, setLocalData] = useState(localStorage["katy-user"] ? localStorage["katy-user"] : localStorage["katy-user"] = null)
  const [sessionData, setSessionData] = useState(sessionStorage["katy-user"] ? sessionStorage["katy-user"] : sessionStorage["katy-user"] = null)

  const SharedPages = [
    { name: "Home", path: "/", element: <Home /> }
  ]
  const clientPages = [
    { name: "Home", path: "/", element: <Home /> }
  ]

  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/add-car' element={<AddCar />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
