import React, { useState, memo, useCallback, useMemo } from "react";

const Child = memo((props) => {
  console.log("123触发");
  return (
    <>
      <h2>子组件</h2>
      <button onClick={props.changeNum}>累加</button>
    </>
  );
});

export default function App() {
  const [num, setNum] = useState(1);

  //   callback写法
  //   const changeNum = useCallback(() => {
  //     setNum((num) => num + 1);
  //   }, []);

  //   useMemo
  const changeNum = useMemo((props) => {
    return () => setNum((num) => num + 1);
  }, []);

  return (
    <div>
      <h2>{num}</h2>
      {/* <button onClick={() => setNum(num + 1)}>累加</button> */}
      <Child changeNum={changeNum}></Child>
    </div>
  );
}
