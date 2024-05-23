import Layout from '../../components/Layout';
import './style.css';

export default function KPI() {
  const data = [
    {
      title: 'Bài tập',
      subData: [
        {
          title: 'Bài tập 1',
          status: 'Đã hoàn thành',
          timeEnd: '10:00 - 12:00',
          dayEnd: '10/02/2024'
        },
        {
          title: 'Bài tập 2',
          status: 'Đã hoàn thành',
          timeEnd: '10:00 - 12:00',
          dayEnd: '10/02/2024'
        },
        {
          title: 'Bài tập 3',
          status: 'Đã hoàn thành',
          timeEnd: '10:00 - 12:00',
          dayEnd: '10/02/2024'
        }
      ]
    },

    {
      title: 'Giảng dạy',
      subData: [
        {
          title: 'AI',
          status: 'Đã hoàn thành',
          timeEnd: '10:00 - 12:00',
          dayEnd: '10/02/2024'
        },
        {
          title: 'Backend',
          status: 'Đã hoàn thành',
          timeEnd: '10:00 - 12:00',
          dayEnd: '10/02/2024'
        },
        {
          title: 'UI-UX',
          status: 'Đã hoàn thành',
          timeEnd: '10:00 - 12:00',
          dayEnd: '10/02/2024'
        },
      ]
    }
  ];

  return (
    <>
      <Layout>
        <div className='kpi-dl'>
          <div className='kpi-dl-item active'>Hôm nay</div>
          <div className='kpi-dl-item'>Sắp đến hạn</div>
          <div className='kpi-dl-item'>Quá hạn</div>
        </div>    

        <div className='kpi-act'>
          <div className='search'>
            <input placeholder='Tìm kiếm theo danh mục...'/>
          </div>

          <div className='add-kpi'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36" fill="none">
              <path d="M18 33.75C9.30152 33.75 2.25 26.6985 2.25 18C2.25 9.30152 9.30152 2.25 18 2.25C26.6985 2.25 33.75 9.30152 33.75 18C33.75 26.6985 26.6985 33.75 18 33.75ZM18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36Z" fill="#081C15"/>
              <path d="M18 9C18.6213 9 19.125 9.50368 19.125 10.125V16.875H25.875C26.4963 16.875 27 17.3787 27 18C27 18.6213 26.4963 19.125 25.875 19.125H19.125V25.875C19.125 26.4963 18.6213 27 18 27C17.3787 27 16.875 26.4963 16.875 25.875V19.125H10.125C9.50368 19.125 9 18.6213 9 18C9 17.3787 9.50368 16.875 10.125 16.875H16.875V10.125C16.875 9.50368 17.3787 9 18 9Z" fill="#081C15"/>
            </svg>
            <button>
              Thêm KPI
            </button>
          </div>
        </div>

        <div className='kpi-container'>  
          {data.map((arr, index) => (
              <div className='kpi-item' key={index}>
              <div className='kpi-title'>
                <span>{arr.title}</span>
              </div>

              <div className='kpi-list'>
                {arr.subData.map((item, index) => (
                    <div className='kpi-list-item' key={index}>
                    <div className='kpi-list-item-title'>
                      <div className='menu'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="6" viewBox="0 0 17 6" fill="none">
                        <path d="M2.61331 4.64007C3.50431 4.64007 4.22662 3.82522 4.22662 2.82004C4.22662 1.81486 3.50431 1 2.61331 1C1.7223 1 1 1.81486 1 2.82004C1 3.82522 1.7223 4.64007 2.61331 4.64007Z" stroke="#081C15"/>
                        <path d="M8.25991 4.64007C9.15092 4.64007 9.87322 3.82522 9.87322 2.82004C9.87322 1.81486 9.15092 1 8.25991 1C7.36891 1 6.64661 1.81486 6.64661 2.82004C6.64661 3.82522 7.36891 4.64007 8.25991 4.64007Z" stroke="#081C15"/>
                        <path d="M13.9064 4.64007C14.7974 4.64007 15.5197 3.82522 15.5197 2.82004C15.5197 1.81486 14.7974 1 13.9064 1C13.0154 1 12.2931 1.81486 12.2931 2.82004C12.2931 3.82522 13.0154 4.64007 13.9064 4.64007Z" stroke="#081C15"/>
                        </svg>
                      </div>

                      <div className='kpi-list-item-title-left'>
                        <div className='kpi-list-item-title-left-item'>
                          <div className='kpi-list-item-title-left-item-icon'>
                            
                          </div>
                          <div className='kpi-list-item-title-left-item-content'>
                            <div className='kpi-list-item-title-left-item-content-title'>
                              <span>{item.title}</span>
                            </div>

                            <div className='kpi-list-item-title-left-item-content-time'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                              <g clip-path="url(#clip0_31_1968)">
                              <path d="M14.1014 6.2542L2.02585 6.27977M10.7365 1.26132L10.7418 3.76131M5.36958 1.27268L5.37488 3.77268M5.26188 13.7729L10.8971 13.761C12.0243 13.7586 12.5879 13.7574 13.018 13.5522C13.3963 13.3716 13.7036 13.0841 13.8958 12.7309C14.1143 12.3293 14.1132 11.8043 14.1109 10.7542L14.0998 5.50421C14.0976 4.45411 14.0965 3.92906 13.8763 3.52844C13.6826 3.17605 13.3741 2.88986 12.995 2.7109C12.5641 2.50745 12.0005 2.50864 10.8733 2.51103L5.23806 2.52296C4.1109 2.52535 3.54732 2.52654 3.11723 2.73182C2.73892 2.91238 2.43164 3.19987 2.23943 3.55308C2.02092 3.95463 2.02203 4.47968 2.02426 5.52978L2.03538 10.7798C2.0376 11.8299 2.03871 12.3549 2.25892 12.7555C2.45262 13.1079 2.76112 13.3941 3.14019 13.5731C3.57114 13.7765 4.13472 13.7753 5.26188 13.7729Z" stroke="#081C15" stroke-linecap="round" stroke-linejoin="round"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_31_1968">
                              <rect width="16.1008" height="15" fill="white" transform="translate(0 0.0340576) rotate(-0.121325)"/>
                              </clipPath>
                              </defs>
                              </svg>
                              <span>{item.dayEnd}</span>
                            </div>

                            <div className='kpi-list-item-title-left-item-content-time'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                              <path d="M6.69253 8.9546L6.69252 8.95461L6.69622 8.95683L9.63622 10.7118L9.63621 10.7118L9.64057 10.7144C9.7967 10.8055 9.98023 10.865 10.185 10.865C10.542 10.865 10.8968 10.6803 11.0954 10.3421C11.3931 9.84249 11.2321 9.19476 10.7307 8.88836L10.7307 8.88833L10.7258 8.8854L8.3 7.44081V4.26C8.3 3.66452 7.81679 3.1975 7.2375 3.1975C6.65821 3.1975 6.175 3.66452 6.175 4.26V8.0475C6.175 8.427 6.37972 8.7642 6.69253 8.9546ZM7.5 0.5C11.371 0.5 14.5 3.63582 14.5 7.5C14.5 11.3714 11.3714 14.5 7.5 14.5C3.63582 14.5 0.5 11.371 0.5 7.5C0.5 3.63614 3.63614 0.5 7.5 0.5Z" fill="none" stroke="#081C15"/>
                              </svg>
                              <span>{item.timeEnd}</span>
                            </div>

                            <div className='kpi-list-item-title-left-item-content-time'>
                              <button>{item.status}</button>
                            </div>

                          </div>
                        </div>
                      </div>

                      <div className='kpi-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path d="M15 9.16667L10.3333 13.8333L8 11.5M11.5 22C5.70101 22 1 17.299 1 11.5C1 5.70101 5.70101 1 11.5 1C17.299 1 22 5.70101 22 11.5C22 17.299 17.299 22 11.5 22Z" stroke="#85E0A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                    </div>  
                  </div>
                ))}
              </div>
            </div>
          ))}                
        </div>
      </Layout>
    </>
  )
};
