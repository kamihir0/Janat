import React from 'react'
import cls from './styles/Programs.module.scss'
import CoachCard from '../Components/Cards/Program/Program';
import { sportsData } from '../Components/Utils';
import HeadingTitle from '../Components/HeadingTitle';

const Programs = () => {

  return (
    <>
      <HeadingTitle>Наши программы</HeadingTitle>
      <div className={cls.cardWrapper} >
        {sportsData.map((item => (
          <CoachCard {...item} key={item.id} />
        )))
        }
      </div>
    </>
  )
}

export default Programs