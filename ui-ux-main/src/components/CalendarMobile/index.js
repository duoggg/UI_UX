import Header from '../Header';
import './style.css';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarMobile () {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Header title={"Lịch"}/>      
      <div className="main">
        <Calendar 
          onChange={onChange}
          value={value} 
          className="calendar"
          
        />
      </div>
    </>
  )
}