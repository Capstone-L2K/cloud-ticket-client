import React from "react";

const SizedBox = ({ width = "auto", height = "auto" }) => {
  return <div style={{ width, height }} />;
};
export default SizedBox;
