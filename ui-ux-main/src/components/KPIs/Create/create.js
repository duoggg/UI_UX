import React from 'react';
import './create.css';
import Select from 'react-select';

class Create extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      kpiTitle: '',
      startDate: '',
      endDate: '',
      category: '',
      showCategoryDetails: false, // Điều khiển hiển thị/ẩn danh mục chi tiết
      newCategory: '', // Lưu danh mục mới được nhập
      categoryTime: '', // Lưu thời gian cho danh mục
      categories: [
        { name: 'Thực hành', time: '' },
        { name: 'Lý thuyết', time: '' },
        { name: 'HTML', time: '' },
        { name: 'CSS', time: '' },
        // Thêm các danh mục khác
      ],
    };
  }

  toggleCategoryDetails = () => {
    this.setState({ showCategoryDetails: !this.state.showCategoryDetails });
  };

  handleCategoryChange = (event) => {
    this.setState({ category: event.target.value });
  };

  handleNewCategoryChange = (event) => {
    this.setState({ newCategory: event.target.value });
  };

  handleCategoryTimeChange = (event) => {
    this.setState({ categoryTime: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { kpiTitle, startDate, endDate, category } = this.state;

    this.props.onClose();

  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


    render(){

        const { showCategoryDetails, categoryTime, categories } = this.state;

        const options = categories.map((item, index) => ({
         value: item.name,
         label: item.name,
        }));

        

        return (
            <>
            <br></br>
            <br></br>
            <br></br>
            <div className="create-kpi-container">
        <form onSubmit={this.handleSubmit}>
          <div className='name-create-kpi'>
            <label htmlFor="kpiTitle">Tên mục tiêu:</label>
            <input
              type="text"
              id="kpiTitle"
              name="kpiTitle"
              value={this.state.kpiTitle}
              onChange={this.handleChange}
            />
          </div>
          <div className='date-create-kpi'>
            <label htmlFor="startDate">Ngày bắt đầu:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={this.state.startDate}
              onChange={this.handleChange}
            />
            <label htmlFor="endDate">Ngày kết thúc:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={this.state.endDate}
              onChange={this.handleChange}
            />
          </div>
          <div>
            
          </div>
          <div>
        <label htmlFor="category">Danh mục:</label>
        <span className="category-icon" onClick={this.toggleCategoryDetails}>+</span>

        {/* Sử dụng react-select */}
        {showCategoryDetails && (
          <div className="category-details">
          <Select
            isMulti={false} // Cho phép chọn 1 danh mục
            options={options}
            value={options.find((option) => option.value === this.state.category)} // Lấy giá trị được chọn hiện tại
            onChange={(selectedOption) => this.setState({ category: selectedOption.value })} // Cập nhật state khi chọn
            placeholder="Chọn hoặc nhập danh mục"
            isSearchable // Cho phép tìm kiếm
            isClearable // Cho phép xóa lựa chọn
            className='select'
            
          />

          <input
            type="number"
            placeholder="Nhập thời gian (giờ)"
            value={categoryTime}
            onChange={this.handleCategoryTimeChange}
          />
          </div>
        )}
      </div>
          <button type="submit" className='Done kpi-create-button'>Tạo</button>
          <button type="button" onClick={this.props.onClose} className='Close kpi-create-button'>Hủy</button>
        </form>
      </div>

            </>
        )
    }
}
export default Create