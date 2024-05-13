import React from 'react';
import Sider from '../Sider';
import Header from '../Header';
import './task.css';

class Task extends React.Component {
    render() {
        return (
            <>
            <Sider/>
            {<Header title={"Nhiệm vụ"}/>}
            <br></br>
            <br></br>
            <br></br>
            <div className='task-container'>
                <div className='task-header'>
                    <div className='task-fill'>
                        <div>Hôm nay</div>
                        <div>Sắp đến hạn</div>
                        <div>Quá hạn</div>
                    </div>
                    <button className="add-task-button">
                        <span>+</span> Thêm mục tiêu
                    </button>
                </div>
                <div className='task-function'></div>
                <div className='task-list'></div>
            </div>
            </>
        )
    }
}
export default Task