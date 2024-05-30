import React from 'react';
import Sider from '../Sider';
import Header from '../Header';
import './task.css';
import './taskResponsive.css';
import CreateGoal from './Create/create';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight, faAngleLeft, faCalendar, faClock} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: {}, 
      itemsPerPage: 3, 
      showPopup: false,
      tasks: [
        {
          category: "Lý thuyết",
          items: [
            { title: "Bài tập UI/UX", date: "01/03/23", time: "16:00", status: "completed", priority: "High", statusText:"Đã hoàn thành"  },
            { title: "Bài tập ITSS", date: "02/03/23", time: "17:00", status: "completed", priority: "Medium", statusText:"Đã hoàn thành" },
            { title: "Bài tập Web", date: "08/03/23", time: "20:00", status: "overdue", priority: "Low", statusText:"Quá hạn" },
            { title: "Bài tập AI", date: "10/03/23", time: "22:00", status: "incomplete", priority: "Medium", statusText:"Chưa hoàn thành" },
            { title: "Bài tập QTPM", date: "05/03/23", time: "15:00", status: "incomplete", priority: "Low", statusText:"Chưa hoàn thành" },
          ],
        },
        {
          category: "Hoạt động",
          items: [
            { title: "10000 bước chân", date: "08/03/23", time: "23:59", status: "completed", priority: "High", statusText:"Đã hoàn thành"  },
            { title: "Họp lớp", date: "01/03/23", time: "16:00", status: "overdue", priority: "Medium", statusText:"Quá hạn"},
            { title: "CLB", date: "01/04/23", time: "18:00", status: "incomplete", priority: "Low", statusText:"Chưa hoàn thành" },
            { title: "Đọc sách", date: "02/04/23", time: "20:00", status: "incomplete", priority: "Low", statusText:"Chưa hoàn thành" },
          ],
        },
        {
          category: "Thực hành",
          items: [
            { title: "Thực hành KTMT", date: "08/03/23", time: "23:59", status: "completed", priority: "High", statusText:"Đã hoàn thành"  },
            { title: "Thực hành OOP", date: "01/03/23", time: "16:00", status: "overdue", priority: "Medium", statusText:"Quá hạn"},
           
          ],
        },
        // Thêm danh mục nhiệm vụ khác tại đây
      ],
      
    };
    this.state.tasks.forEach((_, index) => {
    this.state.currentSlide[index] = 0;
  });
  
  }
  
  handleChangeSlide = (categoryIndex, newSlide) => {
  this.setState((prevState) => ({
    ...prevState,
    currentSlide: {
      ...prevState.currentSlide,
      [categoryIndex]: newSlide,
    },
  }));
}

  handleAddGoal = () => {
    this.setState({ showPopup: true });
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  render() {
    return (
      <>
        <Header title={"Công việc"} />
        <div className='task-container'>
          <div className='task-header'>
            {/* <div className='filter'>
              <span>☓</span> 
              <input type="text" placeholder="Tìm kiếm theo danh mục" />
            </div>
            <div className='task-fill'>
              <button className="active">Hôm nay</button>
              <button className='active' >Sắp đến hạn</button>
              <button className='active'>Quá hạn</button>
            </div> */}
            <div className='CV-title'><h1>Danh sách công việc</h1></div>
            <button className="add-task-button" onClick={this.handleAddGoal}>
              + Thêm công việc
            </button>
          </div>
          {this.state.showPopup && (
            <CreateGoal onClose={this.closePopup} />
          )}
          <div className='task-list'>
            {this.state.tasks.map((category, index) => (
              <div className='task-category' key={index}>
                <div className='category-header'>
                  <button className='category-title'>{category.category} ({category.items.length})
                  </button>
                  <div className='category-controls'>
                  </div>
                </div>
                <div className='task-items'>
                    <button
                    onClick={() => this.handleChangeSlide(index, this.state.currentSlide[index] - 1)}
                    disabled={this.state.currentSlide[index] === 0} >
                        <FontAwesomeIcon icon={faAngleLeft} className='icon' />
                    </button>
                    <div className='task-child'>
                      {category.items.slice(this.state.currentSlide[index] * this.state.itemsPerPage, (this.state.currentSlide[index] + 1) * this.state.itemsPerPage).map((item, itemIndex) => (
                    <div className={`task-item ${item.status}`} key={itemIndex}>
                      <div className='task-item-header'>
                        <h3>{item.title}</h3>
                        <span className={`task-priority ${item.priority.toLowerCase()}`}>{item.priority}</span>
                        </div>
                      <div className='task-info'>
                        <div><FontAwesomeIcon icon={faCalendar} className='icon1' />{item.date}</div> 
                        <div><FontAwesomeIcon icon={faClock} className='icon1' />{item.time}</div>
                        <div className={`task-info-status ${item.status.toLowerCase()}`}>{item.statusText}</div>
                      </div>
                      
                    </div>
                  ))}
                    </div>
                  
                    <button 
                    onClick={() => this.handleChangeSlide(index, this.state.currentSlide[index] + 1)}
                    disabled={this.state.currentSlide[index] === Math.ceil(category.items.length / this.state.itemsPerPage) - 1}>
                      <FontAwesomeIcon icon={faAngleRight} className='icon' />
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default Task;