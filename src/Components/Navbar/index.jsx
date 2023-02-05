import React from 'react'
import { NavLink } from 'react-router-dom'
import cls from './Navbar.module.scss'
import { useNavigate } from 'react-router-dom'
import { links } from '../Utils';
import { Link } from 'react-router-dom';
// import { scrolling, useAnchor } from '../Hooks';





const Navbar = () => {
  <Link
    activeClass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  ></Link>
  const [isHide, setIsHide] = React.useState(true)
  const navigate = useNavigate()

  const goToMainPage = () => navigate('/')


  const handleMenu = () => {
    setIsHide(prev => !prev)
  }

  return (
    <nav className={cls.root}>
      <div>
        <h2 onClick={() => goToMainPage()}>
          JANAT CLUB
        </h2>
      </div>
      <ul className={cls.show}>
        {
          links.map(({id, title, to})=>(
            <li key={id}>
              <Link to={to}>
                {title}
              </Link>
            </li>
          ))
        
        }
      </ul>
    </nav>
  )
}

export default Navbar
