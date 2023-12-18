import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
// import { CiMenuFries } from "react-icons/ci";
// import { CiMenuBurger } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { LiaTimesSolid } from "react-icons/lia";
import { slide as Menu } from 'react-burger-menu';
import cls from './Navbar.module.scss';
import { links } from '../Utils';
import { Link } from 'react-scroll'
import { FaPhone } from "react-icons/fa";

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
        <li><a href='tel:0556160404'>Позвонить</a> <FaPhone /></li>
      </ul>

      {
        isMobileMenuOpen && (
          <div className={cls.mobileWrapper}>
            <button className={cls.burgerMenu1} onClick={toggleMobileMenu}>
              <LiaTimesSolid />
            </button>
            <ul className={cls.mobileList}>
              {links.map(({ id, title, to }) => (
                <li key={id} >
                  <Link to={to} smooth={true} duration={500} offset={-50} spy={true} >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      }
      <button className={cls.burgerMenu} onClick={toggleMobileMenu}>
        <RiMenu3Fill />
      </button>
    </nav>

  );
};

export default Navbar;
// <Menu
//   right
//   isOpen={isMobileMenuOpen}
//   onClose={toggleMobileMenu}
//   width={"auto"}
// // customBurgerIcon={<FaTimes fontSize={32} />}
// >
//   <ul className={cls.mobileList}>
//     {links.map(({ id, title, to }) => (
//       <li key={id}>
//         <Link to={to} smooth={true} duration={500} offset={-50} spy={true}>
//           {title}
//         </Link>
//       </li>
//     ))}
//   </ul>
// </Menu>