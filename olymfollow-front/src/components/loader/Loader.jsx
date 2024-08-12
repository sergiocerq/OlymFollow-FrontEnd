import React from "react";
import Lottie from "lottie-react";
import "./loader.css";
import loadingAnimation from "../../assets/LoadingAnimation.json";

export const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie animationData={loadingAnimation} />
    </div>
  );
};
