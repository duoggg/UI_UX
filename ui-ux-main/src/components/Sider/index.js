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
      <div className='sider'>
        <div className='inner-logo'>
          <a href='#'><Logo/></a>
          <a href='#'><DAPAT/></a>
        </div>        
        <div className='inner-content'>
            <div className='inner-item'>
              <IconDashboard />
              <p>Dashboard</p>
            </div>
            <div>
              <IconCalender />
              <p>Lịch</p>
            </div>
            <div>
              <IconKPI />
              <p>KPIs</p>
            </div>
            <div>
              <IconObj />
              <p>Mục tiêu</p>
            </div>
            <div>
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