import { BsInstagram, BsPhone, BsWhatsapp } from "react-icons/bs"
import {GiRotaryPhone} from 'react-icons/gi'



export const links = [
    {
      id: 1,
      title: 'Тренер',
      to:'/Coach'
    },
    {
      id: 2,
      title: 'Цены',
      to: '/Price'
    },
    {
      id: 3,
      title: 'Расписание',
      to: '/Schedule'
    }
  ]

export const mess=[
    {
        id:1,
        icon:<BsWhatsapp/>,
        route:'https://wa.me/+996556019981?text=Здравствуйте%2C+у+меня+есть+вопрос'
    },
    {
        id:2,
        icon:<BsInstagram/>,
        route:'https://www.instagram.com/fitness_club_janat/'
    },
]