import React from 'react'
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import Services from "./Components/Services/Services"
import Portfolio from "./Components/Portfolio/Portfolio"
import Testimonials from "./Components/Textimonials/Testimonials"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      

    </div>
  )
}

export default App