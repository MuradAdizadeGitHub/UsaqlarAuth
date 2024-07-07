import './Home.scss'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Link } from 'react-router-dom';

// import required modules
import { Navigation } from 'swiper/modules';
function Home() {
  return (
<>
<section className='home'>


<div className='general'>
  <h1>Home Page</h1>
</div>

<Swiper    slidesPerView={5} navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><Link>Murad</Link></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>


</section>
</>
  )
}

export default Home
