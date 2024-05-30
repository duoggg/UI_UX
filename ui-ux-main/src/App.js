
import KPIs from './components/KPIs/KPIs';
import { Routes,Route } from 'react-router-dom';
import Task from './components/Task/task';
import Setting from './components/Setting/setting';
import Notification from './components/Notification/notification';
import Dashboard  from './components/Dashboard';
import { BrowserRouter } from "react-router-dom";
import Password from './components/Setting/password'
import Profile from './components/Profile/profile'
import SettingNotifi from './components/Setting/notifi';
import Forecast from './components/Forecast/forecast';
import Lich from './components/Calendar/calendar';
import Login from './components/Login/Login';
import Register from './components/Register/register';
import CalendarMobile from './components/CalendarMobile';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/calendar' element={<Lich/>}/>
          <Route path='/kpis' element={<KPIs/>}/>
          <Route path='/task' element={<Task/>}/>
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/setting/noti' element={<SettingNotifi/>}/>
          <Route path='/setting/pass' element={<Password />}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/forecast' element={<Forecast/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Register/>}/>
          <Route path='/calendar-mobile' element={<CalendarMobile/>}/>
          
          {/* <Route path='/Notification' element={<Notification/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
