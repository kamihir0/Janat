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
		}, 50);

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
				<div className={cls.footer_inner}>
					<div>
						<h2>РАБОЧЕЕ ВРЕМЯ</h2>
						<p>Понедельник - Суббота 08:00 - 24:00</p>
						<p>Воскресенье выходной</p>

					</div>
					<div>
						<h2>Контакты</h2>
						<p>(+996)-556-01-99-81</p>
					</div>
					<div>
						<h2>АДРЕС</h2>
						<p>​Г.Ош, Алишера Навои, 68/1</p>
					</div>
					<div className={cls.mess}>
						<h2>Мы в соц сетях</h2>
						<div>
							{
								mess.map(({ id, route, icon }) => (
									<a href={route} key={id} target='_blank'>
										{icon}
									</a>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</>

	)
}



export default Footer