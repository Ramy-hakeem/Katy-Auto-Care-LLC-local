import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';
// import Test from '../test';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
