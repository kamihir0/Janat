import React from 'react'
import Footer from '../../Components/Footer'
import Mid from '../../Components/Mid'
import Navbar from '../../Components/Navbar'
import cls from './Coach.module.scss'
import CoachPhoto from '../../assets/img/Coach.jpg'


const Coach = () => {
    return(
        <div className={cls.Coach}>
            <Navbar/>
            <h1 className={cls.h1}>ПЕРСОНАЛЬНЫЙ ТРЕНЕР</h1>
            <div className={cls.centre}>
                <div>
                    <h2 >САБИРОВ БАХРОМ</h2>
                    <br />
                    <p>Баха - эксперт, с которым стоит поговорить, если ваша цель в фитнесе - похудеть или привести себя в тонус. Работая с клиентами с помощью высокоинтенсивных тренировок и индивидуальных фитнес-планов, Баха не принимает отказов, когда речь заходит о ваших целях.</p>
                    <br />
                    <p>Имея опыт работы в области спортивной психологии и физиотерапии, Баха понимает, как разум и тело должны работать вместе, чтобы вы могли добиться успеха.</p>
                </div>
                <div>
                    <img src={CoachPhoto} alt="" />
                </div>
            </div>
            <Mid/>
            <Footer/>
        </div>
        
    )
}




export default Coach