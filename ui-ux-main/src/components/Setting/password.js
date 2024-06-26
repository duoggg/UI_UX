import React, { useState, useRef, useEffect } from 'react';import Sider from '../Sider';
import Header from '../Header';
import avatar from '../../assets/avatar.jpg'
import './password.css';

class Password extends React.Component{
    render(){
        return(
            <>
            <Sider />
            <Header title={"Đổi mật khẩu"} />
            <br />
            <br />
            <br />
            <div class="password-container">
                <img src={avatar} alt="Avatar" class="avatar" />
                <h5 class="user-name">Đỗ Thùy Dương</h5>
                <div class="password-section">
                    <h3>Đổi mật khẩu</h3>
                    <div class="change-pass">
                        <div class="password-text">Nhập mật khẩu hiện tại:</div>
                        <input type="password" className="password-input" placeholder="Mật khẩu hiện tại"></input>
                    </div>
                    <div class="change-pass">
                        <div class="password-text">Nhập mật khẩu mới:</div>
                        <input type="password" className="password-input" placeholder="Mật khẩu mới"></input>
                    </div>
                    <div class="change-pass">
                        <div class="password-text">Nhập lại mật khẩu:</div>
                        <input type="password" className="password-input" placeholder="Nhập lại mật khẩu"></input>
                    </div>
                </div>
                <button className="update">Cập nhật</button>
            </div>
            </>
        )
    }
}
export default Password;