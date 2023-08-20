import React from 'react'
import cls from './Banner.module.scss'


const PhraseBanner = ({ children, progress }) => {

	const styles = {
		position: 'relative',
		display: 'inline-block',
		fontSize: '44px',
		textTransform: 'uppercase',
		letterSpacing: '4px',
		color: 'black',
		margin: 0,
		paddingBottom: '10px',
	};

	const afterStyles = {
		content: '',
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: `${progress}%`,
		height: '8px',
		backgroundColor: '#ff0a0a',
		transition: 'width 0.3s ease-in-out',
	}

	return (
		<div className={cls.banner}>
			<h1 style={styles}>
				{children}
				<span style={afterStyles}></span>
			</h1>
		</div>
	)
}


export default PhraseBanner