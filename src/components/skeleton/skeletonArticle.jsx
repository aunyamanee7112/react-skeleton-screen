import React from "react";
import SkeletonElement from "./skeletonElement";

const SkeletonArticle = () => {
  return (
    <div className="skeletons-article">
      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
    </div>
  );
};

export default SkeletonArticle;
