import { useState } from 'react';
import React from 'react';
import Header from '../../components/Header';
import './Home.css';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faTasks, faGear, faSignOut, faChartLine, faChartPie } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateClick = (date) => {
  setSelectedDate(date);
  };

  const getWeekDates = (date) => {
    const today = new Date(date);
    const currentDay = today.getDay();
    const firstDayOfWeek = new Date(today.setDate(today.getDate() - currentDay + (currentDay === 0 ? -6 : 1)));

    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(firstDayOfWeek);
      date.setDate(firstDayOfWeek.getDate() + i);
      dates.push(date);
    }

    return dates;
  };

  const weekDates = getWeekDates(selectedDate); 

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('vi-VN', options); // Sử dụng vi-VN để hiển thị tiếng Việt
  };

  const [importantTasks, setImportantTasks] = useState(0); // State lưu số công việc quan trọng

  // Giả sử hàm này được gọi khi bạn fetch dữ liệu từ trang calendar
  const fetchCalendarData = async () => {
    try {
      // ... Logic fetch dữ liệu từ trang calendar ...

      // Giả sử dữ liệu trả về có dạng: { importantTasks: 4, ... }
      const data = { importantTasks: 4 }; 
      setImportantTasks(data.importantTasks);
    } catch (error) {
      console.error('Lỗi khi fetch dữ liệu:', error);
    }
  };

  // Gọi fetchCalendarData khi component được mount
  React.useEffect(() => {
    fetchCalendarData();
  }, []);

  return (
    <div className="Home">
      <Header title="Trang chủ" />
      <div className="content">
        <div className="calendar">
          <div className="calendar-header">
            <div className="selected-date">{formatDate(selectedDate)}</div>
          </div>
          <div className="days">
            {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day, index) => (
              <div key={index}>{day}</div>
            ))}
          </div>
          <div className="dates">
            {weekDates.map((date, index) => (
              <div 
              key={index} 
              className={`today ${date.toDateString() === selectedDate.toDateString() ? 'select' : ''}`}
              onClick={() => handleDateClick(date)}>
                {date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}
                {/* Hiển thị dot (chưa có logic lấy từ dữ liệu) */}
                {date.getDate() === 8 || date.getDate() === 10 || date.getDate() === 15 ? <span className="dot"></span> : null}
              </div>
            ))}
          </div>
        <div className="task-reminder">
            <span className="important">Có {importantTasks} công việc cần làm</span> 
          <Link to="/calendar-mobile" className="see-more-button">Xem chi tiết</Link> 
        </div>          
        </div>

        <div className="features">
          <Link to="/dashboard" className="feature">
            <FontAwesomeIcon icon={faChartPie} className="icon"/>
            <div>Dashboard</div>
          </Link>
          <Link to="/kpis" className="feature">
            <FontAwesomeIcon icon={faChartLine} className="icon"/>
            <div>KPIs</div>
          </Link>
          <Link to="/task" className="feature">
            <FontAwesomeIcon icon={faTasks} className="icon"/>
            <div>Mục tiêu</div>
          </Link>
          <Link to="/calendar" className="feature">
            <FontAwesomeIcon icon={faCalendar} className="icon"/>
            <div>Lịch</div>
          </Link>
          <Link to="/setting" className="feature">
            <FontAwesomeIcon icon={faGear} className="icon"/>
            <div>Cài đặt</div>
          </Link>
          <Link to="/" className="feature">
            <FontAwesomeIcon icon={faSignOut} className="icon"/>
            <div>Đăng xuất</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
