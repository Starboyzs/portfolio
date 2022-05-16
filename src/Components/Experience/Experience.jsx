import React from 'react'
import "./Experience.css"
import {BsFillCheckCircleFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id="experience">
    <h5>What Skill I Have</h5>
    <h2>My Experience</h2>
    <div className='container experience__container'>
      <div className='experience__frontend'>
        <h3>frontend Development</h3>
        <div className='experience__content'>
          
          <article className='expereince__details'>
          <BsFillCheckCircleFill className='experience__details-icon'/>
          <div>
          <h4>Html</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>
          <article className='expereince__details'>
          <BsFillCheckCircleFill className='experience__details-icon'/>
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>
          <article className='expereince__details'>
          <BsFillCheckCircleFill className='experience__details-icon'/>
          <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>Experienced</small>
          </div>
         
          </article>
          <article className='expereince__details'>
          <BsFillCheckCircleFill className='experience__details-icon'/>
          <div>
          <h4>Javascript</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>
          <article className='expereince__details'>
          <BsFillCheckCircleFill className='experience__details-icon'/>
          <div>
          <h4>React</h4>
          <small className='text-light'>Experienced</small>
          </div>
         
          </article>
          <article className='expereince__details'>
          <BsFillCheckCircleFill className='experience__details-icon'/>
          <div>
          <h4>Git & Github</h4>
          <small className='text-light'>Experienced</small>
          </div>
        
          </article>
        </div>
      
      </div>
      {/* end of frontend */}

      <div className='experience__backend'>
      <h3>Backend Development</h3>
      <div className='experience__content'>

      <article className='expereince__details'>
          <BsFillCheckCircleFill className='experience__details-icon'/>
          <div>
          <h4>Node JS</h4>
          <small className='text-light'>Experienced</small>
          </div>
         
          </article>
          <article className='expereince__details'>
          <BsFillCheckCircleFill className='experience__details-icon'/>
          <div>
          <h4>PHP</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>
          <article className='expereince__details'>
          <BsFillCheckCircleFill className='experience__details-icon'/>
          <div>
          <h4>Python</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>
          <article className='expereince__details'>
          <BsFillCheckCircleFill className='experience__details-icon'/>
          <div>
          <h4>Mongo DB</h4>
          <small className='text-light'>Experienced</small>
          </div>
         
          </article>
          <article className='expereince__details'>
          <BsFillCheckCircleFill className='experience__details-icon'/>
          <div>
          <h4>My SQL</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>

          <article className='expereince__details'>
          <BsFillCheckCircleFill className='experience__details-icon'/>
          <div>
          <h4>Express.JS</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article>
          
      </div>
      </div>
      </div>
    </section>
  )
}

export default Experience