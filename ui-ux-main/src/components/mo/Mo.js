import * as React from "react";

function MyComponent() {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <img
              loading="lazy"
              srcSet="..."
              className="img"
            />
            <div className="div-4"> Dự báo</div>
            <img
              loading="lazy"
              srcSet="..."
              className="img-2"
            />
          </div>
        </div>
        <div className="div-5">
          <div className="div-6">
            <div className="div-7">
              <div className="div-8">Dự báo tiến độ</div>
              <div className="div-9">Mục tiêu: GPA 4.0</div>
              <div className="div-10">
                Thời gian thực hiện : 03/03/2023 - 07/07/2024
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c8200a1302d58712cbef2621f90764b63da1303644fb4815f91064af64338cd?"
              className="img-3"
            />
          </div>
          <div className="div-11">Tiến độ KPI 80%</div>
          <div className="div-12">
            <div className="div-13" />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/88937ad6139e4acf0231bf2b89acd0f0c5dc92dd0a149463d902ca48c37d6b33?"
            className="img-4"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="img-5"
          />
          <div className="div-14">
            Thật tuyệt vời bạn đang thực hiện mục tiêu với hiễu suất rất tốt
            hiệu quả lên đến 121,42% <br />
            Nhưng hãy cố gắng cải thiện những danh mục chưa có hiệu suất cao
            như: Lý thuyết nhé
            <br />
            Mong bạn tiếp tục phát huy tinh thần và hoàn thành mục tiêu đề ra
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #fff;
          display: flex;
          max-width: 360px;
          padding-bottom: 55px;
          flex-direction: column;
        }
        .div-2 {
          background-color: #67c49b;
          display: flex;
          width: 100%;
          flex-direction: column;
          font-size: 14px;
          color: #000;
          font-weight: 700;
          line-height: 26px;
          justify-content: center;
          padding: 2px 0;
        }
        .div-3 {
          justify-content: space-between;
          align-items: center;
          background-color: #67c49b;
          display: flex;
          width: 100%;
          gap: 20px;
          padding: 2px 10px 2px 5px;
        }
        .img {
          aspect-ratio: 1.16;
          object-fit: auto;
          object-position: center;
          width: 37px;
          align-self: stretch;
        }
        .div-4 {
          font-family: Roboto, sans-serif;
          align-self: stretch;
          margin: auto 0;
        }
        .img-2 {
          aspect-ratio: 1.15;
          object-fit: auto;
          object-position: center;
          width: 30px;
          align-self: stretch;
          margin: auto 0;
        }
        .div-5 {
          border-radius: 5px;
          mix-blend-mode: plus-darker;
          background-color: #fffcef;
          align-self: center;
          display: flex;
          margin-top: 34px;
          width: 100%;
          max-width: 294px;
          flex-direction: column;
          padding: 14px 11px;
        }
        .div-6 {
          align-self: center;
          display: flex;
          gap: 20px;
          color: #081c15;
          justify-content: space-between;
        }
        .div-7 {
          display: flex;
          flex-direction: column;
        }
        .div-8 {
          color: #000;
          font: 700 20px Roboto, sans-serif;
        }
        .div-9 {
          margin-top: 12px;
          font: 600 14px Roboto, sans-serif;
        }
        .div-10 {
          margin-top: 9px;
          font: 400 10px Roboto, sans-serif;
        }
        .img-3 {
          aspect-ratio: 1.06;
          object-fit: auto;
          object-position: center;
          width: 16px;
          fill: #081c15;
          align-self: start;
        }
        .div-11 {
          color: #49635a;
          margin-top: 9px;
          font: 400 8px Roboto, sans-serif;
        }
        .div-12 {
          border-radius: 5px;
          border-color: rgba(6, 85, 58, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fffcef;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .div-13 {
          border-radius: 5px;
          background: linear-gradient(0deg, #06553a 0%, #06553a 100%),
            linear-gradient(0deg, #06553a 0%, #06553a 100%), #06553a;
          height: 3px;
        }
        .img-4 {
          aspect-ratio: 100;
          object-fit: auto;
          object-position: center;
          width: 100%;
          stroke-width: 2px;
          stroke: #081c15;
          border-color: rgba(8, 28, 21, 1);
          border-style: solid;
          border-width: 2px;
          margin-top: 11px;
        }
        .img-5 {
          aspect-ratio: 2.7;
          object-fit: auto;
          object-position: center;
          width: 100%;
          margin-top: 14px;
        }
        .div-14 {
          border-radius: 10px;
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 2px;
          background-color: #fffcef;
          align-self: start;
          color: #000;
          justify-content: center;
          margin: 152px 0 0 12px;
          padding: 20px 8px;
          font: 400 12px Roboto, sans-serif;
        }
      `}</style>
    </>
  );
}


export default MyComponent;