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
function App() {
  return (
    <>
      {/* <Sider/> */}
      {/* {<Header title={"Header"}/>} */}
      {/* <KPIs/> */}
      {/* <Task/> */}
      {/* <Setting/> */}
      {/* <KPIs/> */}
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/task" element={<Task />} />
        <Route path="/kpi" element={<KPIs />} />
        <Route path="/setting" element={<Setting />} />

      </Routes>
    </>
  );
}

export default App;
