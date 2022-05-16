import React from 'react'
import "./Services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX DESIGN</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating user centered designs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>creating user flows and wireframes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Designing UI elments</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating original graphic designs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Incoporating customer feedback</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Good collaboration with product engineers.</p>
            </li>
          </ul>
        </article>
        {/* End of UI&UX */}
      
        <article className='service'>
          <div className='service__head'>
            <h3>Front End Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Consistency thorughout design </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>optimizing web pages for speed</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Enhancing user experience</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating responsive website on streams of devices</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensuring user experience determines design choices</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Determining the structure and design of web pages</p>
            </li>
          </ul>
        </article>
        {/* End of web develoment  */}


        <article className='service'>
          <div className='service__head'>
            <h3>Back End Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Server side web application logic</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web services implementation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Excellent at compiling and analyzing data</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Application Programming Interface implementation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integration of work done by front end developers</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Excellent analytical and time management skill</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services