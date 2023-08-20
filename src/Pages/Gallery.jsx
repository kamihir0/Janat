import React from 'react'
import cls from './styles/Gallery.module.scss'
import HeadingTitle from '../Components/HeadingTitle'
import Slider from '../Components/Slider/Slider';

const Gallery = () => {

  const slides = [
    { image: 'https://prestij.kg/gym2/images/gallery/2.jpg' },
    { image: 'https://prestij.kg/gym2/images/gallery/8.jpg' },
    { image: 'https://prestij.kg/gym2/images/slideshow/13.jpg' },
    { image: 'https://prestij.kg/gym2/images/slideshow/13.jpg' },
    { image: 'https://prestij.kg/gym2/images/slideshow/13.jpg' },
    { image: 'https://prestij.kg/gym2/images/slideshow/13.jpg' },
  ];

  return (
    <>
      <div className={cls.galleryWrapper}>
        <HeadingTitle>Галерея</HeadingTitle>
        <Slider slides={slides} />
      </div>
    </>
  )
}

export default Gallery