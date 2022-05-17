import React from 'react'
import "./Contact.css"
import {SiGmail} from "react-icons/si"
import {BsTwitter}  from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    

    emailjs.sendForm('service_h8ldhig', 'template_vp01wsb', form.current, 'uHboUw3GCLEp3uUQu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h5> GEt In Touch</h5>
      <h2>Contact me</h2>
      <div className='container contact__container'>
      <div className='contact__options'>
      <article className='contact__option'>
      <SiGmail className='contact__option-icon'/>
      <h4>Email</h4>
      <h5>Ojoayowale3@gmail.com</h5>
      <a href='mailto:Ojoayowale3@gmail.com' target="_blank">send a message</a>
      </article>

      <article className='contact__option'>
      <BsTwitter className='contact__option-icon' />
      <h4>Twitter</h4>
      <h5>@Ayowale_Ojo_</h5>
      <a href='https://twitter.com/Ayowale__Ojo' target="_blank">send a message</a>
      </article>

      <article className='contact__option'>
      <BsWhatsapp className='contact__option-icon'/>
      <h4>Whatsapp</h4>
      <h5>+2348131593204</h5>
      <a href="https://wa.me/+2348131593204" target="_blank">send a message</a>
      </article>

      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name ="name" placeholder='your full name' required/>
        <input type="email" name ="email" placeholder='your email' required/>
        <textarea name='message' rows="7" placeholder="your message" required></textarea>
        <button className ="btn btn-primary" type='submit'>Submit</button>
      </form>
        
      </div>
    </section>
  )
}

export default Contact