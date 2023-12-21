import "./App.css";
import Nav from "./nav";
import gamePic from "./asset/ex2.png";
function App() {
  return (
    //중앙정렬 div
    <div className="w-full flex flex-col justify-center">
      {/* 메뉴 컴포넌트 */}
      <Nav />
      {/* 본문내용 */}
      <div className="w-full h-[100vh] flex justify-center items-center space-x-32">
        <div className="flex flex-col space-y-8">
          <div className="font-bold text-3xl">실험실</div>
          <div className="w-[300px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis quisquam dolor minus deleniti eaque placeat.
          </div>
        </div>
        <div className="w-[280px] h-[500px] border-4 border-blue-500 rounded-2xl">
          <img
            src={gamePic}
            alt="game"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
// export default App;
