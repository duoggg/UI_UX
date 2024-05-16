import React, { useState, useRef, useEffect } from 'react';import Sider from '../Sider';
import Header from '../Header';
import './setting.css';
import avatar from '../../assets/avatar.jpg'
import { Link } from 'react-router-dom';


class Setting extends React.Component {

    constructor(props) {
    super(props);
    this.dropdownButtonRef = React.createRef();
    this.state = {
      selectedLanguage: 'Tiếng Việt'
    };
  }

  componentDidMount() {
    if (this.dropdownButtonRef.current) {
      const buttonWidth = this.dropdownButtonRef.current.offsetWidth;
      const dropdownMenu = this.dropdownButtonRef.current.nextElementSibling; 
      dropdownMenu.style.width = `${buttonWidth}px`;
    }
  }

  handleLanguageChange = (language) => {
    this.setState({ selectedLanguage: language });
  };

    

    render() {
    return (
        <>
        <Sider />
        <Header title={"Cài đặt"} />
        <br />
        <br />
        <br />
        <div className="setting-container">
  <div className="setting-header">
    <img src={avatar} alt="Avatar" className="avatar" />
    <div className="company-name">DATAP Company</div>
    
    <button className="changeacc-button">Đổi tài khoản</button>
  </div>

  <div className="setting-list">
    <div className="setting-section1">
      <h3>Bảo mật</h3>
      <div className="setting-item">
        {/* Icon */}
        <div className="item-content">
          <h4>Đổi mật khẩu</h4>
          <p>Bạn nên sử dụng mật khẩu mình chưa từng dùng ở đâu bao giờ</p>
        </div>
        <Link to="./pass"><button className="edit-button">Chỉnh sửa</button></Link>
      </div>
      <div className="setting-item">
        {/* Icon */}
        <div className="item-content">
          <h4>Hồ sơ</h4>
          <p>Chúng tôi sẽ yêu cầu mã xác nhận khi tài khoản của bạn được đăng nhập trên thiết bị lạ</p>
        </div>
        <Link to="/profile"><button className="edit-button">Chỉnh sửa</button></Link>
      </div>
      <div className="setting-item">
        {/* Icon */}
        <div className="item-content">
          <h4>Lưu thông tin đăng nhập</h4>
          <p>Lưu thông tin tài khoản của bạn trên thiết bị này</p>
        </div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </div>

    <div className="setting-section2">
      <div className="setting-item">
        {/* Icon */}
        <div className="item-content">
          <h4>Ngôn ngữ</h4>
          <p>Ngôn ngữ hiển thị trên giao diện trang web, ngôn ngữ ưa thích</p>
        </div>
        <div className="dropdown">
         <button className="dropdown-button" ref={this.dropdownButtonRef}>{this.state.selectedLanguage}</button>
         <div className="dropdown-menu">
             <a onClick={() => this.handleLanguageChange('Tiếng Anh')}>Tiếng Anh</a>
             <a onClick={() => this.handleLanguageChange('Tiếng Nhật')}>Tiếng Nhật</a>
             <a onClick={() => this.handleLanguageChange('Tiếng Việt')}>Tiếng Việt</a>
             <a onClick={() => this.handleLanguageChange('Tiếng Lòng Em')}>Tiếng Lòng Em</a>
    </div>
  </div>
      </div>
    </div>
    <div className="setting-section2">
      <div className="setting-item">
        {/* Icon */}
        <div className="item-content">
          <h4>Thông báo</h4>
          <p>Khuyến khích bật để chúng tôi có thể hỗ trợ bạn tốt nhất</p>
        </div>
        <Link to="./noti"><button className="edit-button">Chỉnh sửa</button></Link>
      </div>  
    </div>  
    <div className='setting-section2'>
       <div className="setting-item">
        {/* Icon */}
        <div className="item-content">
          <h4>Chế độ tối</h4>
          <p>Đổi màu nền giao diện</p>
        </div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div> 
    </div>  
      
    
  </div>
</div>
        </>
        )
    }
}
export default Setting