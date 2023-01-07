import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense,useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import { CartContext } from './context/CartContext'

const Product = React.lazy(() => import('./components/Product'))
const Store = React.lazy(() => import('./components/Store'))

function App() {

  const { getItems } = useContext(CartContext)

  useEffect(() => {
    getItems()
    
  }, [])

  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<h3 className='text-center'>Loading....</h3>}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  )
}

export default App
