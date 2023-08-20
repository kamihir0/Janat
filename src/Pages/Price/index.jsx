import React from 'react'
import Footer from '../../Components/Footer'
import Mid from '../../Components/HeadingTitle'
import cls from './Price.module.scss'


const Price = () => {
    return (
        <div className={cls.Price}>
            {/* <Navbar /> */}
            <h1 className={cls.h11}>ЦЕНА</h1>
            <div className={cls.centre2}>
                <div>
                    <h2>ПРОСТОЙ <span>2000с</span></h2>
                    <br />
                    <ul><p>Включает в себя:</p>
                    <br />
                        <li>2 персональных занятий</li>
                        <li>3 дня в неделю</li>
                    </ul>
                </div>
                <div>
                    <h2>БЕЗЛИМИТНЫЙ <span>3000с</span></h2>
                    <br />
                    <ul><p>Включает в себя:</p>
                    <br />
                        <li>3-кратные персональные тренировки</li>
                        <li>Неограниченный доступ в тренажерный зал</li>
                        <li>Личный план питания</li>
                    </ul>
                </div>
            </div>
            <Mid/>
            <Footer/>
        </div>
    )
}




export default Price