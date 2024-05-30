import Header from '../Header';
import './style.css';
import { useState, useEffect } from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { vi } from "date-fns/locale";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight, faAngleLeft, faCalendar, faClock} from '@fortawesome/free-solid-svg-icons';

const data = [

  {
    day: 1,
    content: [
      {
        title: "10000 bước chân", 
        time: "23:59", 
        priority: "High",
      },
      {
        title: "UI-UX project", 
        time: "23:59", 
        priority: "High",
      }
    ],
  },
  {
    day: 2,
    content: [
      {
        title: "10000 bước chân", 
        time: "23:59", 
        priority: "High",
      },
      {
        title: "UI-UX project", 
        time: "23:59", 
        priority: "High",
      }
    ],
  },
  {
    day: 31,
    content: [
      {
        title: "10000 bước chân", 
        time: "23:59", 
        priority: "High",
      },
      {
        title: "UI-UX project", 
        time: "23:59", 
        priority: "High",
      }
    ],
  },
]

export default function CalendarMobile () {
  const [selected, setSelected] = useState(new Date());
  const [list, setList] = useState();

  useEffect(() => {
    setList(data.filter(item => item.day === selected.getDate()));
  }, [selected]);

  return (
    <>
      <Header title={"Lịch"}/>      
      <div className="main">
        <DayPicker 
          className='calendar'
          mode="single" 
          selected={selected} 
          onSelect={setSelected} 
          locale={vi}
          showOutsideDays
        />
        <div className='todo-list'>
          {list?.length > 0 ? list[0].content.map((item, index) => (
            <div className={`task-item`} key={index} >
              <div className='task-item-header'>
                <h4 style={{fontSize: "18px"}}>{item.title}</h4>
                <span className={`task-priority ${item.priority.toLowerCase()}`}>{item.priority}</span>
              </div>
              <div className='task-info'>
                <FontAwesomeIcon icon={faClock} className='icon1' />
                <h3>{item.time}</h3>
              </div>                      
            </div>
          )) : (
            <div className={`task-item none`}>
              <div className='task-item-header'>
                <h4 className='item-none'>Không có nhiệm vụ cần hoàn thành</h4>                
              </div>              
            </div>
            )
          }          
        </div>
      </div>
    </>
  )
}