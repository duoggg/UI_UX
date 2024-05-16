import React, { useState, useRef, useEffect } from 'react';import Sider from '../Sider';
import Header from '../Header';
import './notification.css';

class Notification extends React.Component{
    render(){
        return(
            <>
            <div class ="notification-container">
                <div class="notification-section">
                    <div class="time">18:00</div>
                    <div class="content">Bạn có lịch làm bài tập ITSS</div>
                </div>
                <div class="notification-section">
                    <div class="time">14:00</div>
                    <div class="content">Bạn có lịch làm bài tập UI-UX</div>
                </div>
                <div class="notification-section">
                    <div class="time">10:00</div>
                    <div class="content">Bạn có lịch học tiếng Nhật</div>
                </div>
                <div class="notification-section">
                    <div class="time">1 ngày trước</div>
                    <div class="content">Bạn đã hoàn thành toàn bộ công việc hôm nay</div>
                </div>
                <div class="notification-section">
                    <div class="time">1 ngày trước</div>
                    <div class="content">Bạn có lịch học Nhật ngành 2</div>
                </div>
            </div>
            </>
        )
    }
}
export default Notification;