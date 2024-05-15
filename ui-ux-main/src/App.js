import Header from './components/Header';
import Sider from './components/Sider';
import './App.css';
import KPIs from './components/KPIs/KPIs';
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
      <SettingNotifi/>
    </>
  );
}

export default App;
