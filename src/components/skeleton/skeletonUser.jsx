import React from "react";
import SkeletonElement from "./skeletonElement";
const SkeletonProfile = () => {
  return (
    <div className="skeletons-profile">
      <SkeletonElement type="avatar" />
      <div className="skeletons-profile-subtext">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
    </div>
  );
};

export default SkeletonProfile;
