import React, { useState, useRef, useEffect } from 'react';import Sider from '../Sider';
import Header from '../Header';
import avatar from '../../assets/avatar.jpg'
import './notifi.css';
import './notifyResponsive.css';

class SettingNotifi extends React.Component{
    constructor(props) {
        super(props);
        this.dropdownButtonRef = React.createRef();
        this.state = {
          selectedTime: 'Trước 3 ngày'
        };
      }
      componentDidMount() {
        if (this.dropdownButtonRef.current) {
          const buttonWidth = this.dropdownButtonRef.current.offsetWidth;
          const dropdownMenu = this.dropdownButtonRef.current.nextElementSibling; 
          dropdownMenu.style.width = `${buttonWidth}px`;
        }
      }
      handleTimeChange = (time) => {
        this.setState({ selectedTime: time });
      };

    render(){
        return(
            <>
            <Header title={"Thông báo"} />
            <div class ="notifi-container">
                <h2>CÀI ĐẶT THÔNG BÁO</h2>
                <div class="notifi-section">
                    <div class="notifi-content">
                        <h4>Thông báo khi chậm tiến độ</h4>
                        </div>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="notifi-section">
                    <div class="notifi-content">
                        <h4>Thông báo khi KPI giảm tiến độ</h4>
                        </div>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="notifi-section">
                    <div class="notifi-content">
                        <h4>Thông báo khi KPI có thể không hoàn thành</h4>
                        </div>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="notifi-section">
                    <div class="notifi-content">
                        <h4>Thông báo khi công việc cần hoàn thành</h4>
                        </div>
                        <div className="dropdown">
                            <button className="dropdown-button" ref={this.dropdownButtonRef}>{this.state.selectedTime}</button>
                            <div className="dropdown-menu">
                                <a onClick={() => this.handleTimeChange('Trước 3 ngày')}>Trước 3 ngày</a>
                                <a onClick={() => this.handleTimeChange('Trước 5 ngày')}>Trước 5 ngày</a>
                                <a onClick={() => this.handleTimeChange('Trước 1 tuần')}>Trước 1 tuần</a>
                            </div>
                        </div>
                </div>
            </div>
            </>
        )
    }
}

export default SettingNotifi;