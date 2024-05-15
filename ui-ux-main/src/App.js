import Header from "./components/Header";
import Sider from "./components/Sider";
import "./App.css";
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
      <Header title={"Header"} />
      {/* <KPIs/> */}
      {/* <Task/> */}
      {/* <Setting/> */}
      {/* <Notification/> */}
      <Calendar />
    </>
  );
}

export default App;
