import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { coachesData, sportsData } from '../../Components/Utils'
import Banner from '../../Components/Banner/Banner'
import cls from '../styles/Detail.module.scss'
import HeadingTitle from '../../Components/HeadingTitle'
import CoachCard from '../../Components/Cards/Coach/CoachCard'
import Footer from '../../Components/Footer'
import PriceTable from '../../Components/PriceTable/PriceTable'
import { Button } from '../../Components/Buttons/Button'

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
      title: 'Утро-Дневной без ограничений',
      noLimits: true,
      detail: [
        {
          validity: '28 дней',
          timeStart: '08:00',
          timeEnd: '16:00',
          price: 3000,
          freezing: false,
        },
        {
          validity: '84 дней',
          timeStart: '08:00',
          timeEnd: '16:00',
          freezing: 6,
          price: '7200',
        },
      ]
    },
    {
      title: 'Утро-Дневной (16 посещений)',
      detail: [
        {
          validity: '28 дней',
          timeStart: '08:00',
          timeEnd: '16:00',
          price: 2400,
          freezing: false,
        },
        {
          validity: '84 дней',
          timeStart: '08:00',
          timeEnd: '16:00',
          freezing: 6,
          price: '5500',
        },
      ]
    },
    {
      title: 'Утро-Дневной(12 посещений)',
      detail: [
        {
          validity: '28 дней',
          timeStart: '08:00',
          timeEnd: '16:00',
          price: 2000,
          freezing: false,
        },
        {
          validity: '84 дней',
          timeStart: '08:00',
          timeEnd: '16:00',
          freezing: 6,
          price: '4800',
        },
      ]
    },
    {
      title: 'Утро-вечерний без ограничений',
      detail: [
        {
          validity: '28 дней',
          timeStart: '08:00',
          timeEnd: '00:00',
          price: 3000,
          freezing: false,
        },
        {
          validity: '3 месяца',
          timeStart: '08:00',
          timeEnd: '00:00',
          price: '8400',
          freezing: 6,
        },
      ]
    },
    {
      title: 'Четыре дня в неделю (16 посещений)',
      detail: [
        {
          validity: '28 дней',
          timeStart: '08:00',
          timeEnd: '00:00',
          price: 3000,
          freezing: false,
        },
        {
          validity: '84 дней',
          timeStart: '08:00',
          timeEnd: '00:00',
          freezing: 6,
          price: '7200',
        },
      ]
    },
    {
      title: 'Три дня в неделю (12 посещений)',
      detail: [
        {
          validity: '28 дней',
          timeStart: '08:00',
          timeEnd: '00:00',
          price: 2500,
          freezing: false,
        },
        {
          validity: '84 дней',
          timeStart: '08:00',
          timeEnd: '00:00',
          freezing: 6,
          price: '6000',
        },
      ]
    },
    {
      title: 'Разовое посещение',
      noLimits: true,
      detail: [
        {
          // validity: '28 дней',
          timeStart: '16:00',
          timeEnd: '00:00',
          price: 300,
          freezing: false,
        },
      ]
    },
  ]
  const tableInfoWomen = [
    {
      title: 'Для дам (12 посещений)',
      detail: [
        {
          validity: '28 дней',
          // timeStart: '08:00',
          // timeEnd: '16:00',
          price: 2000,
          freezing: false,
        },
        {
          validity: '84 дней',
          // timeStart: '08:00',
          // timeEnd: '16:00',
          freezing: 6,
          price: '4800',
        },
      ]
    },
    {
      title: 'Для дам (16 посещений)',
      detail: [
        {
          validity: '28 дней',
          // timeStart: '08:00',
          // timeEnd: '16:00',
          price: 2500,
          freezing: false,
        },
        {
          validity: '84 дней',
          // timeStart: '08:00',
          // timeEnd: '16:00',
          freezing: 6,
          price: '6000',
        },
      ]
    },

  ]

  const tableInfoMMA = [
    {
      title: 'MMA сборный (12-посещений)',
      // mma: true,
      detail: [
        {
          validity: '28 дней',
          timeStart: '18:00',
          timeEnd: '20:00',
          // age: "14лет и выше",
          price: 2500,
          freezing: false,
        },
      ]
    },
    {
      title: 'MMA сборный (20-посещений)',
      // mma: true,
      detail: [
        {
          validity: '28 дней',
          timeStart: '18:00',
          timeEnd: '20:00',
          // age: "14лет и выше",
          price: 3500,
          freezing: false,
        },
      ]
    },

    {
      title: 'MMА (12-посещений)',
      // mma: true,
      detail: [
        {
          validity: '28 дней',
          timeStart: '20:00',
          timeEnd: '22:00',
          // age: "14лет и выше",
          price: 2000,
          freezing: false,
        },
        // {
        //   validity: '28 дней',
        //   timeStart: '08:00',
        //   timeEnd: '23:00',
        //   // age: '8лет-14лет',
        //   freezing: false,
        //   price: '1500',
        // },
      ]
    },
  ]
  const tableInfoJudo = [
    {
      title: 'Дзюдо (12 посещений)',
      detail: [
        {
          validity: '28 дней',
          timeStart: '08:30',
          timeEnd: '10:30',
          price: 2000,
          freezing: false,
        },
      ]
    },
  ]
  const tableInfoTaek = [
    {
      title: 'Таэквандо (12 посещений)',
      // mma: true,
      detail: [
        {
          validity: '28 дней',
          timeStart: '8:30',
          timeEnd: '10:30',
          freezing: false,
          price: '2000',
        },
      ]
    },
  ]

  let tableDesc;
  if (id === 'MMA') {
    tableDesc = tableInfoMMA;
  } else if (id === 'Дзюдо')
    tableDesc = tableInfoJudo;
  else if (id === 'Таэквандо') {
    tableDesc = tableInfoTaek;

  } else {
    tableDesc = tableInfo;
  }
  const [tablePlans, setTablePlans] = useState(tableInfo);

  const setMen = () => {
    setTablePlans(tableInfo);
  };

  const setWomen = () => {
    setTablePlans(tableInfoWomen);
  };

  return (
    <>
      <Banner title={headerTitle} content={defaultBannerContent} buttonText="Начать!" bannerUrl={sportInfo[filteredData?.label]?.bannerUrl} />
      <HeadingTitle>Занятия {id}</HeadingTitle>
      <div className={cls.wrapper}>
        {filteredData?.label === 'Фитнес' && (
          <div className={cls.buttonParrent}>
            <Button variant="outline" action={setMen}>
              Мужчинам
            </Button>
            <Button variant="outline" action={setWomen}>
              Для дам
            </Button>
          </div>
        )}
        <div className={cls.right}>
          {id.trim() === 'Фитнес' ? (
            <PriceTable plans={tablePlans} />
          ) : (
            <PriceTable plans={tableDesc} />
          )}
        </div>
      </div>
      {/* <HeadingTitle>Тренер {id}</HeadingTitle> */}
      {/* <div className={cls.coachWrapper}>
        <div className={cls.coach}>
          <CoachCard {...coachForSport[0]} />
        </div>
      </div> */}
      <Footer />
    </>
  );
}


export default Detail;
