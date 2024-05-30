import React from 'react';
import './create.css';
import './createResponsive.css'
import Select from 'react-select';

class Create extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      kpiTitle: '',
      deadline: new Date(), // State cho hạn chót
      category: '',
      showCategoryDetails: false,
      newCategory: '',
      categoryTime: '',
      reminderDays: null, // State cho số ngày nhắc nhở
      priority: null, // State cho độ ưu tiên
      categories: [
        { name: 'Thực hành', time: '' },
        { name: 'Lý thuyết', time: '' },
        { name: 'HTML', time: '' },
        { name: 'CSS', time: '' },
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

  handleDeadlineChange = (newDate) => {
    this.setState({ deadline: newDate });
  };

  handleReminderDaysChange = (selectedOption) => {
    this.setState({ reminderDays: selectedOption.value });
  };

  handlePriorityChange = (selectedOption) => {
    this.setState({ priority: selectedOption.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { kpiTitle, deadline, category, reminderDays, priority } = this.state;

    const newKpi = {
      kpiTitle,
      deadline, // Lưu hạn chót
      category,
      reminderDays, // Lưu số ngày nhắc nhở
      priority, // Lưu độ ưu tiên
    };

    this.props.onClose();
    // this.props.onCreate(newKpi); // Truyền dữ liệu KPI mới lên component cha
  };

    render(){

        const { showCategoryDetails, categories } = this.state;

    const options = categories.map((item, index) => ({
      value: item.name,
      label: item.name,
    }));

    const reminderOptions = [
      { value: 1, label: '1 ngày' },
      { value: 2, label: '2 ngày' },
      { value: 3, label: '3 ngày' },
    ];

    const priorityOptions = [
      { value: 'Cao', label: 'Cao' },
      { value: 'Trung bình', label: 'Trung bình' },
      { value: 'Thấp', label: 'Thấp' },
    ];

        

        return (
            <>
            <br></br>
            <br></br>
            <br></br>
            <div className="create-kpi-container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="kpiTitle">Tên mục tiêu:</label>
            <input
              type="text"
              id="kpiTitle"
              name="kpiTitle"
              value={this.state.kpiTitle}
              onChange={this.handleChange}
            />
          </div>
          <div className='date'>
            <label htmlFor="startDate">Thời hạn:</label>
            <input
                type="datetime-local"
                id="deadline"
                name="deadline"
                value={this.state.deadline.toISOString().slice(0, 16)}
                onChange={(event) =>
                  this.handleDeadlineChange(new Date(event.target.value))
                }
                class='deadline'
              />
          </div>
          <div className='date'>
              <label htmlFor="reminderDays">Nhắc nhở tôi trước:</label>
              <Select
                isMulti={false}
                options={reminderOptions}
                value={this.state.reminderDays ? { value: this.state.reminderDays, label: `${this.state.reminderDays} ngày` } : null}
                onChange={this.handleReminderDaysChange}
                placeholder="Chọn số ngày"
                isSearchable
                isClearable
                className="select"
              />
            </div>
            <div className='date'>
              <label htmlFor="priority">Độ ưu tiên:</label>
              <Select
                isMulti={false}
                options={priorityOptions}
                value={this.state.priority ? { value: this.state.priority, label: this.state.priority } : null}
                onChange={this.handlePriorityChange}
                placeholder="Chọn độ ưu tiên"
                isSearchable
                isClearable
                className="select"
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

          </div>
        )}
      </div>
          <button type="submit" className='Done task-create-button'>Tạo</button>
          <button type="button" onClick={this.props.onClose} className='Close task-create-button'>Hủy</button>
        </form>
      </div>

            </>
        )
    }
}
export default Create