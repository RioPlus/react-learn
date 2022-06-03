import React from "react";

const msg = "世界和平";
let flag = true;
const persons = ["关羽", "张飞", "刘备"];

export default class App extends React.Component {
  render() {
    return (
      <>
        <h2>你好,REACT</h2>
        <h3>{msg}</h3>

        <label htmlFor="username">哦、用户名</label>
        <input type="text" id="username" />
        <hr />
        <div className="box">盒子-className</div>
        <div style={{ backgroundColor: flag ? "skyblue" : "pink" }}>
          内敛样式-style
        </div>

        <ul>
          {persons.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </>
    );
  }
}

// export default App;
