import React from 'react';
import Header from '../../components/Header';
import './style.css';
import './responsive.css';
import { Bar, Line, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { IconBG2 ,IconBG1, IconBG3}  from '../../assets/index';

const Dashboard = () => {
  return (
    <>      
      
      {<Header title={"Dashboard"}/>}
        <div>
          <div className="container">
            <div className="container-header">
              <div className="inner-list">
                <div className="inner-item1"> 
                 <IconBG1 />
                  <h1>40</h1>
                  <p>KPI</p>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="img-icon">
                    <path d="M0.875 3.04077C0.875 1.84991 1.84039 0.884521 3.03125 0.884521H5.9925C7.18336 0.884521 8.14875 1.84991 8.14875 3.04077V6.00202C8.14875 7.19288 7.18336 8.15827 5.9925 8.15827H3.03125C1.84039 8.15827 0.875 7.19289 0.875 6.00202V3.04077Z" fill="black"/>
                    <path d="M10.8512 3.04077C10.8512 1.84991 11.8166 0.884521 13.0075 0.884521H15.9687C17.1596 0.884521 18.125 1.84991 18.125 3.04077V6.00202C18.125 7.19288 17.1596 8.15827 15.9687 8.15827H13.0075C11.8166 8.15827 10.8512 7.19289 10.8512 6.00202V3.04077Z" fill="black"/>
                    <path d="M0.875 13.0074C0.875 11.8166 1.84039 10.8512 3.03125 10.8512H5.9925C7.18336 10.8512 8.14875 11.8166 8.14875 13.0074V15.9687C8.14875 17.1596 7.18336 18.1249 5.9925 18.1249H3.03125C1.84039 18.1249 0.875 17.1596 0.875 15.9687V13.0074Z" fill="black"/>
                    <path d="M10.8512 13.0074C10.8512 11.8166 11.8166 10.8512 13.0075 10.8512H15.9687C17.1596 10.8512 18.125 11.8166 18.125 13.0074V15.9687C18.125 17.1596 17.1596 18.1249 15.9687 18.1249H13.0075C11.8166 18.1249 10.8512 17.1596 10.8512 15.9687V13.0074Z" fill="black"/>
                  </svg>             
                </div>
          
                <div className="inner-item2">
                  <IconBG2 />
                  <h1>10</h1>
                  <p>Danh mục</p>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="img-icon">
                    <path d="M4.15625 3.5625C3.82833 3.5625 3.5625 3.82833 3.5625 4.15625C3.5625 4.48417 3.82833 4.75 4.15625 4.75H10.0938C10.4217 4.75 10.6875 4.48417 10.6875 4.15625C10.6875 3.82833 10.4217 3.5625 10.0938 3.5625H4.15625Z" fill="black"/>
                    <path d="M4.15625 7.125C3.82833 7.125 3.5625 7.39083 3.5625 7.71875C3.5625 8.04667 3.82833 8.3125 4.15625 8.3125H10.0938C10.4217 8.3125 10.6875 8.04667 10.6875 7.71875C10.6875 7.39083 10.4217 7.125 10.0938 7.125H4.15625Z" fill="black"/>
                    <path d="M3.5625 11.2812C3.5625 10.9533 3.82833 10.6875 4.15625 10.6875H10.0938C10.4217 10.6875 10.6875 10.9533 10.6875 11.2812C10.6875 11.6092 10.4217 11.875 10.0938 11.875H4.15625C3.82833 11.875 3.5625 11.6092 3.5625 11.2812Z" fill="black"/>
                    <path d="M4.15625 14.25C3.82833 14.25 3.5625 14.5158 3.5625 14.8438C3.5625 15.1717 3.82833 15.4375 4.15625 15.4375H10.0938C10.4217 15.4375 10.6875 15.1717 10.6875 14.8438C10.6875 14.5158 10.4217 14.25 10.0938 14.25H4.15625Z" fill="black"/>
                    <path d="M0 2.375C0 1.06332 1.06332 0 2.375 0H16.625C17.9367 0 19 1.06332 19 2.375V16.625C19 17.9367 17.9367 19 16.625 19H2.375C1.06332 19 0 17.9367 0 16.625V2.375ZM14.25 1.1875V17.8125H16.625C17.2808 17.8125 17.8125 17.2808 17.8125 16.625V2.375C17.8125 1.71916 17.2808 1.1875 16.625 1.1875H14.25ZM13.0625 1.1875H2.375C1.71916 1.1875 1.1875 1.71916 1.1875 2.375V16.625C1.1875 17.2808 1.71916 17.8125 2.375 17.8125H13.0625V1.1875Z" fill="black"/>
                  </svg>                     
                </div>
          
                <div className="inner-item3">
                 <IconBG3 />
                  <h1>3</h1>
                  <p>Mục tiêu</p>
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="img-icon">
                    <path d="M15.3596 0.0940178C16.8581 0.000364737 18.3357 0.52066 19.4491 1.54044C20.4689 2.65387 20.9892 4.13151 20.906 5.64036V15.3595C20.9996 16.8683 20.4689 18.346 19.4596 19.4594C18.3461 20.4792 16.8581 20.9995 15.3596 20.9058H5.64041C4.13154 20.9995 2.65389 20.4792 1.54045 19.4594C0.520663 18.346 0.00036407 16.8683 0.0940179 15.3595V5.64036C0.00036407 4.13151 0.520663 2.65387 1.54045 1.54044C2.65389 0.52066 4.13154 0.000364737 5.64041 0.0940178H15.3596ZM15.089 4.84951C14.4439 4.20435 13.4033 4.20435 12.7581 4.84951L12.0609 5.55712C11.9568 5.66117 11.9568 5.83807 12.0609 5.94213C12.0609 5.94213 12.0813 5.96243 12.1177 5.99857L12.3736 6.25313C12.5217 6.40044 12.7065 6.58441 12.8921 6.7694L13.5213 7.39836C13.6526 7.53025 13.7397 7.61864 13.7467 7.62789C13.8611 7.75276 13.934 7.91926 13.934 8.10656C13.934 8.48117 13.6322 8.79335 13.2472 8.79335C13.0703 8.79335 12.9038 8.72051 12.7893 8.60604L11.0515 6.87866C10.9683 6.79542 10.8226 6.79542 10.7393 6.87866L5.77569 11.8423C5.43229 12.1857 5.23457 12.6435 5.22417 13.1326L5.16173 15.5988C5.16173 15.7341 5.20336 15.859 5.29701 15.9526C5.39066 16.0463 5.51554 16.0983 5.65081 16.0983H8.09622C8.59571 16.0983 9.07438 15.9006 9.43859 15.5468L16.4418 8.5228C17.0766 7.87763 17.0766 6.83704 16.4418 6.20228L15.089 4.84951Z" fill="black"/>
                  </svg>    
                </div>
              </div>
            </div>
          
            <div className="container-main">
              <div className="inner-list">
                <div className="inner-row">
                  <div className="inner-item">
                    <div className="inner-title">Biểu đồ so sánh số giờ thực hiện được giữa 2 tuần</div>
                    <button className="btn-ex-1">?</button>
                    <div className="graph">
                      <Line                
                        data={{
                          labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
                          datasets: [{
                            label: 'Tuần trước',
                            data: [10, 70, 50, 80, 10, 30, 10],
                            borderColor: "#045711",
                            fill: false
                          },{
                            label: 'Tuần này',
                            data: [0, 90, 30, 70, 20, 50, 100],
                            borderColor: "#5DD980",
                            fill: false
                          }]
                        }}  
                        options={{                      
                          plugins: {
                            legend: {
                              display: true,
                              position: 'bottom',
                              labels: {
                                boxWidth: 20,
                                padding: 10
                              }
                            }
                          }
                        }}             
                      />
                    </div>                
                    <div className="ex">
                      Biểu đồ thể hiện số giờ thực hiện KPI của 2 tuần liên tiếp.
                      Qua đó cho thấy sự chênh lệnh số giờ giữa 2 tuần. 
                    </div>                        
                  </div>
            
                  <div className="inner-item" >
                    <div className="inner-title">Tương quan giữa số lượng các nhiệm vụ</div>
                    <button>?</button>
                    <div className="pie-chart">
                    <Pie
                      data={{
                        labels: ['Cần hoàn thành', 'Đã hoàn thành', 'Quá hạn'],
                        datasets: [{
                          backgroundColor: [
                            "#1C712F",
                            "#002D19",
                            "#7BE63A",
                          ],
                          data: [20, 70, 10]
                        }]
                      }}  
                      options={{                      
                        plugins: {
                          legend: {
                            display: true,
                            position: 'right',
                            labels: {
                              boxWidth: 30,
                              padding:20
                            }
                          }
                        }
                      }}             
                    />
                    </div>
                    <div className="ex">
                      Biểu đồ thể hiện khái quát số lượng các nhiệm vụ và tỷ lệ của nhiệm vụ này so với nhiệm vụ kia.  
                    </div>
                  </div>
                </div>  

                <div className="inner-row">
                  <div className="inner-item">
                    <div className="inner-title">Thống kê số lượng KPI trong tuần</div>
                    <button>?</button>
                    <table>
                      <thead>
                        <tr>                  
                          <th>Số lượng</th>
                          <th>Trạng thái</th>
                          <th>Xem</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>10</td>
                          <td>Cần hoàn thành</td>
                          <td className="view">Xem chi tiết</td>
                        </tr>
                        <tr>
                          <td>15</td>
                          <td>Đã hoàn thành</td>
                          <td className="view">Xem chi tiết</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Quá hạn</td>
                          <td className="view">Xem chi tiết</td>
                        </tr>
                                  
                      </tbody>
                    </table>
                    <div className="ex">
                      Thống kê số lượng và chi tiết các nhiệm vụ của người dùng.
                    </div>
                  </div>
            
                  <div className="inner-item">
                    <div className="inner-title">Số giờ hoàn thành KPI trong tuần vừa qua</div>
                    <button>?</button>
                    <div className='bar-chart'>
                      <Bar
                        data={{
                          labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
                          datasets: [{
                            backgroundColor: [
                              "#4AB584"
                            ],
                            data: [5, 7.5, 4.2, 2.1, 5.4, 9.6, 4.2, 1.7]
                          }]
                        }}  
                        options={{                      
                          plugins: {
                            legend: {
                              display: false,                              
                            }
                          }
                        }}             
                      />
                    </div>
                    <div className="ex">
                      Biểu đồ thể số giờ thực hiện KPI trong tuần. 
                      Qua đó ta có thể đánh giá hiệu suất của tuần.
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div> 
    </>
  );
}

export default Dashboard;