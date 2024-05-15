import React from "react";
import Sider from '../Sider';
import Header from '../Header';
import './profile.css';
import avatar from '../../assets/avatar.jpg'
 class Profile extends React.Component {

    render() {
    return(
        <>
        <Sider />
        <Header title={"Cài đặt > Hồ sơ"} />
        <br />
        <br />
        <br />
        <div className="profile-container">
            <img src={avatar} alt="Avatar" className="avatar" />
            <h5>Đỗ Thùy Dương</h5>
            <div className="profile-section">
                <h3>Thông tin cơ bản</h3>
                <div className="profile-infor">
                    <div className="profile-infor-text">Tên người dùng:</div>
                    <input type="text" className="profile-input" placeholder="Tên người dùng"></input>
                </div>
                <div className="profile-infor">
                    <div className="profile-infor-text">Ngày sinh:</div>
                    <input type="text" className="profile-input" placeholder="dd/mm/yyyy"></input>
                </div>
                <div className="profile-infor">
                    <div className="profile-infor-text">Giới tính:</div>
                    <input type="text" className="profile-input" placeholder="Nam, nữ hoặc không"></input>
                </div>
            </div>
            <div className="profile-section">
                <h3>Thông tin liên hệ</h3>
                <div className="profile-infor">
                    <div className="profile-infor-text">Email:</div>
                    <input type="text" className="profile-input" placeholder="abcxyz@gmail.com"></input>
                </div>
                <div className="profile-infor">
                    <div className="profile-infor-text">Số điện thoại:</div>
                    <input type="text" className="profile-input" placeholder="0x-xxx-xxx-xxx"></input>
                </div>
            </div>
            <button className="update">Cập nhật</button>
        </div>
        </>
    )    
    }
 }

 export default Profile