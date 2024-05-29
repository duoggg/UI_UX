import React from 'react';
import './home.css';
import Header from '../Header'

function Home() {
  render() { 
    return (
    <>
    <Header title={Trang chủ} />
    <div className="container">
        <div className="calendar-section">
          <div className="calendar-header">
            <div className="calendar-day">Mo</div>
            <div className="calendar-day">Tu</div>
            <div className="calendar-day">Wed</div>
            <div className="calendar-day">Th</div>
            <div className="calendar-day">Fr</div>
            <div className="calendar-day">Sa</div>
            <div className="calendar-day">Su</div>
          </div>
          <div className="calendar-body">
            <div className="calendar-date">22</div>
            <div className="calendar-date">23</div>
            <div className="calendar-date">24</div>
            <div className="calendar-date">25</div>
            <div className="calendar-date">26</div>
            <div className="calendar-date">27</div>
            <div className="calendar-date">28</div>
          </div>
          <div className="calendar-footer">
            <p>Hôm nay có 4 công việc đến hạn</p>
            <button className="action-button">Làm ngay</button>
          </div>
        </div>
        <div className="features-section">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-chart-pie"></i>
            </div>
            <p>Dashboard</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <p>KPIs</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-edit"></i>
            </div>
            <p>Mục tiêu</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <p>Trợ giúp</p>
          </div>
        </div>
    </div>
    </>
  );
}
}

export default Home;