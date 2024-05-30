import React, { useState } from "react";
import "./calendar.css";
import './calendarResponsive.css';
import Sider from '../Sider';
import Header from '../Header';
import { Badge, Calendar, Modal } from 'antd';

const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.',
        },
        {
          type: 'success',
          content: 'This is usual event.',
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.',
        },
        {
          type: 'success',
          content: 'This is usual event.',
        },
        {
          type: 'error',
          content: 'This is error event.',
        },
      ];
      break;
    case 30:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event',
        },
        {
          type: 'success',
          content: 'This is very long usual event......',
        },
        {
          type: 'error',
          content: 'This is error event 1.',
        },
        {
          type: 'error',
          content: 'This is error event 2.',
        },
        {
          type: 'error',
          content: 'This is error event 3.',
        },
        {
          type: 'error',
          content: 'This is error event 4.',
        },
      ];
      break;
    default:
  }
  return listData || [];
};

const Lich = () => {
  const handleChange = (event) => {
    const listData = getListData(event);
    Modal.info({
      title: `Nhiệm vụ cần hoàn thành ngày ${event.date()} - ${event.month()} - ${event.year()}`,
      content: (
        <div>
          {listData.length > 0 ? (<ul className="events" >
            {listData.map((item) => (
              <li key={item.content}>
                <Badge status={item.type} text={item.content} />
              </li>
            ))}
          </ul>) : (
            <>
            <p>Không có nhiệm vụ</p>
            </>
          )}
        </div>
      ),
      onOk() {},
    });
  }

  const dateCellRender = (value) => {
    const listData = getListData(value);
    let countWarning = listData.reduce((n, x) => n + (x.type === 'warning'), 0);
    let countError = listData.reduce((n, x) => n + (x.type === 'error'), 0);
    let countSuccess = listData.reduce((n, x) => n + (x.type ==='success'), 0);

    return (
      <ul className="events" >
        {listData.splice(0, 1).map((item) => (
          <li key={item.content}>
            <Badge count={countWarning} showZero color="green" style={{width: "10.48vw"}} />
            <Badge count={countWarning} showZero color="#faad14" style={{width: "10.48vw"}} />
            <Badge count={countError} style={{width: "10.48vw"}} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    return info.originNode;
  };

  return (
    <>
      <Sider/>
      <Header title={"Lịch"}/>      
      <div className="calendar-main">
        <Calendar 
          cellRender={cellRender}
          className="calendar-content"
          onSelect={handleChange}
        />        
      </div>        
    </>
  );
};

export default Lich;