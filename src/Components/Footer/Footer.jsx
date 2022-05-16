import React from 'react'
import "./Footer.css"
import HeaderSocials from "../Header/HeaderSocials"

const date = new Date()
const year = date.getFullYear()

const Fotter = () => {
  return (
   <footer>
     <a href="#" className='footer__logo'>Ayowale Ojo</a>
     <ul className='permalinks'>
       <li><a href="#">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#experience">Experience</a></li>
       <li><a href="#services">Services</a></li>
       <li><a href="#portfolio">Portfolio</a></li>
       <li><a href="#testimonials">Testimonials</a></li>
       <li><a href="#contact">contact</a></li>
     </ul>
     <HeaderSocials
       className={"footer__socials"}
     />
     <div className='footer__copyright'>
       <small >&copy; Ayowale Ojo {year}</small>
     </div>
   </footer>
  )
}

export default Fotter