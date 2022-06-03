import React, { useState, useRef } from "react";

export default function App() {
  const [iptValue, setInput] = useState("test");
  const iptChange = (e) => setInput(e.target.value);
  const element = useRef(null);
  return (
    <div>
      <h2>受控组件</h2>
      <input type="text" value={iptValue} onChange={iptChange} />
      <button onClick={() => console.log(iptValue)}>获取值</button>

      <h2>不受控组件</h2>
      <input type="text" ref={element} />
      <button onClick={() => console.log("element ", element.current.value)}>
        获取值
      </button>
    </div>
  );
}
