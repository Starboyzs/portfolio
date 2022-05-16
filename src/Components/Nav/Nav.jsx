import React,{useState} from 'react'
import "./Nav.css"
import {AiFillHome} from "react-icons/ai"
import {FcAbout} from "react-icons/fc"
import {BsBook} from "react-icons/bs"
import {RiServiceLine} from "react-icons/ri"
import {AiOutlineContacts} from "react-icons/ai"
const Nav = () => {
  const[active,setActive]=useState("#")
  return (
    <nav>
      <a href="#" onClick ={()=>{setActive("#")}} className={active==="#" ?"active":null}> <AiFillHome/></a>
      <a href="#about" onClick ={()=>setActive("#about")} className={active==="#about"?"active":null}><FcAbout/></a>
      <a href="#experience" onClick={()=>{setActive("#experience")}} className={active==="#experience"?"active":null}> <BsBook/></a>
      <a href="#services" onClick={()=>{setActive("#services")}} className={active==="#services"?"active":"#"}> <RiServiceLine/></a>
      <a href="#contact" onClick={()=>{setActive("#contacts")}} className={active==="#contacts"&&"active"}> <AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav