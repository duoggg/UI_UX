import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';

export const Header = (props) => {
  const { title } = props;
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <header className="header">
      <FontAwesomeIcon className='icon' icon={faBars} onClick={toggleNav}/>
      <div className="header-title">{title}</div>
      <FontAwesomeIcon className='icon' icon={faBell}/>
      <nav className={`nav ${showNav ? 'show' : ''}`}>
        <ul>
          <li>
            <Link to="/home" className='link'>Trang chủ</Link>
          </li>
          <li>
            <Link to="/dashboard" className='link'>Dashboard</Link>
          </li>
          <li>
            <Link to="/calendar" className='link'>Lịch</Link>
          </li>
          <li>
            <Link to="/kpis" className='link'>KPIs</Link>
          </li>
          <li>
            <Link to="/task" className='link'>Nhiệm vụ</Link>
          </li>
          <li>
            <Link to="/setting" className='link'>Cài đặt</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;