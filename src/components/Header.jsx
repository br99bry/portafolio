import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/Logo-blanco.png';
import './styles/Header.scss';
import '../font/flaticon.css';

const Header = () => {
  return (
    <React.Fragment>
      <header className="Header">
        <div className="Header__top">
          <ul className="Header__top-social">
            <li className="Header__top-social-item">
              <a href="https://www.facebook.com/Bwilly785/">
                <i className="flaticon-001-facebook">
                </i>
              </a>
            </li>
            <li className="Header__top-social-item">
              <a href="/">
                <i className="flaticon-002-twitter">
                </i>
              </a>
            </li>
            <li className="Header__top-social-item">
              <a href="https://api.whatsapp.com/send?phone=525541911085">
                <i className="flaticon-003-whatsapp">
                </i>
              </a>
            </li>
            <li className="Header__top-social-item">
              <a href="https://www.linkedin.com/in/bryan-aranda-78138a198/">
                <i className="flaticon-010-linkedin">
                </i>
              </a>
            </li>
            <li className="Header__top-social-item">
              <a href="https://www.instagram.com/BryanAF_Code/?hl=es-la">
                <i className="flaticon-011-instagram">
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="Header__bottom">
          <img src={logo} alt=""/>
          <Link to="/">Sobre mí</Link>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header;