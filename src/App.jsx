import './App.css'
import { Route, Routes } from 'react-router'
import Navbar from './Components/Navbar'
import Company from './routes/Company'
import Contact from './routes/Contact'
import Home from './routes/Home'
import Services from './routes/Services'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route  path="/services" element={<Services />}/>
        <Route path="/company" element={<Company />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App
