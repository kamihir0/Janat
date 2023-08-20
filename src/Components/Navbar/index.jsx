import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { slide as Menu } from 'react-burger-menu';
import cls from './Navbar.module.scss';
import { links } from '../Utils';
import { Link } from 'react-scroll'

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const goToMainPage = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={cls.root}>
      <div className={cls.navbarLogo}>
        <h2 onClick={goToMainPage}>JANAT CLUB</h2>
      </div>
      <ul className={cls.show}>
        {links.map(({ id, title, to }) => (
          <li key={id}>
            <Link to={to} smooth={true} duration={500} offset={-50} spy={true}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <div className={isMobileMenuOpen ? cls.mobileWrapperActive : cls.mobileWrapper}>
        <button className={cls.burgerMenu1} onClick={toggleMobileMenu}>
          <FaTimes />
        </button>
        <ul className={cls.mobileList}>
          {links.map(({ id, title, to }) => (
            <li key={id}>
              <Link to={to} smooth={true} duration={500} offset={-50} spy={true}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button className={cls.burgerMenu} onClick={toggleMobileMenu}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
