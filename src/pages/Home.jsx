import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [SearchParams] = useSearchParams();
  //   获取路由 query参数
  console.log("useSearchParams ", SearchParams.get("id"));
  return <div>home页</div>;
}
