import React, { useState } from "react";
import "./calendar.css";
import './calendarResponsive.css';
import Sider from '../Sider';
import Header from '../Header';
const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [tasks, setTasks] = useState({
    1: [
      "6:00 <br/> Bạn có lịch học tiếng Nhật",
      "8:00 <br/> Bạn có lịch làm bài tập ITSS",
      "14:00 <br/> Bạn có lịch làm bài tập UI/UX",
    ],
    5: ["Task 3"],
    // Thêm công việc cho các ngày khác...
  });

  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const months = [
    "Tháng 1,",
    "Tháng 2,",
    "Tháng 3,",
    "Tháng 4,",
    "Tháng 5,",
    "Tháng 6,",
    "Tháng 7,",
    "Tháng 8,",
    "Tháng 9,",
    "Tháng 10,",
    "Tháng 11,",
    "Tháng 12,",
  ];

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setDate((prevDate) => {
      const prevMonth = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() - 1
      );
      return prevMonth;
    });
  };

  const handleNextMonth = () => {
    setDate((prevDate) => {
      const nextMonth = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() + 1
      );
      return nextMonth;
    });
  };

  const days = Array.from(
    { length: daysInMonth(date.getMonth(), date.getFullYear()) },
    (_, index) => index + 1
  );

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
     <>
            <Sider/>
            {<Header title={"Lịch"}/>}
            <br></br>
            <br></br>
            <br></br>
    <div className="calendar">
      <div className="calendar-container">
        <div className="header-calendar">
          {/* <button class ="button" onClick={handlePrevMonth}>&lt;</button> */}
          <button class="button" onClick={handlePrevMonth}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 23" width="20" height="20">
    <path fill="currentColor" d="M5 12H5M12 19l-7-7 7-7"/>
  </svg>
</button>
          <span>
            {months[date.getMonth()]} {date.getFullYear()}
          </span>
          <button class="button" onClick={handleNextMonth}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 23" width="20" height="20">
    <path fill="currentColor" d="M5 12h14M12 5l7 7-7 7"/>
  </svg></button>

        </div>

        <div className="days">
          <div className="day-calendar item-calendar"> T2 </div>
          <div className="day-calendar item-calendar"> T3 </div>
          <div className="day-calendar item-calendar"> T4 </div>
          <div className="day-calendar item-calendar"> T5 </div>
          <div className="day-calendar item-calendar"> T6 </div>
          <div className="day-calendar item-calendar"> T7 </div>
          <div className="day-calendar item-calendar"> CN </div>
        </div>

        <div className="days">
          {/* {Array.from({
            length: daysInMonth(date.getMonth(), date.getFullYear()),
          }).map((_, index) => (
            <div key={index} className="day">
              {index + 1}
            </div>
          ))} */}
       
          {days.map((day) => (
            <div
              key={day}
              className={`day-calendar ${day === currentDay ? "today" : ""} ${
                day === selectedDay ? "selected" : ""
              }`}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      <div className="task">
        <div className="headerTask">Việc cần làm </div>
        {selectedDay && (
          <div className="task-list">
            {/* <h2>Công việc ngày {selectedDay}:</h2> */}
            <ul>
              {tasks[selectedDay] ? (
                tasks[selectedDay].map((task, index) => (
                  <div className="calendar-noti"> <li key={index} dangerouslySetInnerHTML={{ __html: task }} /></div>
                ))
              ) : (
                <div className="calendar-noti"><li>Không có công việc nào trong ngày {selectedDay} </li></div>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Calendar;