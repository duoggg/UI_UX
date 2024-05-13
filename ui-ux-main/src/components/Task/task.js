import React from 'react';
import Sider from '../Sider';
import Header from '../Header';
import './task.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          category: "Lý thuyết",
          items: [
            { title: "Bài tập UI/UX", date: "01/03/23", time: "16:00", status: "completed", priority: "High",  },
            { title: "Bài tập UI/UX", date: "01/03/23", time: "16:00", status: "overdue", priority: "Medium" },
            { title: "Bài tập UI/UX", date: "01/03/23", time: "16:00", status: "incomplete", priority: "High" },
          ],
        },
        {
          category: "Giảng dạy",
          items: [
            { title: "Bài tập UI/UX", date: "01/03/23", time: "16:00", status: "completed", priority: "High" },
            { title: "Bài tập UI/UX", date: "01/03/23", time: "16:00", status: "overdue", priority: "Medium" },
            { title: "Bài tập UI/UX", date: "01/03/23", time: "16:00", status: "incomplete", priority: "High" },
          ],
        },
        // Thêm danh mục nhiệm vụ khác tại đây
      ]
    };
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
            <div className='filter'>
              <span>☓</span> 
              <input type="text" placeholder="Tìm kiếm theo danh mục" />
            </div>
            <div className='task-fill'>
              <button className="active">Hôm nay</button>
              <button className='active' >Sắp đến hạn</button>
              <button className='active'>Quá hạn</button>
            </div>
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
                    <button></button>
                  {category.items.slice(0, 3).map((item, itemIndex) => (
                    <div className={`task-item ${item.status}`} key={itemIndex}>
                      <h3>{item.title}</h3>
                      <div className='task-info'>
                        <p>{item.date}</p> 
                        <p>{item.time}</p>
                        <p>{item.status}</p>
                      </div>
                      <span className={`task-priority ${item.priority.toLowerCase()}`}>{item.priority}</span>
                    </div>
                  ))}
                    <button></button>
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