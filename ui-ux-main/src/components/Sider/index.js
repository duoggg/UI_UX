import './style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  DAPAT, 
  IconCalender,
  IconDashboard,
  IconKPI,
  IconObj,
  IconSetting,
  IconSignOut,
  IconProfile,
} from '../../assets/index';
import logo from '../../assets/logo.png';

export const Sider = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
      <div className='sider'>
        <div className='inner-logo'>
          <img src ={logo}/>
          <a href='#'><DAPAT/></a>
        </div>        
        <div className='inner-content'>

        <Link to="/dashboard" className='link-tag'>
            <div className={`inner-item ${selectedItem === 'item1' ? 'selected' : ''}`}
                onClick={() => handleItemClick('item1')}>
                  
                  <IconDashboard />
                  <p>Dashboard</p>
                
                </div>
            </Link>
            <Link to="/calendar-mobile" className='link-tag'>
            <div
                className={`inner-item ${selectedItem === 'item2' ? 'selected' : ''}`}
                onClick={() => handleItemClick('item2')}
              >
                  
                  <IconCalender />
                  <p>Lịch</p>
                
                </div>
            </Link>


            <Link to="/task" className='link-tag'>
              <div
                className={`inner-item ${selectedItem === 'item3' ? 'selected' : ''}`}
                onClick={() => handleItemClick('item3')}>
              
              <IconKPI />
              <p>Công việc</p>
              
             </div>
            </Link>


            <Link to="/kpis" className='link-tag'>
            <div
            className={`inner-item ${selectedItem === 'item4' ? 'selected' : ''}`}
            onClick={() => handleItemClick('item4')}
              >
              <IconObj />
              <p>KPIs</p>
              
            </div>
            </Link>

            <Link to="/setting" className='link-tag'>
            <div
            className={`inner-item ${selectedItem === 'item5' ? 'selected' : ''}`}
            onClick={() => handleItemClick('item5')} >
             
              <IconSetting />
              <p>Cài đặt</p>
              
            </div>
            </Link>
            <Link to="/setting" className='link-tag'>
            <div
            className={`signout inner-item ${selectedItem === 'item6' ? 'selected' : ''}`}
            onClick={() => handleItemClick('item6')}
          >
              
              <IconSignOut/>
              <p>Đăng xuất</p>
             
            </div>
            </Link>
        </div>
      </div>
    </>
  );
};

export default Sider;