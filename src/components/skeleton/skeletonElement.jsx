import React from "react";
import "./skeleton.css";
import Shimmer from "../shimmer/shimmer";
const SkeletonElement = ({ type = null }) => {
  const className = `skeleton ${type}`;
  return (
    <div className={className}>
      <Shimmer />
    </div>
  );
};

export default SkeletonElement;
