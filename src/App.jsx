import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About';
import Store from './components/Store';


function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/store"  element={<Store />} />
      <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
