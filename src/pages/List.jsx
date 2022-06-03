import React from "react";
import { useParams } from "react-router-dom";

export default function List() {
  const params = useParams();
  console.log("params ", params);
  return <div>list页</div>;
}
