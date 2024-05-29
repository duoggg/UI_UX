import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars, FaBell } from 'react-icons/fa';

export const Header = (props) => {
    const { title } = props;
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="header">
      <FontAwesomeIcon className='icon' icon={FaBars} onClick={toggleNav}/>
      <div className="header-title">{title}</div>
      <FontAwesomeIcon className='icon' icon={FaBell}/>
      <nav className={`nav ${showNav ? 'show' : ''}`}>
        <ul>
          <li>
            <a href="#">Trang chủ</a>
          </li>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">KPIs</a>
          </li>
          <li>
            <a href="#">Nhiệm vụ</a>
          </li>
          <li>
            <a href="#">Cài đặt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;