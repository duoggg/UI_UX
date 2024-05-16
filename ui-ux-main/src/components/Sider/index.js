import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import KPIs from '../KPIs/KPIs';
import Task from '../Task/task';
import './style.css';
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
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveItemIndex(index);
   
  };

 
  return (
    <>
      <div className='container'>
        <div className='inner-logo'>
          <a href='#'><Logo/></a>
          <a href='#'><DAPAT/></a>
        </div>        
        <div className='inner-content'>
            <div 
              className={`item ${activeItemIndex === 'dash' ? 'active1' : 'item'}`}
              onClick={() => handleItemClick('dash')} >
              <IconDashboard />
              <Link to="/kpi" className="custom-link" ><p>Dashboard</p></Link>
            </div>

            <div className={`item ${activeItemIndex === 'cal' ? 'active1' : 'item'}`}
              onClick={() => handleItemClick('cal')}>
              <IconCalender />
              <Link to="/kpi" className="custom-link" ><p>Lịch</p></Link>
            </div>

            <div className={`item ${activeItemIndex === 'task' ? 'active1' : 'item'}`}
              onClick={() => handleItemClick('task')}>
              <IconKPI />
              <Link to="/task" className="custom-link" ><p>Công việc</p></Link>
            </div>

            <div className={`item ${activeItemIndex === 'kpi' ? 'active1' : 'item'}`}
              onClick={() => handleItemClick('kpi')}>
              <IconObj />
               <Link to="/kpi" className="custom-link" ><p>KPIs</p></Link>
            </div>

            <div className={`item ${activeItemIndex === 'setting' ? 'active1' : 'item'}`}
              onClick={() => handleItemClick('setting')}>
              <IconSetting />
               <Link to="/setting" className="custom-link" ><p>Cài đặt</p></Link>
            </div>

            <div className={`item signout ${activeItemIndex === 'signout' ? 'active1' : 'item'}`}
              onClick={() => handleItemClick('signout')}>
              <IconSignOut/>
               <Link to="/kpi" className="custom-link" ><p>Đăng xuất</p></Link>
            </div>
        </div>
      </div>
      
    </>
  );
};

export default Sider;

