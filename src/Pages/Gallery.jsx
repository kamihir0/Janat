import React from 'react'
import cls from './styles/Gallery.module.scss'
import HeadingTitle from '../Components/HeadingTitle'
import Slider from '../Components/Slider/Slider';
import img1 from '../assets/img/зал1.JPG'
import img2 from '../assets/img/зал2.JPG'
import img3 from '../assets/img/зал3.JPG'
import img4 from '../assets/img/зал4.JPG'
import img5 from '../assets/img/зал5.JPG'
import img6 from '../assets/img/зал6.JPG'
import img7 from '../assets/img/зал7.JPG'
import img8 from '../assets/img/зал8.JPG'
import img9 from '../assets/img/мат1.JPG'
import img10 from '../assets/img/мат2.JPG'
import img11 from '../assets/img/мат3.JPG'
import img12 from '../assets/img/таэквандо1.JPG'

const Gallery = () => {

  const slides = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
    { image: img6 },
    { image: img7 },
    { image: img8 },
    { image: img9 },
    { image: img10 },
    { image: img11 },
    { image: img12 },
  ];

  return (
    <>
      <div className={cls.galleryWrapper}>
        <HeadingTitle to='gallery'>Галерея</HeadingTitle>
        <Slider slides={slides} />
      </div>
    </>
  )
}

export default Gallery