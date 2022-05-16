import React from 'react'
import "./Header.css"
import CV from "../../assets/Ayowale Ojo-Resume.pdf"
import CTA from "./CTA"
import ME from "../../assets/Ayo_Header-removebg-preview (1).png"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    
    <header>
      <div className='container header__container'>
      <h5> Hello I'm</h5>
      <h1>Ayowale Ojo</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA
        text1={"Download CV"}
        text2 ={"let's talk"}
        link1={CV} 
        link2={"#contact"}
      />
      <HeaderSocials
        className={"header__socials"}
      />
      <div className='me'>
        <img src={ME} alt="me"/>
        </div>
        <a href="#contact" className='scroll__down'>scroll_down</a>
      </div>
    </header>
  )
}

export default Header