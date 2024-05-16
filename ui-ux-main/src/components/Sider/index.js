import './style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  DAPAT, 
  Logo,
  IconCalender,
  IconDashboard,
  IconKPI,
  IconObj,
  IconSetting,
  IconSignOut,
} from '../../assets/index';

export const Sider = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
      <div className='sider'>
        <div className='inner-logo'>
          <a href='#'><Logo/></a>
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
            <Link to="/calendar" className='link-tag'>
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