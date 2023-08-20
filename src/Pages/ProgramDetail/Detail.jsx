import React from 'react'
import { useParams } from 'react-router-dom'
import { coachesData, sportsData } from '../../Components/Utils'
import Banner from '../../Components/Banner/Banner'
import cls from '../styles/Detail.module.scss'
import HeadingTitle from '../../Components/HeadingTitle'
import CoachCard from '../../Components/Cards/Coach/CoachCard'
import Footer from '../../Components/Footer'
import PriceTable from '../../Components/PriceTable/PriceTable'

const Detail = () => {
  const { id } = useParams();
  const headerTitle = ['Детали программы', id];
  const filteredData = sportsData.find(item => item.label === id);

  const sportInfo = {
    MMA: {
      name: "бескомпромиссного MMA",
      description: "Здесь мы не только тренируем, но и формируем победителей. Готов стать лучшей версией себя?",
      bannerUrl: "https://images.squarespace-cdn.com/content/v1/55f97542e4b0bd73ff1920e7/1453692470956-9HFCJV4B16ACOEZBD3D9/Robby_GD_KBoxing_WEB.jpg?format=1000w"
    },
    Фитнес: {
      name: "фитнеса",
      description: "Здесь каждый шаг приближает вас к здоровой и сильной жизни. Готовы начать свой путь к идеальной форме?",
      bannerUrl: "https://wallpapercave.com/wp/wp7578870.jpg"
    },
    Дзюдо: {
      name: "дзюдо",
      description: "Здесь мы формируем не только физическую силу, но и ментальную выдержку. Готовы стать настоящим борцом и победителем?",
      bannerUrl: "https://wallpaperaccess.com/full/433570.jpg"
    },
    Таэквандо: {
      name: "таэквандо",
      description: "Здесь мы развиваем не только вашу гибкость и силу, но и дух борца. Готовы достичь гармонии между телом и разумом?",
      bannerUrl: "https://www.lima2019.pe/sites/default/files/2019-07/para-Taekwondo-banner.jpg"
    },
  };

  const sportName = sportInfo[filteredData?.label]?.name || id;
  const sportDescription = sportInfo[filteredData?.label]?.description || "";

  const defaultBannerContent = `Добро пожаловать в мир ${sportName} с Janat! ${sportDescription} Присоединяйтесь к нам прямо сейчас!`;

  const coachForSport = coachesData.filter(coach => coach.type === id);


  const tableInfo = [
    {
      title: 'Утро без ограничений',
      noLimits: true,
      detail: [
        {
          validity: '28 дней',
          timeStart: '08:00',
          timeEnd: '23:00',
          price: 2000,
          freezing: false,
        },
        {
          validity: '3-месяц',
          timeStart: '08:00',
          timeEnd: '23:00',
          freezing: 6,
          price: '7500',
        },
      ]
    },
    {
      title: 'Четыре дня в неделю (16 посещений)',
      detail: [
        {
          validity: '28 дней',
          timeStart: '08:00',
          timeEnd: '23:00',
          price: 2500,
          freezing: false,
        },
        {
          validity: '84 дней',
          timeStart: '08:00',
          timeEnd: '23:00',
          freezing: 6,
          price: '7000',
        },
      ]
    },
    {
      title: 'Три дня в неделю (12 посещений)',
      detail: [
        {
          validity: '28 дней',
          timeStart: '08:00',
          timeEnd: '23:00',
          price: 2500,
          freezing: false,
        },
        {
          validity: '84 дней',
          timeStart: '08:00',
          timeEnd: '23:00',
          freezing: 6,
          price: '7000',
        },
      ]
    },
    {
      title: 'Утро дневной без ограничений',
      noLimits: true,
      detail: [
        {
          validity: '28 дней',
          timeStart: '08:00',
          timeEnd: '23:00',
          price: 2500,
          freezing: false,
        },
        {
          validity: '84 дней',
          timeStart: '08:00',
          timeEnd: '23:00',
          freezing: 6,
          price: '7000',
        },
      ]
    },
    {
      title: 'Утро дневной (16 посещений)',
      detail: [
        {
          validity: '28 дней',
          timeStart: '08:00',
          timeEnd: '23:00',
          price: 2500,
          freezing: false,
        },
        {
          validity: '84 дней',
          timeStart: '08:00',
          timeEnd: '23:00',
          freezing: 6,
          price: '7000',
        },
      ]
    },
    {
      title: 'Утро дневной (12 посещений)',
      detail: [
        {
          validity: '28 дней',
          timeStart: '08:00',
          timeEnd: '23:00',
          price: 2500,
          freezing: false,
        },
        {
          validity: '84 дней',
          timeStart: '08:00',
          timeEnd: '23:00',
          freezing: 6,
          price: '7000',
        },
      ]
    },
  ]

  const tableInfoMMA = [
    {
      title: 'MMA (12 посещений)',
      mma: true,
      detail: [
        {
          validity: '28 дней',
          timeStart: '08:00',
          timeEnd: '23:00',
          age: "14лет и выше",
          price: 2500,
          freezing: false,
        },
        {
          validity: '28 дней',
          timeStart: '08:00',
          timeEnd: '23:00',
          age: '8лет-14лет',
          freezing: false,
          price: '1500',
        },
      ]
    },
  ]
  const tableInfoJudo = [
    {
      title: 'Дзюдо (12 посещений)',
      detail: [
        {
          validity: '28 дней',
          timeStart: '08:00',
          timeEnd: '23:00',
          price: 3000,
          freezing: false,
        },
        {
          validity: '28 дней',
          timeStart: '08:00',
          timeEnd: '23:00',
          freezing: false,
          price: '2500',
        },
      ]
    },
  ]
  const tableInfoTaek = [
    {
      title: 'Таэквандо (12 посещений)',
      mma: true,
      detail: [
        {
          validity: '28 дней',
          timeStart: '16:00',
          timeEnd: '18:00',
          age: "Старшая группа",
          price: 3000,
          freezing: false,
        },
        {
          validity: '28 дней',
          timeStart: '14:00',
          timeEnd: '16:00',
          age: 'Младшая группа',
          freezing: false,
          price: '2500',
        },
      ]
    },
  ]

  let tablePlans;
  if (id === 'MMA') {
    tablePlans = tableInfoMMA;
  } else if (id === 'Дзюдо')
    tablePlans = tableInfoJudo;
  else if (id === 'Таэквандо') {
    tablePlans = tableInfoTaek;

  } else {
    tablePlans = tableInfo;
  }

  return (
    <>
      <Banner title={headerTitle} content={defaultBannerContent} buttonText="Начать!" bannerUrl={sportInfo[filteredData?.label]?.bannerUrl} />
      <HeadingTitle>Занятия {id}</HeadingTitle>
      <div className={cls.wrapper}>
        <div className={cls.right}>
          <PriceTable plans={tablePlans} />
        </div>
      </div>
      <HeadingTitle>Тренер {id}</HeadingTitle>
      <div className={cls.coachWrapper}>
        <div className={cls.coach}>
          <CoachCard {...coachForSport[0]} />
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Detail;
