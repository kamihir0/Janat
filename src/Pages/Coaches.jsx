import React from 'react'
import cls from './styles/Coaches.module.scss'
import HeadingTitle from '../Components/HeadingTitle'
import { coachesData } from '../Components/Utils'
import CoachCard from '../Components/Cards/Coach/CoachCard'
import { v4 as uid } from 'uuid';

const Coaches = () => {
	return (
		<>
			<HeadingTitle to='сoach'>Наши тренеры</HeadingTitle>
			<div className={cls.Coach}>
				{coachesData.map((item, index) => (
					<CoachCard {...item} key={uid()} />
				))}
			</div>
		</>
	)
}

export default Coaches