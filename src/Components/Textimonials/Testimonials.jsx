import React from 'react'
import"./Testimonials.css"
import AVATAR1 from "../../assets/avatar1.jpg"
import AVATAR2 from "../../assets/avatar2.jpg"
import AVATAR3 from "../../assets/avatar3.jpg"
import AVATAR4 from "../../assets/avatar4.jpg"
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVATAR1} alt="avatar__one"/>
          </div>
          <h5 className='client__name'>Ojo Ayowale </h5>
            <small className='client__review'> 
            lorem isum dolor sit met conncteru amidlle elist. luto quood inspecti solute
            lorem isum dolor sit met conncteru amidlle elist. luto quood inspecti solute
            lorem isum dolor sit met conncteru amidlle lorem isum dolor sit met conncteru
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVATAR1} alt="avatar__one"/>
          </div>
          <h5 className='client__name'>Ojo Ayowale </h5>
            <small className='client__review'> 
            lorem isum dolor sit met conncteru amidlle elist. luto quood inspecti solute
            lorem isum dolor sit met conncteru amidlle elist. luto quood inspecti solute
            lorem isum dolor sit met conncteru amidlle lorem isum dolor sit met conncter
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVATAR1} alt="avatar__one"/>
          </div>
          <h5 className='client__name'>Ojo Ayowale </h5>
            <small className='client__review'> 
            lorem isum dolor sit met conncteru amidlle elist. luto quood inspecti solute
            lorem isum dolor sit met conncteru amidlle elist. luto quood inspecti solute
            lorem isum dolor sit met conncteru amidlle lorem isum dolor sit met conncteru
            </small>
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default Testimonials