import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './Components/Header'
import Hero from '../src/Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Skills from './Components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />
        
      </Routes>
    </Router>
    </>
  )
}

export default App
