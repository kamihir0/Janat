import React from 'react'
import cls from './HeadingTitle.module.scss'
import { links } from '../Utils'

const HeadingTitle = ({ children, to }) => {

	console.log(to)

	return (
		<div className={cls.HeadingTitle} id={to}>
			<h1>{children}</h1>
		</div>
	)
}




export default HeadingTitle