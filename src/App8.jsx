import React from "react";
import { connect } from "react-redux";

function App8(props) {
  console.log(props);
  return (
    <>
      <div>{props.myNum}</div>
      <button onClick={() => props.add()}>累加</button>
    </>
  );
}

// 状态映射
const mapStateToProps = (state) => {
  return {
    myNum: state.num,
  };
};

// 事件映射
const mapDispatchToProps = (dispatch) => {
  return {
    add() {
      dispatch({ type: "addNum", value: 2 });
    },
  };
};

// export default connect(state, dispatch)(暴露出去的组件)
export default connect(mapStateToProps, mapDispatchToProps)(App8);
