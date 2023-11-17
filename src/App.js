import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import AddProduct from './pages/AddProduct';
import SingleProduct from './pages/SingleProduct';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer'
//Imported necessary dependencies & components for the application, including styling!

//Displaying structure of my application as well as th various routes for different pages/components
function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <div>
        <Footer />
      </div>

    </>
  );
}

export default App;
