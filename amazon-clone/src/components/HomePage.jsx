import React from 'react'
import Carousel from './Carousel'
import Card from './Card'
import imgsrc from '../assets/icon.png'
import CarouselCategory from './CarouselCategory'

// theme: {
//     extend: {
//       colors: {
//         amazonclone: {
//           background: '#EAEAED',
//           light_blue: '#232F3A',
//           yellow: '#FEBD69',
//           DEFAULT: '#131921',
//         }
//       }
//     }
//   }
//   ,

const HomePage = () => {
  return (
    <div className='min-w-[1000px] max-w-[1500px] m-auto ' style={{backgroundColor: '#EAEAED'}}>
        
        <Carousel />
        {/* {cards} */}
        <div className='grid grid-cols-3 gap-10 -mt-80 m-10 xl:grid-cols-4'>
            <Card title={'HI there '} imgsrc={imgsrc} description={'this is a description...'} />
            <Card title={'HI there '} imgsrc={imgsrc} description={'this is a description...'} />
            <Card title={'HI there '} imgsrc={imgsrc} description={'this is a description...'} />
            <Card title={'HI there '} imgsrc={imgsrc} description={'this is a description...'} />
            <Card title={'HI there '} imgsrc={imgsrc} description={'this is a description...'} />
            <Card title={'HI there '} imgsrc={imgsrc} description={'this is a description...'} />
            <Card title={'HI there '} imgsrc={imgsrc} description={'this is a description...'} />
            <Card title={'HI there '} imgsrc={imgsrc} description={'this is a description...'} />
            <Card title={'HI there '} imgsrc={imgsrc} description={'this is a description...'} />
            <Card title={'HI there '} imgsrc={imgsrc} description={'this is a description...'} />
            <Card title={'HI there '} imgsrc={imgsrc} description={'this is a description...'} />

        </div>
        <CarouselCategory/>

    </div>
  )
}

export default HomePage