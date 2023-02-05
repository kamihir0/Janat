import React from 'react'
import { FiMapPin } from 'react-icons/fi'
import cls from './Footer.module.scss'
import { mess } from '../Utils'
import { Link, Route } from 'react-router-dom'

const Footer = () => {
    return (
        <div className={cls.Footer}>
            <div>
                <h2>РАБОЧЕЕ ВРЕМЯ</h2>
                <p>Понедельник - Суббота 08:00 - 24:00</p>
                <p>Воскресенье выходной</p>
                <div className={cls.mess}>
                    {
                        mess.map(({id, route, icon}) => (
                            <a href={route} key={id}>
                                {icon}
                            </a>
                        ))
                    }
                </div>
            </div>
            <div>
                <h2>АДРЕС</h2>
                <p>​Г.Ош, Алишера Навои, 68/1</p>
            </div>
        </div>
    )
}



export default Footer