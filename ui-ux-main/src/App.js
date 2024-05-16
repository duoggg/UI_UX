<<<<<<< HEAD
import Header from "./components/Header";
import Sider from "./components/Sider";
// import "./App.css";
import KPIs from "./components/KPIs/KPIs";
import Task from "./components/Task/task";
import Setting from "./components/Setting/setting";
import Profile from "./components/Profile/profile";
import Password from "./components/Setting/password";
import SettingNotifi from "./components/Setting/notifi";
import Notification from "./components/Notification/notification";
import Calendar from "./components/Calendar/calendar";
function App() {
  return (
    <>
      <Sider />
      {<Header title={"Header"} />}
      {/* <KPIs/> */}
      {/* <Task/> */}
      {/* <Setting/> */}
      {/* <Notification/> */}
      <Calendar />
=======
import Header from './components/Header';
import Sider from './components/Sider';
import './App.css';

import KPIs from './components/KPIs/KPIs';
import { Routes,Route } from 'react-router-dom';
import Task from './components/Task/task';
import Setting from './components/Setting/setting';
import Profile from './components/Profile/profile';
import Password from './components/Setting/password';
import SettingNotifi from './components/Setting/notifi';
import Notification from './components/Notification/notification';
import Dashboard  from './components/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/Dashboard' element={<Dashboard />}/>
          <Route path='/KPIs' element={<KPIs/>}/>
          <Route path='/Task' element={<Task/>}/>
          <Route path='/Setting' element={<Setting/>}/>
          <Route path='/Notification' element={<Notification/>}/>
        </Routes>
      </BrowserRouter>
>>>>>>> 4f9efbb439662b005ce3462ffbae33d8cfdcc541
    </>
  );
}

export default App;
