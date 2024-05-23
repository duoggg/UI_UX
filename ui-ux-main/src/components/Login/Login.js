import React from "react";
import './Login.css';
import "./loginResponsive.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

class Login extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rememberMe: false,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Thực hiện xử lý đăng nhập ở đây
    console.log(`Username: ${this.state.username}, Password: ${this.state.password}`);
  };
    render() {
        return(
            <>
            <div className="login">
            <div className="login-container">
                <h2>Đăng Nhập</h2>
                <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                required
                placeholder="Tên đăng nhập hoặc email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
                placeholder="Mật khẩu"
              />
            </div>
            <div className="form-group">
            <div className="group-forget">
               <input
                type="checkbox"
                id="remember-me"
                name="rememberMe"
                checked={this.state.rememberMe}
                onChange={this.handleChange}
              />
              <label htmlFor="remember-me">Luôn đăng nhập</label> 
            </div>
              <a href="#">Quên mật khẩu</a>
            </div>
            <button type="submit">Đăng nhập</button>
          </form>
          <div className="or">Hoặc</div>
          <div className="social-login">
            <button className="social-button facebook">
              <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            </button>
            <button className="social-button google">
              <FontAwesomeIcon icon={faGoogle} className="social-icon"/>
            </button>
            <button className="social-button microsoft">
              <FontAwesomeIcon icon={faMicrosoft} className="social-icon"/>
            </button>
          </div>
          <div className="create-account">
            Bạn không có tài khoản? <a href="#">Tạo tài khoản</a>
          </div>
            </div>
            </div>
            </>
        )
    }
}
export default Login;