import App from "../App9-路由";
import Home from "../pages/Home";
import List from "../pages/List";
import Detail from "../pages/Detail";
import Error from "../pages/Error";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// 定义一个路由
const BaseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/List/:id" element={<List></List>}></Route>
          <Route path="/Detail" element={<Detail></Detail>}></Route>
        </Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BaseRouter;
