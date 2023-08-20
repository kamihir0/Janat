import React from 'react'
import cls from './Banner.module.scss'
import { Button } from '../Buttons/Button'

const Banner = ({ title, content, buttonText, bannerUrl }) => {

  const bannerStyles = {
    backgroundImage: bannerUrl
      ? `url(${bannerUrl})`
      : 'url(https://www.usatoday.com/gcdn/presto/2021/07/21/USAT/dfbd657c-1ef5-4dd9-b355-1619bdc2645f-GettyImages-924491214.jpg)',
  };

  return (
    <div className={cls.bannerContainer}>
      <div className={cls.bannerImage} style={bannerStyles}></div >
      <div className={cls.overlay}></div>
      <div className={cls.overlayContent}>
        <h1>
          {title.map((text, index) => (
            <span key={index} className={cls.bannerTitle}>
              {text}
            </span>
          ))}
        </h1>
        <p>{content}</p>
        <Button>{buttonText}</Button>
      </div>
    </div>
  )
}

export default Banner