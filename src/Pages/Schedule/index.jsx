import React from 'react'
import Navbar from '../../Components/Navbar'
import Mid from '../../Components/Mid'
import Footer from '../../Components/Footer'
import cls from './Schedule.module.scss'


const Schedule = () => {
    return (
        <div className={cls.Schedule}>
            <Navbar />
            <h1 className={cls.h111}>РАСПИСАНИЕ</h1>
            <div className={cls.centre3}>
                <div>
                    <br />
                    <br />
                    <h2>ПОНЕДЕЛЬНИК</h2>
                    <br />
                    <br />
                    <p>8:00-8:50</p>
                    <p>Zumba</p>
                </div>
                <div>
                    <br />
                    <br />
                    <h2>СРЕДА</h2>
                    <br />
                    <br />
                    <p>8:00-8:50</p>
                    <p>Zumba</p>
                </div>
            </div>
            <div className={cls.centre3}>
                <div>
                    <br />
                    <br />
                    <h2>ПЯТНИЦА</h2>
                    <br />
                    <br />
                    <p>8:00-8:50</p>
                    <p>Zumba</p>
                </div>
                <div>
                    <br />
                    <br />
                    <h2>СУББОТА</h2>
                    <br />
                    <br />
                    <p>8:00-8:50</p>
                    <p>Zumba</p>
                </div>
            </div>
            <Mid />
            <Footer />
        </div>
    )
}




export default Schedule