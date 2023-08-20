import React from 'react';
import cls from './Slider.module.scss';
import { Carousel } from 'react-responsive-carousel';
import { Box } from '@chakra-ui/react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Импортируйте стили карусели

const Slider = ({ slides }) => {
  return (
    <Box style={{ display: 'flex', justifyContent: "center" }} bg={'#151515'}>
      <Carousel
        className={cls.wrapper}
        useKeyboardArrows={true}
        showArrows={true}
        showThumbs={true}
        stopOnHover={true}
        interval={3000}
        infiniteLoop
        autoPlay
        style={{ width: '200px', height: '200px' }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={cls.slide}>
            <img src={slide.image} alt={`Slide ${index}`} />
            <div className={cls.slideContentBox}>
              <div className={cls.slideTitle}>
                <h1 className={cls.slideLabel}>
                  <span>janat</span>
                  <span>gym</span>
                </h1>
                <h2>Fitness Club</h2>
              </div>
              <div className={cls.slideContent}>
                <p>
                  Ваш идеальный партнер в достижении здоровья и физической формы. Мы предлагаем разнообразные тренировки, высококвалифицированных тренеров, современное оборудование и уютную атмосферу. Присоединяйтесь к нашему сообществу, где вы сможете заниматься фитнесом, аэробикой, йогой, боксом и другими видами тренировок. У нас есть гибкие расписания, индивидуальные подходы и мотивация для каждого уровня подготовки. Начните свой путь к здоровью и фитнесу прямо сейчас вместе с Janat Fitness Club!
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slider;
