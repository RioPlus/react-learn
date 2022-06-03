import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  let location = useLocation();
  console.log("location ", location);
  return (
    <>
      <div>detail页</div>
      <span>{location.state ? location.state.username : ""}</span>
      {/* detail {location.state? } */}
    </>
  );
}
