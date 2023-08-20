import React from 'react'
import cls from './Header.module.scss'
import Banner from '../Banner/Banner'


const Header = () => {

	const headerTitle = ['Добро пожаловать в', 'JANAT', 'Фитнес-клуб'];
	const headerContent =
		'С момента нашего открытия наши занятия в тренажерном зале вдохновляют всех! Благодаря этому каждый участник чувствует себя частью одного большого и страстного сообщества! Имея это в виду, вы всегда можете обратиться к нашим инструкторам по фитнесу за любой помощью. Их конечная цель — сделать вас максимально здоровым и сильным.';

	return (
		<>
			<header>
				<Banner title={headerTitle} content={headerContent} buttonText='Начать!' />
			</header>
		</>
	)
}

export default Header
