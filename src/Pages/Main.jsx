import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/PhraseBanner'
import Footer from '../Components/Footer'
import Programs from './Programs'
import Coaches from './Coaches'
import Gallery from './Gallery'

const Main = () => {
	return (
		<>
			<Header />
			<Programs />
			<Coaches />
			<Gallery />
			<Footer />
		</>
	)
}

export default Main