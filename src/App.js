import "./App.css";
function App() {
  const name = "react";
  const name1 = undefined;
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "20px",
    fontWeight: "bold",
    padding: 16,
  };
  return (
    // <div style={style}>
    //   <h1>삼항연산자</h1>
    //   {name === "react" ? <p>리액트입니다</p> : <p>리액트가 아닙니다.</p>}
    //   <br />
    //   <h1>이항연산자</h1>
    //   {name === "react" && <p>리액트입니다.</p>}
    //   <br />
    //   <h1>undefined 렌더링 금지?</h1>
    //   {name1 || "리액트"}
    //   <div className="react">
    //     <h1>CSS 파일 import</h1>
    //     {name}
    //     <p>html과 다르게 태그는 닫아줘야함</p>
    //   </div>
    // </div>
    <>
      <div>
        <div className="one">
          <ul>
            <li>카카오톡</li>
            <li>카톡 안녕가이드</li>
            <li>카톡설명서</li>
            <li>다운로드</li>
          </ul>
        </div>
        <div className="two">
          <div className="box1">
            <h2>카카오톡 쇼핑</h2>
            <p>
              ABCDEFGHIABCDEFGHI
              <br />
              ABCDEFGHIABCDEFGHI
              <br />
              ABCDEFGHIABCDEFGHI
              <br />
            </p>
          </div>
          <div className="box2"></div>
        </div>
      </div>
    </>
  );
}

export default App;
// export default App;
