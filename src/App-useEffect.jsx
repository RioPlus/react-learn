import { useState, useEffect } from "react";
function App() {
  const [num, setNum] = useState(1);
  const change = () => setNum(num + 1);

  useEffect(() => {
    console.log("挂载完成");
  });
  return (
    <>
      <h2>{num}</h2>
      <button onClick={change}>点击修改</button>
    </>
  );
}
export default App;
