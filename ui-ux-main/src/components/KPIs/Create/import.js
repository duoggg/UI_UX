import React from 'react';
import './import.css';
import Select from 'react-select';
import KPIs from '../KPIs';
class Import extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onClose();
    }

    render(){
        return(
        <>
        <br></br>
        <br></br>
        <br></br>
        <div class='import-url-container'>
            <form onSubmit={this.handleSubmit} >
                <h3>Nhập KPI</h3>
                <h4>Nhập đường dẫn tới KPI của bạn</h4>
                <input type='text' class='text-url' placeholder="URL"></input>
                <div class='confirm-btn'>
                <button type="button" onClick={this.props.onClose} className='Close kpi-create-button'>Hủy</button>
                <button type="submit" className='Done kpi-create-button'>Nhập</button>
                 {/* <KPIs ref="kpis" /> */}
                 </div>
            </form>
        </div>
        </>
        )
    }
}

export default Import;