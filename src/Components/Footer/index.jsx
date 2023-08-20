import React, { useEffect, useState } from 'react'
import cls from './Footer.module.scss'
import { mess, motivationalPhrases } from '../Utils'
import Banner from '../PhraseBanner'

const Footer = () => {
	const [progress, setProgress] = useState(0);
	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

	useEffect(() => {
		const progressInterval = setInterval(() => {
			setProgress(prevProgress => prevProgress + 1);
		}, 100);

		if (progress === 100) {
			const nextIndex = (currentPhraseIndex + 1) % motivationalPhrases.length;
			setCurrentPhraseIndex(nextIndex);
			setProgress(0);
		}

		return () => {
			clearInterval(progressInterval);
		};
	}, [progress, currentPhraseIndex]);

	const currentPhrase = motivationalPhrases[currentPhraseIndex];

	return (
		<>
			<Banner progress={progress}>{currentPhrase}</Banner>
			<div className={cls.Footer}>
				<div>
					<h2>РАБОЧЕЕ ВРЕМЯ</h2>
					<p>Понедельник - Суббота 08:00 - 24:00</p>
					<p>Воскресенье выходной</p>

				</div>
				<div>
					<h2>АДРЕС</h2>
					<p>​Г.Ош, Алишера Навои, 68/1</p>
				</div>
				<div className={cls.mess}>
					{
						mess.map(({ id, route, icon }) => (
							<a href={route} key={id}>
								{icon}
							</a>
						))
					}
				</div>
			</div>
			<div className={cls.bottomFooter}>
				<div className={cls.bottomFooterContent}>
					<h4>
						<span>Copyright</span> © <span>Janat</span> Fitnes club
					</h4>
					<p>Все права защищены</p>
				</div>
			</div>
		</>

	)
}



export default Footer