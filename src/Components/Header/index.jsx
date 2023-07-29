import React from 'react'
import cls from './Header.module.scss'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'


const Header = () => {
 
    const navigate = useNavigate()
    const goToPricePage = () => navigate('/Price')
    return (
        <div>
            <header className={cls.root}>
                <Navbar />
                <div className={cls.banner}>
                    <h2>Дайте себе возможность сделать себя лучше</h2>
                    <button onClick={goToPricePage}>Давай, начинай!</button>
                </div>
            </header>
        </div>
    )
}

export default Header
