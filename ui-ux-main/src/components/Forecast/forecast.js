import './forecast.css';
import './forecastResponsive.css';
// import { Doughnut} from "react-chartjs-2";
// import {ArcElement} from 'chart.js'
// import PieChart from '../PieChart';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
// Doughnut.register(ArcElement);
export const Forecast = ({ showForecastPopUp, onClose }) => {
  const container1 = {
    height: 5,
    width: "100%",
    backgroundColor: "#95D5B2",
    borderRadius: 50,
    margin: 0
}
 
const bar = {
    height: "100%",
    width: "80%",
    backgroundColor: "#1B4332",
    borderRadius: "inherit",
}
 
const label = {
    padding: "1rem",
    color: "#000000",
}
  return (
    
    <div className='forecast-container'>
      <div className='container-DuBao'>
        <div className='forecast-header'>
        <h2>Dự báo tiến độ</h2>
        {!showForecastPopUp && (
        <div className='forecast-close-button' onClick={onClose}>Đóng</div>
      )}
        
        </div>
        <div className='goal-name'>
          <div className='t1'>Mục tiêu</div> 
          <div className='t3'>:</div>
          <div className='t2'> GPA 4.0</div>   
        </div>

        <div className='goal-name'>
          <div className='t1'>Thời gian thực hiện</div> 
          <div className='t3'>:</div>
          <div className='t2'> 03/03/2023 - 07/07/2024</div>   
        </div>

        <div className='goal-name a'>
          <div className='t1'>Tiến độ KPI</div> 
          <div className='percent-num'> 80%</div> 
        </div>
       
        <div className='goal-name'>
          
              <div style={container1}>
              <div style={bar} role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}>
                {/* <span style={label} >80%</span> */}
                </div>
                </div>
        </div>
        <div className='line'></div>

        <div className="title-1" >Đánh giá hiệu suất làm việc các danh mục</div>
        <div className="goal-name goal-circle-cate">
          
        <div className="goal-name1">
        <Gauge
                  value={30}
                  startAngle={0}
                  endAngle={360}
                  innerRadius="80%"
                  // outerRadius="60%"
                  text="30%"
                  cornerRadius="50%"
                  sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 15,
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                      fill: '#52b202',
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                      fill: theme.palette.text.disabled,
                    },
                  })}
            />
             <div className="goal-name1-text">Lý thuyết</div>
        </div>
        <div className="goal-name1">
            <Gauge
                  value={42.85}
                  startAngle={0}
                  endAngle={360}
                  innerRadius="80%"
                  // outerRadius="60%"
                  text="42.85%"
                  cornerRadius="50%"
                  sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 15,
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                      fill: '#52b202',
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                      fill: theme.palette.text.disabled,
                    },
                  })}
            />
             <div className="goal-name1-text">Bài tập</div>
        </div>
        <div className="goal-name1">
        <Gauge
                  value={130}
                  startAngle={0}
                  endAngle={360}
                  innerRadius="80%"
                  // outerRadius="60%"
                  text="130%"
                  cornerRadius="50%"
                  sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 15,
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                      fill: '#52b202',
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                      fill: theme.palette.text.disabled,
                    },
                  })}
            />
             <div className="goal-name1-text">Lý thuyết</div>
        </div> 

        </div>

        <div className="title-2" >Hiệu suất trung bình</div>
        <div className="goal-name7">
          <Gauge
                value={75}
                startAngle={0}
                endAngle={360}
                innerRadius="90%"
                outerRadius="100%"
                text="75%"
                sx={(theme) => ({
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 30,
                  },
                  [`& .${gaugeClasses.valueArc}`]: {
                    fill: '#52b202',
                  },
                  [`& .${gaugeClasses.referenceArc}`]: {
                    fill: theme.palette.text.disabled,
                  },
                })}
          /> 
          <div className='text-container-forecast'>
            Thật tuyệt vời bạn đang thực hiện mục tiêu với hiễu suất rất tốt hiệu quả lên đến 121,42%. Nhưng hãy cố gắng cải thiện những danh mục chưa có hiệu suất cao như: Lý thuyết nhé. Mong bạn tiếp tục phát huy tinh thần và hoàn thành mục tiêu đề ra!
          </div>
        </div>  
      
      </div>
      </div>
  );
};

export default Forecast;