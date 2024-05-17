import React from 'react';
import Sider from '../Sider';
import Header from '../Header';
import { useState } from 'react';
import './KPIs.css';
import { 
  IconCalender,
} from '../../assets/index';
import CreateGoal from './Create/create';
import Forecast from '../Forecast/forecast';

class KPIs extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      showDetails: {},
      currentSlide: 0,
      itemsPerPage:3,
      showPopup: false,
      showForecastPopUp : false,
      dataList:  [
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
        },]
    };
  }

  addToList = (data) => {
    this.setState(prevState => ({
      dataList: [...prevState.dataList, data]
    }));
  }

  toggleDetails = (kpiIndex) => {
    this.setState((prevState) => ({
      ...prevState,
      showDetails: {
        ...prevState.showDetails,
        [kpiIndex]: !prevState.showDetails[kpiIndex],
      },
      currentSlide: {
        ...prevState.currentSlide,
        [kpiIndex]: 0,
      }
    }));
  };
  handleChangeSlide = (kpiIndex, newSlide) =>{
    this.setState((prevState) => ({
      ...prevState,
      currentSlide: {
        ...prevState.currentSlide,
        [kpiIndex]: newSlide,
      },
    }));
  }

  handleAddGoal = () => {
    this.setState({ showPopup: true });
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  handleForecast = () => {
    this.setState({ showForecastPopUp: true });
  };

  closeForecastPopup = () => {
    this.setState({ showForecastPopUp: false });
  };


  


    render() {
        // const kpis = [
        //   {
        //     title: 'GPA 4.0',
        //     startDate: '03/03/23',
        //     endDate: '07/07/24',
        //     progress: 80,
        //     tags: ['Lý thuyết', 'Thực hành', 'Bài tập'],
        //     details:[
        //       {
        //         name: 'Lý thuyết',
        //         targetHours: 100,
        //         completedHours: 70,
        //         Task: '30/100',
        //       },
        //       {
        //         name: 'Thực hành',
        //         targetHours: 200,
        //         completedHours: 100,
        //         Task: '130/200',
        //       },
        //       {
        //         name: 'Bài tập',
        //         targetHours: 200,
        //         completedHours: 150,
        //         Task: '180/200',
        //       },
        //       {
        //         name: 'Gì gì đó',
        //         targetHours: 200,
        //         completedHours: 150,
        //         Task: '180/200',
        //       }
        //     ]
        //   },
        //   {
        //     title: 'IT Nihon',
        //     startDate: '01/01/23',
        //     endDate: '04/04/24',
        //     progress: 60,
        //     tags: ['HTML', 'CSS', 'JS'],
        //     details:[
        //       {
        //         name: 'Lý thuyết',
        //         targetHours: 100,
        //         completedHours: 70,
        //         Task: '30/100',
        //       },
        //       {
        //         name: 'Thực hành',
        //         targetHours: 200,
        //         completedHours: 100,
        //         Task: '130/200',
        //       },
        //       {
        //         name: 'Bài tập',
        //         targetHours: 200,
        //         completedHours: 150,
        //         Task: '180/200',
        //       },
        //       {
        //         name: 'Gì gì đó',
        //         targetHours: 200,
        //         completedHours: 150,
        //         Task: '180/200',
        //       }
        //     ]
      
        //   },
        //   {
        //     title: 'Tiếng Nhật',
        //     startDate: '01/01/23',
        //     endDate: '04/04/24',
        //     progress: 40,
        //     tags: ['Kanji', 'Kaiwa', 'Choukai'],
        //     details:[
        //       {
        //         name: 'Lý thuyết',
        //         targetHours: 100,
        //         completedHours: 70,
        //         Task: '30/100',
        //       },
        //       {
        //         name: 'Thực hành',
        //         targetHours: 200,
        //         completedHours: 100,
        //         Task: '130/200',
        //       },
        //       {
        //         name: 'Bài tập',
        //         targetHours: 200,
        //         completedHours: 150,
        //         Task: '180/200',
        //       },
        //       {
        //         name: 'Gì gì đó',
        //         targetHours: 200,
        //         completedHours: 150,
        //         Task: '180/200',
        //       }
        //     ]
        //   },];
        return(
            <>
            <Sider/>
            {<Header title={"KPIs"}/>}
            <br></br>
            <br></br>
            <br></br>

       <div className="kpis-list">
        <div className='list-header'>
          <div className='KPI-title'><h1>Danh sách KPIs</h1></div>
          <button className="add-kpi-button" onClick={this.handleAddGoal}>
            <span>+</span> Thêm KPI
          </button>
        </div>  
          {this.state.showPopup && (
            <CreateGoal onClose={this.closePopup} addToList={this.addToList} />
          )}
          {this.state.dataList.map((kpi, index) => (
            <div key={index} className="kpi-item">
              <div className="kpi-header">
                <div>
                {kpi.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="kpi-tag">{tag}</span>
                ))}</div>
               
                <div className="arrow" onClick={() => this.toggleDetails(index)}></div>
                
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
              {this.state.showDetails[index] && (
                <>
              <div className="kpi-details">
                <button  onClick={() => this.handleChangeSlide(index, this.state.currentSlide[index] - 1)} disabled={this.state.currentSlide[index] === 0} ></button>
                {kpi.details.slice(this.state.currentSlide[index] * this.state.itemsPerPage, (this.state.currentSlide[index] + 1) * this.state.itemsPerPage).map((detail) => (
                  <div className="detail-item" key={detail.name}>
                    <h4>{detail.name}</h4>
                    <div className='goal-time-container'>
                    <div className='goal-time-0' > 
                    <div className='goal-time-1'> Mục tiêu </div>
                    <div className='goal-time-2'> : </div>
                    <div className='goal-time-3'> {detail.targetHours} giờ </div>
                    </div>

                    <div className='goal-time-0' > 
                    <div className='goal-time-1'> Đã làm </div>
                    <div className='goal-time-2'> : </div>
                    <div className='goal-time-3'> {detail.completedHours} giờ </div>
                    </div>
        
                    <div className='goal-time-0' > 
                    <div className='goal-time-1'>Nhiệm vụ </div>
                    <div className='goal-time-2'> : </div>
                    <div className='goal-time-3'> {detail.Task} giờ </div>
                    </div>

                    </div>
                     
                  </div>     
                ))}
              
                <button onClick={() => this.handleChangeSlide(index, this.state.currentSlide[index] + 1)}  disabled={this.state.currentSlide[index] === Math.ceil(kpi.details.length / this.state.itemsPerPage) - 1} ></button>
                
              </div>
                <div className='forecast-button-1' onClick={this.handleForecast}><p> Dự báo</p></div>
                 {this.state.showForecastPopUp && (
            <Forecast showForecastPopUp={this.showForecastPopUp} onClose={this.closeForecastPopup} />
          )}
                </>
              )}
              
             
            </div>
          ))}
          {/* <button className="kpis-forcecast"> Dự báo  </button> */}
        </div>

       
            </>

        )
        
    }
}

export default KPIs;