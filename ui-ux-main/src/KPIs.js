import Header from './components/Header';
import Sider from './components/Sider';
import './KPIs.css';
import { 

  IconCalender,

} from './assets/index';
import React, { reactUseState, useState } from 'react';

function KPIs() {
  const kpis = [
    {
      title: 'GPA 4.0',
      startDate: '03/03/23',
      endDate: '07/07/24',
      progress: 80,
      tags: ['Lý thuyết', 'Thực hành', 'Bài tập'],
      details:[
        {
          name: 'Lý thuyết',
          targetHours: 100,
          completedHours: 70,
          Task: '30/100',
        },
        {
          name: 'Thực hành',
          targetHours: 200,
          completedHours: 100,
          Task: '130/200',
        },
        {
          name: 'Bài tập',
          targetHours: 200,
          completedHours: 150,
          Task: '180/200',
        },
        {
          name: 'Gì gì đó',
          targetHours: 200,
          completedHours: 150,
          Task: '180/200',
        }
      ]
    },
    {
      title: 'IT Nihon',
      startDate: '01/01/23',
      endDate: '04/04/24',
      progress: 60,
      tags: ['HTML', 'CSS', 'JS'],
      details:[
        {
          name: 'Lý thuyết',
          targetHours: 100,
          completedHours: 70,
          Task: '30/100',
        },
        {
          name: 'Thực hành',
          targetHours: 200,
          completedHours: 100,
          Task: '130/200',
        },
        // {
        //   name: 'Bài tập',
        //   targetHours: 200,
        //   completedHours: 150,
        //   Task: '180/200',
        // },
        // {
        //   name: 'Gì gì đó',
        //   targetHours: 200,
        //   completedHours: 150,
        //   Task: '180/200',
        // }
      ]

    },
    {
      title: 'Tiếng Nhật',
      startDate: '01/01/23',
      endDate: '04/04/24',
      progress: 40,
      tags: ['Kanji', 'Kaiwa', 'Choukai'],
      details:[
        {
          name: 'Lý thuyết',
          targetHours: 100,
          completedHours: 70,
          Task: '30/100',
        },
        // {
        //   name: 'Thực hành',
        //   targetHours: 200,
        //   completedHours: 100,
        //   Task: '130/200',
        // },
        // {
        //   name: 'Bài tập',
        //   targetHours: 200,
        //   completedHours: 150,
        //   Task: '180/200',
        // },
        // {
        //   name: 'Gì gì đó',
        //   targetHours: 200,
        //   completedHours: 150,
        //   Task: '180/200',
        // }
      ]
    },];
  const [showDetails, setShowDetails] = useState({}); // Lưu trữ trạng thái hiển thị chi tiết cho mỗi mục tiêu

  // Hàm xử lý click vào mũi tên
  const toggleDetails = (kpiIndex) => {
    setShowDetails((prevState) => ({ ...prevState, [kpiIndex]: !prevState[kpiIndex] }));}
  const [currentSlide, setCurrentSlide] = useState(0);

    return (
    <>
      <Sider />
      {<Header title={"KPIs"}/>}
      <br></br>
      <br></br>
      <br></br>

       <div className="kpis-list">
        <div className='list-header'>
          <h1>Danh sách KPIs</h1>
          <button className="add-kpi-button">
            <span>+</span> Thêm mục tiêu
          </button>
        </div>  
          {kpis.map((kpi, index) => (
            <div key={index} className="kpi-item">
              <div className="kpi-header">
                <div>
                {kpi.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="kpi-tag">{tag}</span>
                ))}</div><div className="arrow" onClick={() => toggleDetails(index)}></div>
              </div>
              <div className="kpi-content">
              <h3>{kpi.title}</h3>
                <span className="kpi-date">
                  <div className='Calender'><IconCalender /> </div>{kpi.startDate} - {kpi.endDate}
                </span>
                <div className="progress-bar">
                  <div className="progress-bar-background">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${kpi.progress}%` }}
                  ></div>
                  </div>
                <span className="kpi-completion">Đã hoàn thành: {kpi.progress}%</span>
              </div>

              </div>
              {showDetails[index] && (
              <div className="kpi-details">
                {kpi.details.slice(currentSlide * 3, (currentSlide + 1) * 3).map((detail) => (
                  <div className="detail-item" key={detail.name}>
                    <h4>{detail.name}</h4>
                    <p>Mục tiêu: {detail.targetHours} giờ</p>
                    <p>Đã làm: {detail.completedHours} giờ</p>
                    <p>Nhiệm vụ: {detail.Task}</p>
                  </div>     
                ))}
              </div>
              )}
            </div>
          ))}
        </div>
    </>
    
  );
}

export default KPIs;
