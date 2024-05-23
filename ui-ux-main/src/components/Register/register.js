import React from 'react';
import './register.css';
import './registerResponsive.css';
class Register extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      repassword: '',
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
    console.log(`Username: ${this.state.username}, Password: ${this.state.password}, Repassword: ${this.state.repassword}`);
  };

    render() {
        return (
            <>
            <div className="register">
            <div className="register-container">
                <h2>Đăng Kí</h2>
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
              <input
                type="password"
                id="repassword"
                name="repassword"
                value={this.state.repassword}
                onChange={this.handleChange}
                required
                placeholder="Xác nhận mật khẩu"
              />
            </div>
            <button type="submit">Đăng kí</button>
          </form>
            </div>
            </div>
            </>
        )
    }
}

export default Register;