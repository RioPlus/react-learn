import React, { useState, createContext, useContext } from "react";

const NumContext = createContext();

function Child() {
  const { num, setNum } = useContext(NumContext);
  return (
    <>
      <h2>{num}</h2>
      <button onClick={() => setNum(789)}> 修改</button>
    </>
  );
}

const Father = () => <Child />;

// 顶级组件
export default function App3() {
  const [num, setNum] = useState(10086);
  return (
    <NumContext.Provider value={{ num, setNum }}>
      <Father />
    </NumContext.Provider>
  );
}
