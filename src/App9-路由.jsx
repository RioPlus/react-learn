import React from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

export default function App9() {
  const location = useLocation();
  console.log(location.pathname);

  const navigate = useNavigate();

  const jumpDetail = () => {
    navigate("/detail", {
      state: {
        username: "张三",
      },
    });
  };
  return (
    <>
      <ul>
        <li>
          <Link to="/home?id=456">首页</Link>
        </li>
        <li>
          <Link to="/list/123">列表页</Link>
        </li>
        <li>
          <Link to="/detail">详情页</Link>
        </li>
      </ul>

      <button onClick={() => jumpDetail()}>跳转详情</button>
      <Outlet></Outlet>
    </>
  );
}
