import "./App.css";
import navPic from "./asset/nav.png";
import contetnPic from "./asset/ex2.png";

function App() {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-full h-[80px] flex justify-center border border-b-[1px]">
        <div className="max-w-7xl w-full h-full flex justify-between items-center">
          <div className="text-2xl">
            kakao
            <b>talk</b>
          </div>
          <div className="flex space-x-8 text-sm font-bold">
            <div>안녕캠페인</div>
            <div>운영실적</div>
            <div>안전 도구 및 가이드라인</div>
            <div>운영정책</div>
            <div>자동감지와 신고</div>
            <div>서비스 이용제한의 종류</div>
          </div>
          <div>
            <div>
              <img src={navPic} alt="nav" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[700px] flex justify-center items-center">
        <div className="w-[1024px] h-[500px] flex justify-center ">
          <div className="bg-gray-100 w-[50%] flex flex-col justify-center items-center text-3xl font-bold rounded-tl-3xl rounded-bl-3xl">
            간편해진 일상만큼
            <br />
            보안도 걱정없이
            <br />
            <br />
            모두가 자유롭게
            <br />
            소통할 수 있도록
            <br />
            더욱 안전을 생각해요
            <br />
            <div className="mt-20 mr-44 bg-gray-300 w-[100px] h-[30px] rounded-3xl text-sm flex justify-center items-center">
              자세히 보기
            </div>
          </div>
          <div className="bg-blue-500 w-[50%] rounded-br-3xl rounded-tr-3xl">
            <img
              src={contetnPic}
              alt="content"
              className="w-full h-full object-cover rounded-br-3xl rounded-tr-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
// export default App;
