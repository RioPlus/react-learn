import React, { useState, createContext } from "react";

const NumContext = createContext();

function Child() {
  return (
    <NumContext.Consumer>
      {({ num, setNum }) => (
        <>
          <h2>{num}</h2>
          <button onClick={() => setNum(789)}> 修改</button>
        </>
      )}
    </NumContext.Consumer>
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
