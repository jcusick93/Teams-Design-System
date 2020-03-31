import React from "react";
import Box from "ui-box";
import "./Skeleton.css";

const variantClasses = {
  rect: "skeleton-rect",
  circle: "skeleton-circle",
  text: "skeleton-text"
};

const Skeleton = ({ varient = "rect", ...rest }) => {
  let className = "skeleton";
  if (variantClasses[varient]) {
    className += " " + variantClasses[varient];
  }
  return <Box className={className} {...rest} />;
};
export { Skeleton };
