import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const IMG_URL = ['https://m.media-amazon.com/images/I/312Ny+664ML._AC_SY400_.jpg','https://m.media-amazon.com/images/I/81q6ccf+j0L._AC_SY400_.jpg','https://m.media-amazon.com/images/I/91lQL3hQtnL._AC_SY400_.jpg','https://m.media-amazon.com/images/I/61zZ4euDYLL._AC_SY400_.jpg','https://m.media-amazon.com/images/I/71Qs1Wl4X3L._AC_SY400_.jpg','https://m.media-amazon.com/images/I/81zpywASigL._AC_SY400_.jpg','https://m.media-amazon.com/images/I/718hNP549GL._AC_SY400_.jpg']
const CarouselCategory = () => {
  return (
    <div className='m-10 gap-10 bg-white'>
        <Swiper
        slidesPerView = {5}
        autoplay = {{
            delay: 2000
        }}
        navigation
        modules ={[Navigation,Autoplay]}
        className='h-[150px]'
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
            <SwiperSlide>
                <img src={IMG_URL[4]}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={IMG_URL[5]}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={IMG_URL[6]}/>
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default CarouselCategory