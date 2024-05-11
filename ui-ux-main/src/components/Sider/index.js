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
  return (
    <>
      <div className='container'>
        <div className='inner-logo'>
          <a href='#'><Logo/></a>
          <a href='#'><DAPAT/></a>
        </div>        
        <div className='inner-content'>
            <div className='Dashboard'>
              <IconDashboard />
              <p>Dashboard</p>
            </div>
            <div className='Calender'>
              <IconCalender />
              <p>Lịch</p>
            </div>
            <div className='KPI'>
              <IconKPI />
              <p>KPIs</p>
            </div>
            <div className='Target'>
              <IconObj />
              <p>Mục tiêu</p>
            </div>
            <div className='Setting'>
              <IconSetting />
              <p>Cài đặt</p>
            </div>
            <div className='sign-out'>
              <IconSignOut/>
              <p>Đăng xuất</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Sider;