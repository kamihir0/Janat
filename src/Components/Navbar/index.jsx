import React from 'react'
import { NavLink } from 'react-router-dom'
import cls from './Navbar.module.scss'
import { useNavigate } from 'react-router-dom'
import { links } from '../Utils';
import { FaBars as BurgerMenu } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { AiOutlineClose } from 'react-icons/ai';
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

  const [isHide, setIsHide] = React.useState(false)
  const navigate = useNavigate()

  const goToMainPage = () => navigate('/')

  const open = () => {
    setIsHide(true)
  }

  const close = () => {
    setIsHide(false)
  }

  return (
    <nav className={cls.root}>
      <div className={cls.navbarLogo}>
        <h2 onClick={() => goToMainPage()}>
          JANAT CLUB
        </h2>
      </div>
      <ul className={cls.show}>
        {
          links.map(({ id, title, to }) => (
            <li key={id}>
              <Link to={to}>
                {title}
              </Link>
            </li>
          ))

        }
      </ul>
      <div className={!isHide ? cls.mobileWrapper : cls.mobileWrapperActive}>
        <button className={cls.burgerMenu1} onClick={close}>
          <AiOutlineClose />
        </button>
        <ul className={cls.mobileList}>
          {
            links.map(({ id, title, to }) => (
              <li key={id}>
                <Link to={to}>
                  {title}
                </Link>
              </li>
            ))
          }
        </ul>

      </div>
      <button className={cls.burgerMenu} onClick={open}>
        <BurgerMenu />

      </button>
    </nav>
  )
}

export default Navbar
