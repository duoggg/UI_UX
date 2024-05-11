import './style.css';
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export const Header = (props) => {
  const { title } = props;
  const styleIcon = {
    fill: "#fff",
    width: "1.5em",
    height: "1.5em",
    cursor: "pointer",
  };

  return (
    <>
      <div className='header'>
        <div className='inner-title'>
          <p>{title}</p>
        </div>
        <div className='inner-content'>
          <div className='search-box'>
            <form action="">
              <input type="search" required/>
              <IoSearch className="fa"/>
            </form>
          </div>
          <div className='bell'>
            <FaBell style={styleIcon}/>
          </div>
          <div className='user'>
            <FaUser style={styleIcon}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;