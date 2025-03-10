import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';



const IMG_URL = ['https://m.media-amazon.com/images/I/61DCCVRJ8pL._SX3000_.png',"https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/new/final/Top_makeup_brands2xz._CB548442874_.png",'https://images-eu.ssl-images-amazon.com/images/G/31/img24/GW/Noise-MB-GW-PC_3000x1200-Prime-Members_axis_bank._CB549151459_.jpg','https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Siddhi/CBCC-PC_Hero_3000x1200_Prime1_sept24._CB563126190_.jpg']

const Carousel = () => {
  return (
    <div className='min-h-[100%] h-[600px] bg-white relative'>
        <Swiper 
        loop={true}
        spaceBetween={50}
        modules={[Navigation,Autoplay]}
        autoplay={{
            delay: 4500
        }
        }
        navigation 
        className='text-white absolute'
        >
            <SwiperSlide>
                <img src={IMG_URL[0]}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={IMG_URL[1]}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={IMG_URL[2]}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={IMG_URL[3]}/>
            </SwiperSlide>
        </Swiper>
        {/* <div className='h-[600px]'></div> */}
        {/* <div className='h-[50%] bg-gradient-to-b from-stone-900'></div> */}
    </div>
  )
}

export default Carousel