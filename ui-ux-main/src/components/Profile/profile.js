import React from "react";
import Sider from '../Sider';
import Header from '../Header';
import './profile.css';
import './profileResppnsive.css'
import avatar from '../../assets/avatar.jpg'
 class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.dropdownButtonRef = React.createRef();
        this.state = {
          selectedGender: 'Nữ'
        };
      }
      componentDidMount() {
        if (this.dropdownButtonRef.current) {
          const buttonWidth = this.dropdownButtonRef.current.offsetWidth;
          const dropdownMenu = this.dropdownButtonRef.current.nextElementSibling; 
          dropdownMenu.style.width = `${buttonWidth}px`;
        }
      }
      handleGenderChange = (gender) => {
        this.setState({ selectedGender: gender });
      };
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
            <h5>Lê Thi Nhung</h5>
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
                    <div className="dropdown">
                            <button className="dropdown-button" ref={this.dropdownButtonRef}>{this.state.selectedGender}</button>
                            <div className="dropdown-menu-1">
                                <a onClick={() => this.handleGenderChange('Nam')}>Nam</a>
                                <a onClick={() => this.handleGenderChange('Nữ')}>Nữ</a>
                                <a onClick={() => this.handleGenderChange('Khác')}>Khác</a>
                            </div>
                    </div>
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