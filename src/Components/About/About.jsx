import React from 'react'
import "./About.css"
import me from "../../assets/Ayo_About-removebg-preview (1).png"
import {FiAward} from "react-icons/fi"
import {FiUsers} from "react-icons/fi"
import {MdLibraryAddCheck} from "react-icons/md"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={me} alt="my photo"/>
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
          <article className='about__card'>
          <FiAward className='about__icon'/>
            <h5>experience</h5>
            <small>3+ years working </small>
          </article>

          <article className='about__card'>
          <FiUsers className='about__icon'/>
            <h5>clients</h5>
            <small>200+ worldwide</small>
          </article>

          <article className='about__card'>
          <MdLibraryAddCheck className='about__icon'/>
            <h5>Projects</h5>
            <small>80+ completed projects</small>
          </article>
          </div>
          <p>
          Ayowale Ojo is a passionate web developer with top-notch experience in web  application development. This includes  UI/UX design, Front-end development, Back-end development, brand identity, graphics, illustrations, etc.
          </p>
          <a className='btn btn-primary' href="#contact">let,s Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About