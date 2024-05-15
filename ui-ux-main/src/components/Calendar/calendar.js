import React, { useState } from "react";
import "./calendar.css";

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
    <div className="calendar">
      <div className="calendar-container">
        <div className="header">
          <div className="title">Lịch</div>
          <button onClick={handlePrevMonth}>&lt;</button>
          <span>
            {months[date.getMonth()]} {date.getFullYear()}
          </span>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>

        <div className="nameDays">
          <div className="item1 item"> T2 </div>
          <div className="item2 item"> T3 </div>
          <div className="item3 item"> T4 </div>
          <div className="item4 item"> T5 </div>
          <div className="item5 item"> T6 </div>
          <div className="item6 item"> T7 </div>
          <div className="item7 item"> CN </div>
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
              className={`day ${day === currentDay ? "today" : ""} ${
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
                  <li key={index} dangerouslySetInnerHTML={{ __html: task }} />
                ))
              ) : (
                <li>Không có công việc nào trong ngày {selectedDay} </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
