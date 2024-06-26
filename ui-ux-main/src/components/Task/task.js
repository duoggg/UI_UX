import React from 'react';
import Sider from '../Sider';
import Header from '../Header';
import './task.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: {}, 
      itemsPerPage: 3, 
      tasks: [
        {
          category: "Lý thuyết",
          items: [
            { title: "Bài tập UI/UX", date: "01/03/23", time: "16:00", status: "completed", priority: "High", statusText:"Đã hoàn thành"  },
            { title: "Bài tập UI/UX", date: "01/03/23", time: "16:00", status: "overdue", priority: "Medium", statusText:"Quá hạn"},
            { title: "Bài tập UI/UX", date: "01/03/23", time: "16:00", status: "incomplete", priority: "Low", statusText:"Chưa hoàn thành" },
            { title: "Bài tập UI/UX", date: "01/03/23", time: "16:00", status: "incomplete", priority: "Low", statusText:"Chưa hoàn thành" },
            { title: "Bài tập UI/UX", date: "01/03/23", time: "16:00", status: "incomplete", priority: "Low", statusText:"Chưa hoàn thành" },
          ],
        },
        {
          category: "Giảng dạy",
          items: [
            { title: "Bài tập UI/UX", date: "01/03/23", time: "16:00", status: "completed", priority: "High", statusText:"Đã hoàn thành"  },
            { title: "Bài tập UI/UX", date: "01/03/23", time: "16:00", status: "overdue", priority: "Medium", statusText:"Quá hạn"},
            { title: "Bài tập UI/UX", date: "01/03/23", time: "16:00", status: "incomplete", priority: "Low", statusText:"Chưa hoàn thành" },
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


  render() {
    return (
      <>
        <Sider />
        <Header title={"Nhiệm vụ"} />
        <br />
        <br />
        <br />
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
            <h1>Danh sách công việc</h1>
            <button className="add-task-button">
              <span>+</span> Thêm công việc
            </button>
          </div>
          
          <div className='task-list'>
            {this.state.tasks.map((category, index) => (
              <div className='task-category' key={index}>
                <div className='category-header'>
                  <button className='category-title'>{category.category} ({category.items.length})</button>
                  <div className='category-controls'>
                  </div>
                </div>
                <div className='task-items'>
                    <button 
                    onClick={() => this.handleChangeSlide(index, this.state.currentSlide[index] - 1)}
                    disabled={this.state.currentSlide[index] === 0} ></button>
                    <div className='task-child'>
                      {category.items.slice(this.state.currentSlide[index] * this.state.itemsPerPage, (this.state.currentSlide[index] + 1) * this.state.itemsPerPage).map((item, itemIndex) => (
                    <div className={`task-item ${item.status}`} key={itemIndex}>
                      <div className='task-item-header'>
                        <h3>{item.title}</h3>
                        <span className={`task-priority ${item.priority.toLowerCase()}`}>{item.priority}</span>
                        </div>
                      <div className='task-info'>
                        <div>{item.date}</div> 
                        <div>{item.time}</div>
                        <div className={`task-info-status ${item.status.toLowerCase()}`}>{item.statusText}</div>
                      </div>
                      
                    </div>
                  ))}
                    </div>
                  
                    <button 
                    onClick={() => this.handleChangeSlide(index, this.state.currentSlide[index] + 1)}
                    disabled={this.state.currentSlide[index] === Math.ceil(category.items.length / this.state.itemsPerPage) - 1}></button>
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