import Sider from '../Sider';
import Header from '../Header';
import s from './style.module.css';
import { useState, useEffect } from 'react';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const data = [
  {
    id: 1,
    title: 'Lịch làm bài tập ITSS',
    time: '18:00'
  },
  {
    id: 2,
    title: 'Lịch làm bài tập UI/UX',
    time: '18:00'
  },
  {
    id: 3,
    title: 'Lịch học tiếng Nhật',
    time: '18:00'
  },
  {
    id: 4,
    title: 'Lịch học tiếng Nhật',
    time: '18:00'
  },
  {
    id: 5,
    title: 'Lịch học tiếng Nhật',
    time: '18:00'
  },
  {
    id: 6,
    title: 'Lịch học tiếng Nhật',
    time: '18:00'
  }
];

const myCustomLocale = {
  // months list by order
  months: [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
  ],

  // week days by order
  weekDays: [    
    {
      name: 'Monday',
      short: 'Mon',
    },
    {
      name: 'Tuesday',
      short: 'Tue',
    },
    {
      name: 'Wednesday',
      short: 'Wed',
    },
    {
      name: 'Thursday',
      short: 'Thu',
    },
    {
      name: 'Friday',
      short: 'Fri',
    },
    {
      name: 'Saturday',
      short: 'Sat',
    },
    {
      name: 'Sunday',
      short: 'Sun', 
    },
  ],

  // just play around with this number between 0 and 6
  weekStartingIndex: 0,

  // return a { year: number, month: number, day: number } object
  getToday(gregorainTodayObject) {
    return gregorainTodayObject;
  },

  // return a native JavaScript date here
  toNativeDate(date) {
    return new Date(date.year, date.month - 1, date.day);
  },

  // return a number for date's month length
  getMonthLength(date) {
    return new Date(date.year, date.month, 0).getDate();
  },

  // return a transformed digit to your locale
  transformDigit(digit) {
    return digit;
  },
}

export default function CalendarMobile () {
  const [selectedDay, setSelectedDay] = useState();

  console.log(selectedDay);

  return (
    <>
      <Sider/>
      <Header title={"Lịch"}/>      
      <div className={s.main}>
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        locale={myCustomLocale}
        calendarClassName={s.responsive_calendar}
      />
      </div>
    </>
  )
}